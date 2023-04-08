package com.example.hotelbooking.services;

import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Pais;
import com.example.hotelbooking.repositories.PaisRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@AllArgsConstructor
@Service
public class PaisService {

  private PaisRepository paisRepository;

  public Pais buscarPais(Long id)
    throws NotFound {
    return paisRepository.findById(id)
      .orElseThrow(() -> new NotFound("No existe país con id " + id));
  }

  public Pais crearPais(Pais pais) {
    var nuevoPais = new Pais(
      null,
      pais.getNombre(),
      pais.getCodigo(),
      new ArrayList<>()
    );
    return paisRepository.save(pais);
  }

  public Pais actualizarPais(Long id, Pais pais)
    throws NotFound {
    var paisToUpdate = buscarPais(id);
    paisToUpdate.setNombre(pais.getNombre());
    paisToUpdate.setCodigo(pais.getCodigo());
    return paisToUpdate;
  }

  public Pais eliminarPais(Long id)
    throws NotFound {
    var paisEliminado = buscarPais(id);
    paisRepository.deleteById(id);
    return paisEliminado;
  }

}
