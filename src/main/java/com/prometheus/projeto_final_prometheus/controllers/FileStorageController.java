package com.prometheus.projeto_final_prometheus.controllers;

import com.prometheus.projeto_final_prometheus.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class FileStorageController {

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping("/files/{fileName}")
    public ResponseEntity<Resource> serveFile(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(fileStorageService.getAbsolutePath(fileName));
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                String contentType = Files.probeContentType(filePath);
                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType != null ? contentType : "application/octet-stream"))
                        .body(resource);
            } else {
                throw new RuntimeException("Não foi possível ler o arquivo: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Erro: " + e.getMessage());
        } catch (IOException e) {
            throw new RuntimeException("Erro ao determinar o tipo de conteúdo: " + e.getMessage());
        }
    }
}
