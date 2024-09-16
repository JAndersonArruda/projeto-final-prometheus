package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        System.out.println(user);
        try {
            User newUser = userService.createUser(user);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
