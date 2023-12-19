package com.bonnars_api.api_bonnars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
import com.bonnars_api.api_bonnars.database.RepositorioProdutos;
import java.util.List;
import com.bonnars_api.api_bonnars.entidade.Produto;

//criação da função e rota

@RestController
@CrossOrigin(origins="*") //declaração do cors da api//
@RequestMapping("/produtos")
public class ProdutoRest {
    @Autowired
    private RepositorioProdutos repositorio;

    @GetMapping
    public List<Produto> listar() {
        return repositorio.findAll();
    }

    @GetMapping("/{id}")
    public Produto listarPorId(@PathVariable Long id) {
        Optional<Produto> produtoOptional = repositorio.findById(id);
        
        if (produtoOptional.isPresent()) {
            return produtoOptional.get();
        } else {
            return null;
        }
    }

    @PostMapping
    public void salvar(@RequestBody Produto produto) {
        repositorio.save(produto); 
    }
    @PutMapping
    public void alterar(@RequestBody Produto produto){
        if(produto.getId()>0)
        repositorio.save(produto);
    }
    @PutMapping("/{id}") // Usando PUT para edição por ID
    public void editarPorId(@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        Optional<Produto> produtoOptional = repositorio.findById(id);

        if (produtoOptional.isPresent()) {
            Produto produtoExistente = produtoOptional.get();
            produtoExistente.setNome(produtoAtualizado.getNome());
            produtoExistente.setCategoria(produtoAtualizado.getCategoria());
            produtoExistente.setTamanho(produtoAtualizado.getTamanho());
            produtoExistente.setCor(produtoAtualizado.getCor());
            produtoExistente.setMaterial(produtoAtualizado.getMaterial());
            produtoExistente.setPreco(produtoAtualizado.getPreco());
            produtoExistente.setImagem(produtoAtualizado.getImagem());

            repositorio.save(produtoExistente);
        } else {
            throw new ResourceNotFoundException("Produto não encontrado com o ID: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void excluirPorId(@PathVariable Long id) {
        repositorio.deleteById(id);
    }
 
}
