package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.dto.UserResponseDTO;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.model.UserType;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.stream.Collectors;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventService eventService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    TokenService tokenService;

    public void register(String username, String email, String password, UserType tipo, String file) {
        if (userRepository.findByEmail(email) != null) {
            throw new IllegalArgumentException("E-mail already registered");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        User newUser = new User(username, email, encryptedPassword, tipo, file);

        userRepository.save(newUser);
    }

    public String login(String email, String password) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(email, password);
        var auth = authenticationManager.authenticate(usernamePassword);

        var user = (User) auth.getPrincipal();
        return tokenService.generateToken(user);
    }

    public UserResponseDTO toUserDTO(User user) {
        UserResponseDTO userResponseDTO = new UserResponseDTO(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getDtCadastro(),
                user.getTipo().name(),
                user.getProfileImage()
                //user.getCreatedEvents(),
                //user.getEventsAttended()
        );

        return userResponseDTO;
    }

    @Transactional
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public UserResponseDTO getLoggedUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal();
        return toUserDTO(user);
    }


    public List<UserResponseDTO> toUserDTOList(List<User> users) {
        return users.stream()
                .map(user -> toUserDTO(user))
                .collect(Collectors.toList());
    }


    public User findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElseThrow(() -> new RuntimeException("Usuário não encontrado com id: " + id));
    }

    public boolean deleteByEmail(String email){
        if(userRepository.existsByEmail(email)){
            userRepository.deleteByEmail(email);
            return true;
        }
        return false;
    }
}
