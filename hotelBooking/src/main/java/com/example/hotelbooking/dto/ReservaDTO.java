package com.example.hotelbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@Getter
public class ReservaDTO {

  @NotBlank(message = "Se debe indicar hora de llegada")
  private String horaLlegada;

  @NotBlank(message = "Se debe indicar fecha de check in")
  private String checkIn;

  @NotBlank(message = "Se debe indicar fecha de check out")
  private String checkOut;

  @NotNull(message = "Producto no puede ser nulo")
  @Min(message = "Producto debe ser un valor mayor a 1", value = 1)
  private Long producto_id;

}