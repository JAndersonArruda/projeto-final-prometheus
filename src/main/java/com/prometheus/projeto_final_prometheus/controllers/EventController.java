package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.dto.EventDTO;
import com.prometheus.projeto_final_prometheus.dto.IdDTO;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.EventRepository;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import com.prometheus.projeto_final_prometheus.service.CertificatesService;
import com.prometheus.projeto_final_prometheus.service.EventService;
import com.prometheus.projeto_final_prometheus.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    private EventService eventService;
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CertificatesService certificatesService;
    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/create")
    @Secured("ROLE_ADMIN")
    public ResponseEntity createEvent(
            @ModelAttribute EventDTO data,
            @ModelAttribute("file") MultipartFile file
            ) throws IOException {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            Long creatorId = ((User) auth.getPrincipal()).getId();

            String fileName = fileStorageService.storeFile(file);
            eventService.createEvent(data.title(), data.description(), data.location(), data.eventDate(), creatorId, fileName);

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

    @GetMapping("/id/{id}")
    public ResponseEntity getEventById(@PathVariable Long id) {
        Optional<Event> events = eventService.getEventsById(id);

        return ResponseEntity.ok(events.get());
    }

    @PostMapping("/edit/{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity editEventById(@RequestBody EventDTO data, @PathVariable Long id) {
        try {
            eventService.editEvent(data.title(), data.description(), data.location(), data.eventDate(), id);
            return ResponseEntity.ok("Event edited successfully");
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/delete")
    @Secured("ROLE_ADMIN")
    public ResponseEntity deleteEventById(@RequestBody IdDTO data) {
        try{
            if(eventService.deleteEventById(data.id())){
                return ResponseEntity.ok("Event deleted successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found");
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/join")
    public ResponseEntity joinEvent(@RequestBody IdDTO data) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            Long participantId = ((User) auth.getPrincipal()).getId();

            if(eventService.insertParticipant(data.id(), participantId)){
                return ResponseEntity.ok("User joined event successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found");

        }
        catch (ClassCastException e){
            return ResponseEntity.badRequest().body("User cannot join an event without being logged in");
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/leave")
    public ResponseEntity leaveEvent(@RequestBody IdDTO data) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            Long participantId = ((User) auth.getPrincipal()).getId();

            if(eventService.leaveEvent(data.id(), participantId)){
                return ResponseEntity.ok("User leaved event successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found");

        }
        catch (ClassCastException e){
            return ResponseEntity.badRequest().body("User cannot leave an event without being logged in");
        }
        catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{eventId}/issue-certificates")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Void> issueCertificates(@PathVariable Long eventId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User currentUser = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new IllegalArgumentException("Evento não encontrado"));



        certificatesService.issueCertificatesForEvent(event, currentUser);
        return ResponseEntity.ok().build();
    }

}
