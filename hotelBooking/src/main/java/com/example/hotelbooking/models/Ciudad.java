package com.example.hotelbooking.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ciudades")
public class Ciudad {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Nombre no puede estar vacío")
  @Column(name = "nombre")
  private String nombre;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "pais_id")
  private Pais pais;

}