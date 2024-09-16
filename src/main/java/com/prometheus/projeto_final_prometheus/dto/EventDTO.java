package com.prometheus.projeto_final_prometheus.dto;

import java.time.LocalDateTime;

public record EventDTO(String title, String description, String location, LocalDateTime eventDate) {
}
