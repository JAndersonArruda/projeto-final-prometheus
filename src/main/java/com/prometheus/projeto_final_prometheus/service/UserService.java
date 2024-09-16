package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        System.out.println(user);
        System.out.println(userRepository.existsByEmail(user.getEmail()));
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email já existe!");
        }

        System.out.println("Persistindo novo usuário: " + user);
        return userRepository.save(user);
    }
}
