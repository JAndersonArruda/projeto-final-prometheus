package com.prometheus.projeto_final_prometheus.dto;

import com.prometheus.projeto_final_prometheus.model.CertificateId;

import java.time.LocalDateTime;
import java.util.Set;

public record EventResponseDTO(Long id, String title, String description, String location, LocalDateTime eventDate, LocalDateTime createdAt, LocalDateTime updatedAt, Long creatorId, String eventImage, Set<Long> participantIds) {
}
