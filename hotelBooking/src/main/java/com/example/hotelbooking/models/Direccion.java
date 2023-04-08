package com.example.hotelbooking.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "direcciones")
public class Direccion {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "calle")
  private String calle;

  @Column(name = "nro_puerta")
  private String nroPuerta;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "ciudad_id")
  private Ciudad ciudad;

}