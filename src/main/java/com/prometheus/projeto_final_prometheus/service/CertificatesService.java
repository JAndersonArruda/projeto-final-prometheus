package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.model.Certificates;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.CertificatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CertificatesService {
    @Autowired
    private CertificatesRepository certificatesRepository;

    public void issueCertificatesForEvent(Event event, User currentUser) {
        if (!event.getCreator().getId().equals(currentUser.getId())) {
            throw new SecurityException("Usuário não autorizado a emitir certificados");
        }

        for (User participant : event.getParticipants()) {
            Certificates certificate = new Certificates();
            certificate.setName("Certificado de Participação no Evento: " + event.getTitle());
            certificate.setDescription("Este certificado certifica que " + participant.getUsername() + " participou do evento.");
            certificate.setUser(participant);
            certificate.setEvent(event);
            certificate.setValidationCode(generateValidationCode());

            certificatesRepository.save(certificate);
        }
    }

    private String generateValidationCode() {
        return UUID.randomUUID().toString();
    }
}
