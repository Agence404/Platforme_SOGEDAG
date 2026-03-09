package com.example.Plateforme_SOGEDAG.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(org.springframework.web.multipart.MaxUploadSizeExceededException.class)
    public ResponseEntity<String> handleMaxSizeException(
            org.springframework.web.multipart.MaxUploadSizeExceededException ex) {
        return ResponseEntity
                .badRequest()
                .body("File too large. Please upload smaller files.");
    }
}