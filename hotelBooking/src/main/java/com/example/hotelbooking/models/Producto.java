package com.example.hotelbooking.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String descripcion;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_id")
    private List<Imagen> imagenes;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "direccion_id")
    private Direccion direccion;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "producto_has_caracteristica",
      joinColumns = {@JoinColumn(name = "producto_id")},
      inverseJoinColumns = {@JoinColumn(name = "caracteristica_id")})
    private List<Caracteristica> caracteristicas;

    private Double valoracion;

    private Double precioNoche;

}