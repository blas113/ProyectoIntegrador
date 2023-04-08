package com.example.hotelbooking.dto;

import com.example.hotelbooking.models.Categoria;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class ProductoDTO {

    private Long id;

    @NotBlank(message = "Nombre no puede estar vacío")
    private String nombre;

    @NotBlank(message = "Descripción no puede estar vacío")
    private String descripcion;

    @NotNull(message = "Imagenes no puede ser nulo")
    private List<String> imagenes;

    @NotNull(message = "Categoría no puede ser nulo")
    @Min(message = "Categoría debe ser un valor mayor a 1", value = 1)
    private Long categoria_id;

    @NotBlank(message = "Calle no puede estar vacío")
    private String direccion_calle;

    @NotBlank(message = "Nro puerta no puede estar vacío")
    private String direccion_nroPuerta;

    @NotNull(message = "Ciudad no puede ser nulo")
    @Min(message = "Ciudad debe ser un valor mayor a 1", value = 1)
    private Long ciudad_id;

    @NotNull(message = "Característica no puede ser nulo")
    private List<Long> caracteristicas_id;

    private Double valoracion;

    private Double precioNoche;

}