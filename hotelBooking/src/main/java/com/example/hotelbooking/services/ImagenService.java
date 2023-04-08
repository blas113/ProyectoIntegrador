package com.example.hotelbooking.services;

import com.example.hotelbooking.models.Imagen;
import com.example.hotelbooking.repositories.ImagenRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ImagenService {

  private ImagenRepository imagenRepository;

  public List<Imagen> agregarImagenes(List<String> listUrls) {
    List<Imagen> listImagenes = listUrls.stream()
      .map(url -> new Imagen(null, url)).toList();
    return imagenRepository.saveAll(listImagenes);
  }

}