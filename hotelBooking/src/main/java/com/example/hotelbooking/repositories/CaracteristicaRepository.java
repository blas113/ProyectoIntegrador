package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long> {
}