package com.example.hotelbooking.controllers;

import com.example.hotelbooking.dto.ProductoDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Producto;
import com.example.hotelbooking.services.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/productos")
public class ProductoController {

  private ProductoService service;

  @PostMapping()
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Producto> agregarProducto(
      @Valid @RequestBody ProductoDTO productoDTO,
      BindingResult bindingResult
  ) throws BadRequest, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(service.agregarProducto(productoDTO));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Producto> buscarProducto(
      @PathVariable Long id)
      throws NotFound {
    return ResponseEntity.status(HttpStatus.OK).body(service.buscarProducto(id));
  }

  @GetMapping
  public ResponseEntity<List<Producto>> listarProductos() {
    var listProductos = service.listarProductos();
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @GetMapping("/random")
  public ResponseEntity<List<Producto>> randomProductos() {
    var listProductos = service.randomProductos();
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @GetMapping("/categoria/{id}")
  public ResponseEntity<List<Producto>> categoriaProductos(
      @PathVariable Long id
  ) throws NotFound {
    var listProductos = service.categoriaProductos(id);
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @GetMapping("/ciudad/{id}")
  public ResponseEntity<List<Producto>> ciudadProductos(
      @PathVariable Long id
  ) throws NotFound {
    var listProductos = service.ciudadProductos(id);
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @GetMapping("/fechas/{checkIn}/{checkOut}")
  public ResponseEntity<List<Producto>> fechaProductos(
    @PathVariable String checkIn,
    @PathVariable String checkOut
  ) throws NotFound {
    var listProductos = service.fechaProductos(checkIn, checkOut);
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @GetMapping("/fechas/{checkIn}/{checkOut}/ciudad/{id}")
  public ResponseEntity<List<Producto>> fechaCiudadProductos(
    @PathVariable String checkIn,
    @PathVariable String checkOut,
    @PathVariable Long id
  ) throws NotFound {
    var listProductos = service.fechaCiudadProductos(checkIn, checkOut, id);
    if (listProductos.isEmpty())
      return ResponseEntity.status(HttpStatus.NO_CONTENT)
        .body(listProductos);
    return ResponseEntity.status(HttpStatus.OK)
      .body(listProductos);
  }

  @Transactional
  @PutMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Producto> actualizarProductos(
    @PathVariable Long id,
    @Valid @RequestBody ProductoDTO productoDTO,
    BindingResult bindingResult
  ) throws BadRequest, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    return ResponseEntity.status(HttpStatus.OK)
      .body(service.actualizarProducto(id, productoDTO));
  }

  @Transactional
  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<String> eliminarProductos(@PathVariable Long id) throws NotFound {
    service.eliminarProductos(id);
    return ResponseEntity.status(HttpStatus.OK).body("Se ha eliminado el producto");
  }

}