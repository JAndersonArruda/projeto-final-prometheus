package com.prometheus.projeto_final_prometheus.service;

import com.prometheus.projeto_final_prometheus.dto.EventResponseDTO;
import com.prometheus.projeto_final_prometheus.model.CertificateId;
import com.prometheus.projeto_final_prometheus.model.Certificates;
import com.prometheus.projeto_final_prometheus.model.Event;
import com.prometheus.projeto_final_prometheus.model.User;
import com.prometheus.projeto_final_prometheus.repository.EventRepository;
import com.prometheus.projeto_final_prometheus.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepository;

    public void createEvent(String title, String description, String location, LocalDateTime eventDate, Long creatorId, String file) {
        User creator = userRepository.findById(creatorId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Event newEvent = new Event(title, description, location, eventDate, creator, file);

        eventRepository.save(newEvent);
    }

    @Transactional
    public List<EventResponseDTO> getEventsByCreator(Long creatorId) {
        List<Event> events = eventRepository.findByCreatorId(creatorId);
        return events.stream()
                .map(this::convertToEventResponseDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public List<EventResponseDTO> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(this::convertToEventResponseDTO)
                .collect(Collectors.toList());
    }

    public Optional<EventResponseDTO> getEventsById(Long eventId) {
        return eventRepository.findEventsById(eventId)
                .map(this::convertToEventResponseDTO);
    }

    public void editEvent(String title, String description, String location, LocalDateTime eventDate, Long EventId) {
        Event selectedEvent = eventRepository.findById(EventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        selectedEvent.setTitle(title);
        selectedEvent.setDescription(description);
        selectedEvent.setLocation(location);
        selectedEvent.setEventDate(eventDate);
        selectedEvent.setUpdatedAt(LocalDateTime.now());

        eventRepository.save(selectedEvent);
    }

    public boolean deleteEventById(Long eventId){
        if(getEventsById(eventId).isPresent()){
            eventRepository.deleteById(eventId);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean insertParticipant(Long eventId, Long userId) {
        if(getEventsById(eventId).isPresent()) {
            Event selectedEvent = eventRepository.findById(eventId)
                    .orElseThrow(() -> new RuntimeException("Event not found"));

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            selectedEvent.getParticipants().add(user);

            eventRepository.save(selectedEvent);
            return true;
        }
        return false;
    }

    @Transactional
    public boolean leaveEvent(Long eventId, Long userId) {
        if(getEventsById(eventId).isPresent()) {
            Event selectedEvent = eventRepository.findById(eventId)
                    .orElseThrow(() -> new RuntimeException("Event not found"));

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            selectedEvent.getParticipants().remove(user);

            eventRepository.save(selectedEvent);
            return true;
        }
        return false;
    }

    private EventResponseDTO convertToEventResponseDTO(Event event) {
        Set<Long> participantIds = event.getParticipants().stream()
                .map(User::getId)
                .collect(Collectors.toSet());

        EventResponseDTO dto = new EventResponseDTO(
                event.getId(),
                event.getTitle(),
                event.getDescription(),
                event.getLocation(),
                event.getEventDate(),
                event.getCreatedAt(),
                event.getUpdatedAt(),
                event.getCreator().getId(),
                event.getEventImage(),
                participantIds
        );

        return dto;
    }
}
