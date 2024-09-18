package com.prometheus.projeto_final_prometheus.repository;

import com.prometheus.projeto_final_prometheus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    UserDetails findByEmail(String email);
    void deleteByEmail(String email);
}