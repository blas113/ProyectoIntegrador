package com.example.hotelbooking.services;

import com.amazonaws.services.s3.AmazonS3;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@Service
public class S3Service {

  @Value("${AWS_S3_BUCKET_NAME}")
  private String BUCKET_NAME;

  @Autowired
  private AmazonS3 s3Client;

  public String uploadFile(MultipartFile file) {
    var fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
    try {
      var fileToPut = convertMultipartFileToFile(file);
      s3Client.putObject(BUCKET_NAME, fileName, fileToPut);
      fileToPut.delete();
      s3Client.getUrl(BUCKET_NAME, fileName);
    } catch (Exception e) {
      log.error("Error uploading new file");
      log.error(e.getMessage());
    }
    return s3Client.getUrl(BUCKET_NAME, fileName).toString();
  }

  public void deleteFile(String url) throws URISyntaxException {
    URI uri = new URI(url);
    String fileName = uri.getRawPath()
      .replaceFirst("/", "");
    System.out.println(fileName);
    s3Client.deleteObject(BUCKET_NAME, fileName);
  }

  public File convertMultipartFileToFile(MultipartFile file) {
    var convertedFile = new File(file.getOriginalFilename());
    try (var fos = new FileOutputStream(convertedFile)) {
      fos.write(file.getBytes());
    } catch (IOException e) {
      log.error("Error converting multipartFile to file");
      log.error(e.getMessage());
    }
    return convertedFile;
  }

}