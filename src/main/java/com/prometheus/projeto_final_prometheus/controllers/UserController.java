package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.dto.EmailDTO;
import com.prometheus.projeto_final_prometheus.dto.UserResponseDTO;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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

    @PostMapping("/delete")
    @Secured("ROLE_ADMIN")
    public ResponseEntity DeleteUserByEmail(@RequestBody EmailDTO data){
        try {
            if(userService.deleteByEmail(data.email())) {
                return ResponseEntity.ok("User deleted successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponseDTO> getLoggedUser() {
        UserResponseDTO userResponseDTO = userService.getLoggedUser();

        return ResponseEntity.ok(userResponseDTO);
    }
}
