package com.autenticacion.controladores;

import com.autenticacion.modelos.Usuario;
import com.autenticacion.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.autenticacion.dto.UsuarioDTO;
import com.autenticacion.dto.UsuarioLoginDTO;
import com.autenticacion.servicios.UsuarioService;

import jakarta.validation.Valid;

import java.util.List;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody UsuarioLoginDTO usuarioLogin, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return new ResponseEntity<String>("El usuario y la clave son obligatorios", HttpStatus.BAD_REQUEST);
		}
		System.out.println("Login exitoso : " + usuarioLogin.toString());
		return new ResponseEntity<UsuarioDTO>(usuarioService.login(usuarioLogin), HttpStatus.OK);

	}

	@PostMapping("/crear")
	public ResponseEntity<?> crear(@Valid @RequestBody UsuarioDTO usuario, BindingResult validaciones)

			throws Exception {
		System.out.println("Entro al endpoint crear: " + usuario.toString());

		if (validaciones.hasErrors()) {
			return new ResponseEntity<String>("Campos Imcompletos", HttpStatus.BAD_REQUEST);
		}
		try {
			return new ResponseEntity<UsuarioDTO>(usuarioService.crear(usuario), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/area/administrador")
	@PreAuthorize("hasAuthority('ADMINISTRADOR')")
	public ResponseEntity<?> accesoSoloAdministrador() {
		return new ResponseEntity<>("Eres administrador", HttpStatus.OK);
	}

	@GetMapping("/area/usuario-restringido")
	@PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
	public ResponseEntity<?> accesoSoloUsuarioRestringido() {
		return new ResponseEntity<>("Eres un usuario restringido", HttpStatus.OK);
	}

	@GetMapping("/area/usuario-logueado")
	public ResponseEntity<?> accesoSoloUsuarioLogueas() {
		return new ResponseEntity<>("Eres un usuario logueado, no importa tu rol", HttpStatus.OK);
	}

	/*
	@GetMapping("/test")
	public ResponseEntity<?> traer (){
		return new ResponseEntity<Usuario>(usuarioRepository.findAll(), HttpStatus.OK);
	}*/


	@GetMapping("/test")

	public List<Usuario> traer (){
		System.out.println("get ejecuted");
		return usuarioRepository.findAll();
	}

	@PostMapping("/test")
	public List<Usuario> traer (@RequestBody String cualquiera){
		System.out.println("post ejecuted");
		return usuarioRepository.findAll();
	}


}
