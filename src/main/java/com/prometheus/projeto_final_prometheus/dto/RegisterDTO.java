package com.prometheus.projeto_final_prometheus.dto;

import com.prometheus.projeto_final_prometheus.model.UserType;

public record RegisterDTO(String username, String email, String password, UserType tipo) {

}
