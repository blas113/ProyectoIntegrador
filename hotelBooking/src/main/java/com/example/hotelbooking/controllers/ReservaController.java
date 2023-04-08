package com.example.hotelbooking.controllers;

import com.example.hotelbooking.dto.ReservaDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.Conflict;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Reserva;
import com.example.hotelbooking.services.ReservaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/reservas")
public class ReservaController {

  private ReservaService service;

  @PostMapping()
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<Reserva> agregarReserva(
    @RequestHeader String Authorization,
    @Valid @RequestBody ReservaDTO reservaDTO,
    BindingResult bindingResult
  ) throws BadRequest, NotFound, Conflict {
    if(bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(service.nuevaReserva(Authorization, reservaDTO));
  }

  @GetMapping("/producto/{id}")
  public ResponseEntity<List<Reserva>> productoReservas(
      @PathVariable Long id
  ) throws NotFound {
    var listReservas = service.listarReservasProducto(id);
    if(listReservas.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
          .body(listReservas);
    return ResponseEntity.status(HttpStatus.OK)
        .body(listReservas);
  }

  @GetMapping("/usuario")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<List<Reserva>> usuarioReservas(
    @RequestHeader String Authorization
  ) throws BadRequest, NotFound {
    var listReservas = service.listarReservasUsuario(Authorization);
    if (listReservas.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listReservas);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listReservas);
  }

}