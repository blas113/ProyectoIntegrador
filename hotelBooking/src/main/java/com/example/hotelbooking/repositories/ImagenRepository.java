package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImagenRepository extends JpaRepository<Imagen,Long> {
}