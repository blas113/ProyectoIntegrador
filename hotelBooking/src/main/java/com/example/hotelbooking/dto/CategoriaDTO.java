package com.example.hotelbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Builder
@Getter
@Setter
public class CategoriaDTO {

  private Long id;

  private String nombre;

  private String descripcion;

  private String url;

  private Integer productos;

}