package com.prometheus.projeto_final_prometheus.repository;

import com.prometheus.projeto_final_prometheus.model.CertificateId;
import com.prometheus.projeto_final_prometheus.model.Certificates;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface CertificatesRepository extends JpaRepository<Certificates, CertificateId> {
    Set<Certificates> findByValidationCode(String validationCode);
}
