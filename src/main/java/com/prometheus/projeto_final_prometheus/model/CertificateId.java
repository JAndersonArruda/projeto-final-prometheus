package com.prometheus.projeto_final_prometheus.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;


public class CertificateId implements Serializable {
    private Long user;
    private Long event;

    public CertificateId() {}

    public CertificateId(Long user, Long event) {
        this.user = user;
        this.event = event;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CertificateId)) return false;
        CertificateId that = (CertificateId) o;
        return Objects.equals(user, that.user) && Objects.equals(event, that.event);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, event);
    }
}
