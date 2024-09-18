package com.prometheus.projeto_final_prometheus.repository;

import com.prometheus.projeto_final_prometheus.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByCreatorId(Long creatorId);
}
