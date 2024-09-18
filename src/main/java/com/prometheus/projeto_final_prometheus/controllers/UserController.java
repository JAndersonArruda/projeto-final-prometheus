package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.dto.UserResponseDTO;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        UserResponseDTO userDTO = userService.toUserDTO(user);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getUsers() {
        List<User> allUsers = userService.getAllUsers();
        List<UserResponseDTO> userDTOs = userService.toUserDTOList(allUsers);

        return ResponseEntity.ok(userDTOs);
    }
}
