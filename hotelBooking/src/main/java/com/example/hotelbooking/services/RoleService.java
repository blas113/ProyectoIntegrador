package com.example.hotelbooking.services;

import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.Role;
import com.example.hotelbooking.repositories.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class RoleService {

  private RoleRepository roleRepository;

  public Role findByTitle(String titulo) throws NotFound {
    return roleRepository.findRoleByTitulo(titulo).orElseThrow(
    () -> new NotFound("No se encontro el rol " + titulo));
  }

}