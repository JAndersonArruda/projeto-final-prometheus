package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        try {
            Event createdEvent = eventService.createEvent(event);
            return ResponseEntity.ok(createdEvent);
        } catch (SecurityException e) {
            return ResponseEntity.status(403).build(); // Forbidden
        }
    }

}
