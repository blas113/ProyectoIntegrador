package com.example.hotelbooking.services;

import com.example.hotelbooking.config.TokenProvider;
import com.example.hotelbooking.dto.UserSignup;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.Conflict;
import com.example.hotelbooking.exceptions.EmailAlreadyExists;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.User;
import com.example.hotelbooking.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {

  @Autowired
  private RoleService roleService;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BCryptPasswordEncoder bcryptEncoder;

  @Autowired
  private TokenProvider jwtTokenUtil;


  public User searchUserById(Long id) throws NotFound {
    return userRepository.findById(id).orElseThrow(
        () -> new NotFound("No existe un usuario con id " + id));
  }

  public User searchUserByEmail(String email) {
    return userRepository.findByEmail(email).orElseThrow(
      () -> new UsernameNotFoundException("No existe usuario asociado a " + email));
  }

  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(email).orElseThrow(
      () -> new UsernameNotFoundException("Invalid username or password."));
    return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), getAuthority(user));
  }

  private Set<SimpleGrantedAuthority> getAuthority(User user) {
    Set<SimpleGrantedAuthority> authorities = new HashSet<>();
    authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().getTitulo()));
    return authorities;
  }

  public User getUserFromToken(String token) throws BadRequest {
    var authorization = token.replace("Bearer ", "");
    var userEmail = jwtTokenUtil.getUsernameFromToken(authorization);
    var userDetail = loadUserByUsername(userEmail);
    if (!jwtTokenUtil.validateToken(authorization, userDetail))
      throw new BadRequest("Token invalido");
    return searchUserByEmail(userEmail);
  }

  public User registerNewUser(UserSignup userDto)
    throws EmailAlreadyExists, NotFound {
    if(userRepository.existsByEmail(userDto.getEmail()))
      throw new EmailAlreadyExists("Ya existe un usuario con este email");
    return userRepository.save(newUserFromDTO(userDto));
  }

  private User newUserFromDTO(UserSignup userDto)
    throws NotFound {
    User user = new User();
    user.setNombre(userDto.getNombre());
    user.setApellido(userDto.getApellido());
    user.setEmail(userDto.getEmail());
    user.setPassword(bcryptEncoder.encode(userDto.getPassword()));
    user.setRole(roleService.findByTitle("USER"));
    return user;
  }

}