package com.example.hotelbooking.services;

import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Ciudad;
import com.example.hotelbooking.repositories.CiudadRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class CiudadService {

  private CiudadRepository ciudadRepository;
  private PaisService paisService;

  public Ciudad buscarCiudad(Long id)
    throws NotFound {
    return ciudadRepository.findById(id)
      .orElseThrow(() -> new NotFound("No existe ciudad con id " + id));
  }

  public Ciudad crearCiudad(Ciudad ciudad) {
    var nuevaCiudad = new Ciudad(
      null,
      ciudad.getNombre(),
      ciudad.getPais()
    );
    return ciudadRepository.save(ciudad);
  }

  public Ciudad actualizarCiudad(Long id, Ciudad ciudad)
    throws NotFound {
    var ciudadToUpdate = buscarCiudad(id);
    ciudadToUpdate.setNombre(ciudad.getNombre());
    ciudadToUpdate.setPais(ciudad.getPais());
    return ciudadToUpdate;
  }

  public Ciudad eliminarCiudad(Long id)
    throws NotFound {
    var ciudadEliminada = buscarCiudad(id);
    ciudadRepository.deleteById(id);
    return ciudadEliminada;
  }

}
