package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.model.UserType;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    TokenService tokenService;

    public void register(String username, String email, String password, UserType tipo) {
        if (userRepository.findByEmail(email) != null) {
            throw new IllegalArgumentException("E-mail already registered");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        User newUser = new User(username, email, encryptedPassword, tipo);

        userRepository.save(newUser);
    }

    public String login(String email, String password) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(email, password);
        var auth = authenticationManager.authenticate(usernamePassword);

        var user = (User) auth.getPrincipal();
        return tokenService.generateToken(user);
    }

}
