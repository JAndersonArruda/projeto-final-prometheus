package com.prometheus.projeto_final_prometheus.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String username;

    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @Column(nullable = false, length = 50)
    private String password;

    @Column(name = "dt_cadastro", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime dtCadastro;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserType tipo;

    @PrePersist
    public void prePersist() {
        this.dtCadastro = LocalDateTime.now();
    }
}
