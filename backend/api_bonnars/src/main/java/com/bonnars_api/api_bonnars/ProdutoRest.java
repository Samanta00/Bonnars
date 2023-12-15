package com.bonnars_api.api_bonnars;

import org.springframework.beans.factory.annotation.Autowired;

import com.bonnars_api.api_bonnars.database.RepositorioProdutos;

public class ProdutoRest {
    @Autowired
    private RepositorioProdutos produto;
}
