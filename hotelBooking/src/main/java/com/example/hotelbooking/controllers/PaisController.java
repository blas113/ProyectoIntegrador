package com.example.hotelbooking.controllers;

import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Pais;
import com.example.hotelbooking.repositories.PaisRepository;
import com.example.hotelbooking.services.PaisService;
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
@RequestMapping("/paises")
@CrossOrigin
@RestController
public class PaisController {

  private PaisService paisService;

  private PaisRepository paisRepository;

  @Operation(hidden = true)
  @PostMapping()
  public ResponseEntity<Pais> createCountry(
    @Valid @RequestBody Pais pais,
    BindingResult bindingResult
  ) throws BadRequest {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(paisService.crearPais(pais));
  }

  @GetMapping()
  public ResponseEntity<List<Pais>> getAllCountries() {
    var paises = paisRepository.findAll();
    if (paises.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(paises);
    return ResponseEntity.status(HttpStatus.OK)
      .body(paises);
  }

  @Operation(hidden = true)
  @Transactional
  @PutMapping("/{id}")
  public ResponseEntity<Pais> updateCountry(
    @PathVariable Long id,
    @Valid @RequestBody Pais pais,
    BindingResult bindingResult
  ) throws BadRequest, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.OK)
      .body(paisService.actualizarPais(id, pais));
  }

  @Operation(hidden = true)
  @DeleteMapping ("/{id}")
  public ResponseEntity<Pais> deleteCountry(
    @PathVariable Long id
  ) throws NotFound {
    return ResponseEntity.status(HttpStatus.OK)
      .body(paisService.eliminarPais(id));
  }

}