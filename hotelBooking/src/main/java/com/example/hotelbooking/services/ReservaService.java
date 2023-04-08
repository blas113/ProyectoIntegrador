package com.example.hotelbooking.services;

import com.example.hotelbooking.dto.ReservaDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.Conflict;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Reserva;
import com.example.hotelbooking.repositories.ReservaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@AllArgsConstructor
@Service
public class ReservaService {

  ReservaRepository reservaRepository;
  ProductoService productoService;
  UserService userService;

  public Reserva obtenerReserva(Long id) throws NotFound {
    return reservaRepository.findById(id).orElseThrow(
      () -> new NotFound("No existe reserva con id " + id));
  }

  public List<Reserva> listarReservasProducto(Long id)
    throws NotFound {
    return reservaRepository
      .searchAllByProducto(productoService.buscarProducto(id));
  }

  public List<Reserva> listarReservasUsuario(String token)
    throws NotFound, BadRequest {
    var usuario = userService.searchUserById(
      userService.getUserFromToken(token).getId());
    return reservaRepository
      .searchAllByUsuario(usuario);
  }

  public Reserva nuevaReserva(
    String token,
    ReservaDTO reservaDTO
  ) throws NotFound, Conflict, BadRequest {

    var producto = productoService.buscarProducto(reservaDTO.getProducto_id());
    var fechaCheckin = LocalDate.parse(reservaDTO.getCheckIn());
    var fechaCheckout = LocalDate.parse(reservaDTO.getCheckOut());
    var user = userService.getUserFromToken(token);

    if(existBookingByDate(reservaDTO.getProducto_id(), fechaCheckin, fechaCheckout))
      throw new Conflict("Ya existe una reserva para las fechas ingresadas");
    var reserva = Reserva.builder()
        .id(null)
        .horaLlegada(formatStringToLocalTime(reservaDTO.getHoraLlegada()))
        .checkIn(fechaCheckin)
        .checkOut(fechaCheckout)
        .producto(producto)
        .usuario(user)
        .build();
    return reservaRepository.save(reserva);
  }

  public Reserva eliminarReserva(Long id)
    throws NotFound {
    var reservaEliminada = obtenerReserva(id);
    reservaRepository.delete(reservaEliminada);
    return reservaEliminada;
  }

  public LocalTime formatStringToLocalTime(String time){
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm");
    return LocalTime.parse(time,dtf);
  }

  private Boolean existBookingByDate(
    Long product_id, LocalDate checkIn, LocalDate checkOut)
    throws NotFound {
    var listaReservas = listarReservasProducto(product_id);
    return listaReservas.stream()
      .anyMatch(reserva ->
        checkIn.isBefore(reserva.getCheckOut())
          && checkOut.isAfter(reserva.getCheckIn()));
  }

}