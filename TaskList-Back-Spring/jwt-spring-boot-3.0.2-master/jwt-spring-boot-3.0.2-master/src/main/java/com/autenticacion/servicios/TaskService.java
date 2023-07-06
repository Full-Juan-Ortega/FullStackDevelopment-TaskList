package com.autenticacion.servicios;


import com.autenticacion.jwt.JwtFiltroPeticiones;
import com.autenticacion.jwt.JwtProvider;
import com.autenticacion.modelos.Task;
import com.autenticacion.modelos.Usuario;
import com.autenticacion.repositorios.TaskRepository;
import com.autenticacion.repositorios.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    JwtFiltroPeticiones jwtFiltroPeticiones;

    public List<Task> getAll(){
        System.out.println("Retornamos TaskList");
        return taskRepository.findAll();
    }

    public Task save( Task task, HttpServletRequest request){
        System.out.println("save TaskList");
        String nombreUsuario = JwtProvider.getNombreUsuario(jwtFiltroPeticiones.getToken(request));
        Optional<Usuario> usuario  = usuarioRepository.buscarPorNombreUsuario(nombreUsuario);
        System.out.println(usuario);
        task.setUsuario(usuario.get());
        System.out.println("Task en el Save : " + task.toString());
        return taskRepository.save(task);
    }

    public void delete(Long id){
        taskRepository.deleteById(id);
    }

    public Optional<Task> findTaskById(Long id){
        return taskRepository.findById(id);
    }
    public void update (Task task){
        taskRepository.save(task);
    }

    public List<Task> getAllTaskByUsuario(Long id){
        return taskRepository.findByUsuarioId(id);
    }



}
