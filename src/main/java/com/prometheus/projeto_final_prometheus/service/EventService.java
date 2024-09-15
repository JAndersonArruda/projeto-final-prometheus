package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
}
