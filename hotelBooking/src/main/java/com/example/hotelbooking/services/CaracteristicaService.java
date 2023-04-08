package com.example.hotelbooking.services;

import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Caracteristica;
import com.example.hotelbooking.repositories.CaracteristicaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@AllArgsConstructor
@Service
public class CaracteristicaService {

  private CaracteristicaRepository caracteristicaRepository;

  public Caracteristica buscarCaracteristica(Long id)
    throws NotFound {
    return caracteristicaRepository.findById(id)
      .orElseThrow(() -> new NotFound("No existe característica con id " + id));
  }

  public List<Caracteristica> obtenerCaracteristicas(List<Long> id)
    throws NotFound {
    try {
      return caracteristicaRepository.findAllById(id);
    } catch (Exception e) {
      throw new NotFound(e.getMessage());
    }
  }

  public Caracteristica crearCaracteristica(Caracteristica caracteristica) {
    var nuevaCaracteristica = new Caracteristica(
      null,
      caracteristica.getTitulo()
    );
    return caracteristicaRepository.save(caracteristica);
  }

  public Caracteristica actualizarCaracteristica(Long id, Caracteristica caracteristica)
    throws NotFound {
    if (!caracteristicaRepository.existsById(id))
      throw new NotFound("No existe característica con id " + id);
    var caracteristicaToUpdate = buscarCaracteristica(id);
    caracteristicaToUpdate.setTitulo(caracteristica.getTitulo());
    return caracteristicaToUpdate;
  }

  public Caracteristica eliminarCaracteristica(Long id)
    throws NotFound {
    var caracteristicaEliminada = buscarCaracteristica(id);
    caracteristicaRepository.deleteById(id);
    return caracteristicaEliminada;
  }

}