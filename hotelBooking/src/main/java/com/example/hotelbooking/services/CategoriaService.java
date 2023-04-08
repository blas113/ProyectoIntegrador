package com.example.hotelbooking.services;

import com.example.hotelbooking.dto.CategoriaDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Categoria;
import com.example.hotelbooking.repositories.CategoriaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class CategoriaService {
    private CategoriaRepository repository;

    public List<CategoriaDTO> listarCategorias () {
        return repository.findAll().stream()
          .map(c -> CategoriaDTO.builder()
            .id(c.getId())
            .nombre(c.getNombre())
            .descripcion(c.getDescripcion())
            .url(c.getUrl())
            .productos(c.getProducto().size())
            .build()).collect(Collectors.toList());
    }

    public Categoria agregarCategoria (Categoria c) throws BadRequest {
        if(c.getNombre()== null ||c.getUrl()== null)
            throw new BadRequest("Los campos de nombre y url no pueden ser nulos");
        if(c.getNombre().isBlank()||c.getUrl().isBlank())
            throw new BadRequest("Los campos de nombre y url deben estar completados");
        return this.repository.save(c);
    }

    public Categoria modificarCategoria (Categoria c, Long id) throws NotFound, BadRequest {
        if(!repository.existsById(id))
            throw new NotFound("No existe una categoria con el id " + id);
        if(c.getNombre()== null ||c.getUrl()== null)
            throw new BadRequest("Los campos de nombre y url no pueden ser nulos");
        if(c.getNombre().isBlank()||c.getUrl().isBlank())
            throw new BadRequest("Los campos de nombre y url deben estar completados");
        this.repository.update(id,c.getNombre(), c.getDescripcion(), c.getUrl());
        return repository.findById(id).orElseThrow();
    }

    public void eliminarCateogria (Long id) throws NotFound {
        if(!repository.existsById(id))
            throw new NotFound("No existe una categoria con el id " + id);
        this.repository.deleteById(id);
    }

    public Categoria buscarCategoria(Long id)
        throws NotFound {
        return this.repository.findById(id)
            .orElseThrow(() -> new NotFound("No existe categoria con id " + id));
    }

}