package com.bonnars_api.api_bonnars.entidade;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// entidade de criação de tabela no banco de dados

@Entity
public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false) 
    private long id_Produto;
    @Column(nullable = false) 
    private String nome;
    @Column(nullable = false) 
    private String tamanho;
    @Column(nullable = false) 
    private String cor;
    @Column(nullable = false) 
    private double preco;
    @Column(nullable = false) 
    private String imagem;
    @Column(nullable = false) 
    private int quantidade;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getId_Produto() {
        return id_Produto;
    }
    public void setId_Produto(long id_Produto) {
        this.id_Produto = id_Produto;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getTamanho() {
        return tamanho;
    }
    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }
    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

}
