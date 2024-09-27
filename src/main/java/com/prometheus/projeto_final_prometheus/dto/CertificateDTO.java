package com.prometheus.projeto_final_prometheus.dto;

import java.time.LocalDateTime;

public record CertificateDTO(String name, String description, LocalDateTime issueDate, String validationCode, String eventTitle) {
}
