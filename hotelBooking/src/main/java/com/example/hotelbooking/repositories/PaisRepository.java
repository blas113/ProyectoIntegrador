package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Pais;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaisRepository extends JpaRepository<Pais, Long> {
}