package com.prometheus.projeto_final_prometheus.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.prometheus.projeto_final_prometheus.dto.AuthenticationDTO;
import com.prometheus.projeto_final_prometheus.dto.LoginResponseDTO;
import com.prometheus.projeto_final_prometheus.dto.RegisterDTO;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import com.prometheus.projeto_final_prometheus.service.FileStorageService;
import com.prometheus.projeto_final_prometheus.service.TokenService;
import com.prometheus.projeto_final_prometheus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    TokenService tokenService;
    @Autowired
    UserService userService;
    @Autowired
    private FileStorageService fileStorageService;

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationDTO data) {
        logger.info("Recebendo requisição de login para o email: {}", data.email());
        System.out.println("hel");
        try {
            String token = userService.login(data.email(), data.password());
            logger.info("Login bem-sucedido para o email: {}", data.email());
            return ResponseEntity.ok(new LoginResponseDTO(token));
        } catch (Exception e) {
            logger.error("Falha no login para o email: {}. Erro: {}", data.email(), e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponseDTO("Invalid credentials"));
        }
    }

    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity register(
            @ModelAttribute("file") MultipartFile file,
            @ModelAttribute RegisterDTO data) throws IOException {
        try {
            String fileName = fileStorageService.storeFile(file);
            userService.register(data.username(), data.email(), data.password(), data.tipo(), fileName);
            return ResponseEntity.ok("User registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
