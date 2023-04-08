package com.example.hotelbooking.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "reservas")
public class Reserva {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private LocalTime horaLlegada;

  private LocalDate checkIn;

  private LocalDate checkOut;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "producto_id")
  private Producto producto;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "usuario_id")
  private User usuario;

}