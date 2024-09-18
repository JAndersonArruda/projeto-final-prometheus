package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.EventRepository;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    public void createEvent(String title, String description, String location, LocalDateTime eventDate, Long creatorId) {
        User creator = userRepository.findById(creatorId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Event newEvent = new Event(title, description, location, eventDate, creator);

        eventRepository.save(newEvent);
    }

    @Transactional
    public List<Event> getEventsByCreator(Long creatorId) {
        return eventRepository.findByCreatorId(creatorId);
    }

    @Transactional
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
