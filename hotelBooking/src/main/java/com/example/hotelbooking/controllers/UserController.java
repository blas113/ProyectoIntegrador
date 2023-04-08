package com.example.hotelbooking.controllers;

import com.example.hotelbooking.config.TokenProvider;
import com.example.hotelbooking.dto.AuthToken;
import com.example.hotelbooking.dto.UserLogin;
import com.example.hotelbooking.dto.UserSignup;
import com.example.hotelbooking.exceptions.BadRequest;
import com.example.hotelbooking.exceptions.EmailAlreadyExists;
import com.example.hotelbooking.exceptions.NotFound;
import com.example.hotelbooking.models.User;
import com.example.hotelbooking.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
@AllArgsConstructor
@RequestMapping("/users")
@CrossOrigin
@RestController
public class UserController {

  private AuthenticationManager authenticationManager;
  private TokenProvider jwtTokenUtil;
  private UserService userService;

  @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  @GetMapping
  public ResponseEntity<User> getUser(
    @RequestHeader String Authorization
  ) throws BadRequest {
    return ResponseEntity.status(HttpStatus.OK)
        .body(userService.getUserFromToken(Authorization));
  }

  @PostMapping("/auth")
  public ResponseEntity<AuthToken> authenticateUser(
    @Valid @RequestBody UserLogin userLogin,
    BindingResult bindingResult
  ) throws BadRequest, AuthenticationException {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    Authentication authentication = authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(
        userLogin.getEmail(),
        userLogin.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    final String token = jwtTokenUtil.generateToken(authentication);
    return ResponseEntity.status(HttpStatus.OK)
      .body(new AuthToken(token));
  }

  @PostMapping("/signup")
  public ResponseEntity<AuthToken> registerNewUser(
    @Valid @RequestBody UserSignup userRequest,
    BindingResult bindingResult
    ) throws BadRequest, EmailAlreadyExists, NotFound {
    if (bindingResult.hasErrors())
      throw new BadRequest(bindingResult.getFieldError().getDefaultMessage());
    userService.registerNewUser(userRequest);
    return ResponseEntity.status(HttpStatus.CREATED)
      .body(authenticateUser(new UserLogin(
        userRequest.getEmail(), userRequest.getPassword()),
        bindingResult).getBody());
  }

}