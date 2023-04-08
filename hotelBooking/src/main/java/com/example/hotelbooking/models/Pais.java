package com.example.hotelbooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "paises")
public class Pais {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Nombre no puede estar vacío")
  @Column(name = "nombre")
  private String nombre;

  @NotBlank(message = "Código no puede estar vacío")
  @Length(min = 2, max = 2, message = "El código debe tener 2 caracteres")
  @Column(name = "codigo")
  private String codigo;

  @OneToMany(mappedBy = "pais", cascade = CascadeType.ALL)
  @JsonIgnore
  private List<Ciudad> ciudades;

}