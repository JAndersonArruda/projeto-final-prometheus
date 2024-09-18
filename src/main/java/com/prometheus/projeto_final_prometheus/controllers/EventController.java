package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.dto.EventDTO;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.EventRepository;
import com.prometheus.projeto_final_prometheus.service.EventService;
import com.prometheus.projeto_final_prometheus.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    private EventService eventService;
    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/create")
    @Secured("ROLE_ADMIN")
    public ResponseEntity createEvent(@RequestBody EventDTO data) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            Long creatorId = ((User) auth.getPrincipal()).getId();

            eventService.createEvent(data.title(), data.description(), data.location(), data.eventDate(), creatorId);

            return ResponseEntity.ok("Event registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/user/{userId}/events")
    public ResponseEntity<List<Event>> getEventsByUser(@PathVariable Long userId) {
        List<Event> events = eventService.getEventsByCreator(userId);
        return ResponseEntity.ok(events);
    }

    @GetMapping
    public ResponseEntity getAllEvents() {
        List<Event> allEvents = eventService.getAllEvents();

        return ResponseEntity.ok(allEvents);
    }
}
