package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Producto;
import com.example.hotelbooking.models.Reserva;
import com.example.hotelbooking.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva,Long> {

  List<Reserva> searchAllByProducto(Producto producto);

  List<Reserva> searchAllByUsuario(User user);

}