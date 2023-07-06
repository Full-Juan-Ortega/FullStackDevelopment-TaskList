package com.autenticacion.controladores;


import com.autenticacion.modelos.Task;

import com.autenticacion.repositorios.TaskRepository;
import com.autenticacion.servicios.TaskService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    TaskService taskService;
    @Autowired
    private TaskRepository taskRepository;


    @GetMapping("/all/")
    @PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
    public List<Task> getAll(){
        return taskService.getAll();
    }

    @GetMapping("/all2/{id}")
    @PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
    public List<Task> getAllByUsuarioID(@PathVariable("id") Long id){
        return taskService.getAllTaskByUsuario(id);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
    public Task save(@RequestBody Task task, HttpServletRequest request){
        System.out.println("TASK : " + task.toString());
        System.out.println(request.getHeader("authorization"));
        return taskService.save(task ,request);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        taskService.delete(id);
        System.out.println("Delete ejecutado correctamente , id : " + id);
        return new ResponseEntity<>("Item with id " + id + " has been deleted.", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('USUARIO_RESTRINGIDO')")
    public ResponseEntity<String> update(@PathVariable("id") Long id , @RequestBody Task task, HttpServletRequest request) {
        Optional<Task> taskPorEditar = taskService.findTaskById(id);
        Task x = taskPorEditar.get();
        System.out.println(x.toString());
        x = task;
        taskService.save(x,request);
        System.out.println("Update ejecutado correctamente , id : " + id);
        return new ResponseEntity<>("Item with id " + id + " has been update.", HttpStatus.OK);
    }



}


