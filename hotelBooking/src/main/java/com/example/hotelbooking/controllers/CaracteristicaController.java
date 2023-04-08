package com.example.hotelbooking.controllers;

import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Caracteristica;
import com.example.hotelbooking.repositories.CaracteristicaRepository;
import com.example.hotelbooking.services.CaracteristicaService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RequestMapping("/caracteristicas")
@CrossOrigin
@RestController
public class CaracteristicaController {

  private CaracteristicaService caracteristicaService;
  private CaracteristicaRepository caracteristicaRepository;

  @Operation(hidden = true)
  @PostMapping()
  public ResponseEntity<Caracteristica> crearCaracteristica(
    @Valid @RequestBody Caracteristica caracteristica,
    BindingResult bindingResult
  ) throws BadRequest {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(caracteristicaService.crearCaracteristica(caracteristica));
  }

  @GetMapping()
  public ResponseEntity<List<Caracteristica>> obtenerCaracteristicas() {
    var features = caracteristicaRepository.findAll();
    if (features.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(features);
    return ResponseEntity.status(HttpStatus.OK)
      .body(features);
  }

  @Operation(hidden = true)
  @Transactional
  @PutMapping("/{id}")
  public ResponseEntity<Caracteristica> actualizarCaracteristicas(
    @PathVariable Long id,
    @Valid @RequestBody Caracteristica caracteristica,
    BindingResult bindingResult
  ) throws BadRequest, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.OK)
      .body(caracteristicaService.actualizarCaracteristica(id, caracteristica));
  }

  @Operation(hidden = true)
  @DeleteMapping ("/{id}")
  public ResponseEntity<Caracteristica> eliminarCaracteristica(
    @PathVariable Long id
  ) throws NotFound {
    return ResponseEntity.status(HttpStatus.OK)
      .body(caracteristicaService.eliminarCaracteristica(id));
  }

}