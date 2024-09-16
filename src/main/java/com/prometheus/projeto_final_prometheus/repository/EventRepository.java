package com.prometheus.projeto_final_prometheus.repository;

import com.prometheus.projeto_final_prometheus.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
