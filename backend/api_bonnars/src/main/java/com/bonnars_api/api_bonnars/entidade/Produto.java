package com.bonnars_api.api_bonnars.entidade;

import java.time.LocalDate;




public class Produto {

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
    private Long id;
    private String nome;
    private double preco;
    private String descricao;
    private LocalDate validade;
    private String generoProduto;
    private String marca;


}
