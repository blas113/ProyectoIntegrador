package com.example.hotelbooking.controllers;

import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Ciudad;
import com.example.hotelbooking.repositories.CiudadRepository;
import com.example.hotelbooking.services.CiudadService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RequestMapping("/ciudades")
@CrossOrigin
@RestController
public class CiudadController {

  private CiudadService ciudadService;
  private CiudadRepository ciudadRepository;

  @Operation(hidden = true)
  @PostMapping()
  public ResponseEntity<Ciudad> createCity(
    @Valid @RequestBody Ciudad ciudad,
    BindingResult bindingResult
  ) throws BadRequest {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(ciudadService.crearCiudad(ciudad));
  }

  @GetMapping()
  public ResponseEntity<List<Ciudad>> getAllCities() {
    var ciudades = ciudadRepository.findAll();
    if (ciudades.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(ciudades);
    return ResponseEntity.status(HttpStatus.OK)
      .body(ciudades);
  }

  @Operation(hidden = true)
  @Transactional
  @PutMapping("/{id}")
  public ResponseEntity<Ciudad> updateCity(
    @PathVariable Long id,
    @Valid @RequestBody Ciudad ciudad,
    BindingResult bindingResult
  ) throws BadRequest, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.OK)
      .body(ciudadService.actualizarCiudad(id, ciudad));
  }

  @Operation(hidden = true)
  @DeleteMapping ("/{id}")
  public ResponseEntity<Ciudad> deleteCity(
    @PathVariable Long id
  ) throws NotFound {
    return ResponseEntity.status(HttpStatus.OK)
      .body(ciudadService.eliminarCiudad(id));
  }

}