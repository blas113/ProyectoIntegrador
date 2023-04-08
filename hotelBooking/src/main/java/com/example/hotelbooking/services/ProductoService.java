package com.example.hotelbooking.services;


import com.example.hotelbooking.dto.ProductoDTO;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.*;
import com.example.hotelbooking.repositories.ProductoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ProductoService {

  private ProductoRepository productoRepository;
  private CategoriaService categoriaService;
  private CiudadService ciudadService;
  private CaracteristicaService caracteristicaService;
  private ImagenService imagenService;


  public Producto buscarProducto(Long id) throws NotFound {
    return productoRepository.findById(id).orElseThrow(
        () -> new NotFound("No existe producto con id " + id));
  }

  public List<Producto> listarProductos() {
    return productoRepository.findAll();
  }

  public List<Producto> randomProductos() {
    var randomList = productoRepository.findAll();
    Collections.shuffle(randomList);
    return randomList;
  }

  public List<Producto> categoriaProductos(Long id) throws NotFound {
    return productoRepository
      .searchAllByCategoria(categoriaService.buscarCategoria(id));
  }

  public List<Producto> ciudadProductos(Long id) throws NotFound {
    return productoRepository
      .searchAllByDireccion_Ciudad(ciudadService.buscarCiudad(id));
  }

  public List<Producto> fechaProductos(
    String checkIn, String checkOut) {
    return productoRepository
      .searchAllByDates(LocalDate.parse(checkIn), LocalDate.parse(checkOut));
  }

  public List<Producto> fechaCiudadProductos(
    String checkIn, String checkOut, Long idCiudad
  ) throws NotFound {
    return productoRepository.searchAllByDatesAndCity(
        LocalDate.parse(checkIn), LocalDate.parse(checkOut), ciudadService.buscarCiudad(idCiudad));
  }

  public Producto agregarProducto(ProductoDTO productoDTO)
      throws BadRequest, NotFound {
    Producto nuevoProducto = new Producto(
        null,
        productoDTO.getNombre(),
        productoDTO.getDescripcion(),
        imagenService.agregarImagenes(productoDTO.getImagenes()),
        categoriaService.buscarCategoria(productoDTO.getCategoria_id()),
        handlerDireccion(productoDTO),
        caracteristicaService.obtenerCaracteristicas(productoDTO.getCaracteristicas_id()),
        productoDTO.getValoracion(),
        productoDTO.getPrecioNoche());
    return productoRepository.save(nuevoProducto);
  }

  public Producto actualizarProducto(Long id, ProductoDTO productoDTO)
      throws NotFound {
    Producto productoToUpdate = buscarProducto(id);
    productoToUpdate.setNombre(productoDTO.getNombre());
    productoToUpdate.setDescripcion(productoDTO.getDescripcion());
    productoToUpdate.setCategoria(
        categoriaService.buscarCategoria(productoDTO.getCategoria_id()));
    Direccion direccionToUpdate = productoToUpdate.getDireccion();
    direccionToUpdate.setCalle(productoDTO.getDireccion_calle());
    direccionToUpdate.setNroPuerta(productoDTO.getDireccion_nroPuerta());
    direccionToUpdate.setCiudad(ciudadService.buscarCiudad(productoDTO.getCiudad_id()));
    productoToUpdate.setCaracteristicas(
      caracteristicaService.obtenerCaracteristicas(productoDTO.getCaracteristicas_id()));
    productoToUpdate.setValoracion(productoDTO.getValoracion());
    productoToUpdate.setPrecioNoche(productoDTO.getPrecioNoche());
    return productoToUpdate;
  }

  public void eliminarProductos(Long id) throws NotFound {
    var producto = buscarProducto(id);
    productoRepository.deleteById(id);
  }

  private Direccion handlerDireccion(ProductoDTO productoDTO) throws NotFound {
    return new Direccion(
        null,
        productoDTO.getDireccion_calle(),
        productoDTO.getDireccion_nroPuerta(),
        ciudadService.buscarCiudad(productoDTO.getCiudad_id()));
  }

}