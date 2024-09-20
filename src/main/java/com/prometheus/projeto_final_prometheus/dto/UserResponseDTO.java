package com.prometheus.projeto_final_prometheus.dto;

import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.UserType;

import java.time.LocalDateTime;
import java.util.Set;

public record UserResponseDTO(
        Long id, String username,
        String email,
        LocalDateTime dtCadastro,
        String tipo,
        String file,
        Set<Event> createdEvents,
        Set<Event> eventsAttended
        ) {
}
