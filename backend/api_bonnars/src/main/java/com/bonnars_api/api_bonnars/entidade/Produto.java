package com.bonnars_api.api_bonnars.entidade;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false)
    private double preco;
    @Column(nullable = false) 
    private String descricao;
    @Column(nullable = false)
    private LocalDate validade; 
    @Column(nullable = false)
    private String generoProduto;
    @Column(nullable = false)
    private String marca;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public LocalDate getValidade() {
        return validade;
    }
    public void setValidade(LocalDate validade) {
        this.validade = validade;
    }
    public String getGeneroProduto() {
        return generoProduto;
    }
    public void setGeneroProduto(String generoProduto) {
        this.generoProduto = generoProduto;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }

}
