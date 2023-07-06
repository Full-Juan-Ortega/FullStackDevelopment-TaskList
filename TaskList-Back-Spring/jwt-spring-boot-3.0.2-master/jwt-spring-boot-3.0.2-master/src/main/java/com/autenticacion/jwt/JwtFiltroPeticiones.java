package com.autenticacion.jwt;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import com.autenticacion.servicios.DetalleUsuarioImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFiltroPeticiones extends OncePerRequestFilter {

	
	@Autowired
	private DetalleUsuarioImpl detalleUsuario;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		try {
			String token = getToken(request);
			if (token != null && JwtProvider.validarTokenJWT(token)) {
				String nombreUsuario = JwtProvider.getNombreUsuario(token);
				if (nombreUsuario != null) {
					UserDetails userDatail = detalleUsuario.loadUserByUsername(nombreUsuario);
					UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDatail, null,
							userDatail.getAuthorities());

					SecurityContextHolder.getContext().setAuthentication(auth);
				}
			}
		} catch (Exception e) {
			System.out.println("error de doFilterInternal");
		}

		filterChain.doFilter(request, response);

	}

	public String getToken(HttpServletRequest request) {
		String header = request.getHeader("Authorization");
		String authorizationSinComillas = header.replace("\"","");
		//funcion para poder seguir testeando con postman, el bearer de postman lleva la palabra bearer adelante del token
		if(header != null && header.startsWith("Bearer : ")){
			String x = header.replace("Bearer : ","");
			return x;
		}

		return authorizationSinComillas;
	}

}
