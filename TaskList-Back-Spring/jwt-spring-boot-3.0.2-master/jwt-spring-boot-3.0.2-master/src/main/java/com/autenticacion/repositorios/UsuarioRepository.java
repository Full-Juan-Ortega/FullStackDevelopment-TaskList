package com.autenticacion.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.autenticacion.modelos.Usuario;



public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


	@Query("SELECT u FROM Usuario u LEFT JOIN FETCH u.rol r WHERE u.nombreUsuario = :nombreUsuario")
	public Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario);
	
}
