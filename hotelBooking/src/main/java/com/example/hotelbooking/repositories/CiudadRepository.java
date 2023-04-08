package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CiudadRepository extends JpaRepository<Ciudad, Long> {
}