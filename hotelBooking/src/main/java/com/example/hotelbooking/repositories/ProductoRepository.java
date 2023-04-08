package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Categoria;
import com.example.hotelbooking.models.Ciudad;
import com.example.hotelbooking.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Long> {

  List<Producto> searchAllByCategoria(Categoria categoria);

  List<Producto> searchAllByDireccion_Ciudad(Ciudad ciudad);

  @Query("FROM Producto p WHERE p.id NOT IN" +
    "(SELECT b.producto FROM Reserva b " +
    "WHERE b.checkIn < ?2 AND b.checkOut > ?1)")
  List<Producto> searchAllByDates(LocalDate checkIn, LocalDate checkOut);

  @Query("FROM Producto p WHERE p.id NOT IN" +
    "(SELECT b.producto FROM Reserva b " +
    "WHERE b.checkIn < ?2 AND b.checkOut > ?1)" +
    "AND p.direccion.ciudad = ?3")
  List<Producto> searchAllByDatesAndCity(
    LocalDate checkIn, LocalDate checkOut, Ciudad ciudad);

}