package com.example.hotelbooking.controllers;

import com.example.hotelbooking.services.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URISyntaxException;

@CrossOrigin
@RestController
public class S3Controller {

  @Autowired
  private S3Service s3Service;

  @PostMapping("/files/upload")
  public ResponseEntity<String> uploadFile(
    @RequestParam("file") MultipartFile file
  ) {
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(s3Service.uploadFile(file));
  }

  @DeleteMapping("/files/delete")
  public ResponseEntity<String> deleteFile(
    @RequestBody String url
  ) throws URISyntaxException {
    s3Service.deleteFile(url);
    return ResponseEntity.status(HttpStatus.OK)
      .body("File deleted");
  }

}