package com.bonnars_api.api_bonnars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bonnars_api.api_bonnars.database.RepositorioProdutos;
import java.util.List;
import com.bonnars_api.api_bonnars.entidade.Produto;

@RestController
@RequestMapping("/produtos")
public class ProdutoRest {
    @Autowired
    private RepositorioProdutos produto;

    @GetMapping
    public List<Produto> listar() {
        return produto.findAll();
    }

}
