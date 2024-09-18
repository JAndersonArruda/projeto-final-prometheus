package com.prometheus.projeto_final_prometheus.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "certificates")
public class Certificates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome", nullable = false, length = 255)
    private String name;

    @Column(name = "descricao", columnDefinition = "TEXT")
    private String description;

    @Column(name = "data_emissao", nullable = false, updatable = false)
    private LocalDateTime issueDate = LocalDateTime.now();

    @Column(name = "codigo_validacao", nullable = false, unique = true, length = 255)
    private String validationCode;

    @ManyToOne
    @JoinColumn(name = "usuario", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "evento", nullable = false)
    private Event event;
}