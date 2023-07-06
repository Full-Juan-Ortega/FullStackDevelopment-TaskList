package com.autenticacion.modelos;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id_task;
    @NotNull
    public String name;
    @NotNull
    public Boolean state;
    @NotNull
    public String details;
    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false)
    private Usuario usuario;

    public Task(Boolean state, String details, String name) {
        this.state = state;
        this.details = details;
        this.name = name;
    }

    public Task() {

    }


    public Long getId_task() {
        return id_task;
    }

    public void setId_task(Long id_task) {
        this.id_task = id_task;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id_task=" + id_task +
                ", name='" + name + '\'' +
                ", state=" + state +
                ", details='" + details + '\'' +
                ", usuario=" + usuario +
                '}';
    }
}