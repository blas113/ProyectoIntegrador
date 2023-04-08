package com.example.hotelbooking.repositories;

import com.example.hotelbooking.models.Categoria;
import org.hibernate.sql.Update;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface CategoriaRepository extends JpaRepository<Categoria,Long> {

    @Modifying
    @Query("UPDATE Categoria c SET c.nombre = ?2, c.descripcion = ?3, c.url = ?4 WHERE c.id = ?1")
    void update (Long id, String nombre, String descripcion, String url);


}