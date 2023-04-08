package com.example.hotelbooking.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsConfig {

  @Value("${AWS_REGION}")
  private String REGION;

  @Value("${AWS_ACCESS_KEY_ID}")
  private String ACCESS_KEY;

  @Value("${AWS_SECRET_ACCESS_KEY}")
  private String SECRET_KEY;

  @Bean
  public AmazonS3 generateS3Client() {
    var credentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
    return AmazonS3ClientBuilder.standard()
      .withCredentials(new AWSStaticCredentialsProvider(credentials))
      .withRegion(REGION)
      .build();
  }

}