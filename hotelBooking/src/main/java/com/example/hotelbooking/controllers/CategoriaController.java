package com.example.hotelbooking.controllers;

import com.example.hotelbooking.dto.CategoriaDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Categoria;
import com.example.hotelbooking.services.CategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/categorias")
public class CategoriaController {
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> listarCategorias() {
        return ResponseEntity.status(HttpStatus.OK)
          .body(service.listarCategorias());
    }

    @Operation(hidden = true)
    @PostMapping
    public ResponseEntity<Categoria> crearCategoria(@RequestBody Categoria c) throws BadRequest {
        return ResponseEntity.status(HttpStatus.OK).body(service.agregarCategoria(c));
    }

    @Operation(hidden = true)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws NotFound {
        service.eliminarCateogria(id);
        return ResponseEntity.status(HttpStatus.OK).body("Se ha eliminado la categoria");
    }

    @Operation(hidden = true)
    @Transactional
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria, @PathVariable Long id) throws NotFound, BadRequest {
        return ResponseEntity.status(HttpStatus.OK).body(service.modificarCategoria(categoria, id));
    }

}