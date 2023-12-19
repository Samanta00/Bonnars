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
import com.bonnars_api.api_bonnars.database.RepositorioCarrinho;
import java.util.List;
import com.bonnars_api.api_bonnars.entidade.Carrinho;


//criação da função e rota

@RestController
@CrossOrigin(origins="*") //declaração do cors da api//
@RequestMapping("/carrinho")
public class CarrinhoRest {
    @Autowired
    private RepositorioCarrinho repositorio;

    @GetMapping
    public List<Carrinho> listar() {
        return repositorio.findAll();
    }

    @GetMapping("/{id}")
    public Carrinho listarPorId(@PathVariable Long id) {
        Optional<Carrinho> carrinhoOptional = repositorio.findById(id);
        
        if (carrinhoOptional.isPresent()) {
            return carrinhoOptional.get();
        } else {
            return null;
        }
    }

    @PostMapping
    public void salvar(@RequestBody Carrinho carrinho) {
        repositorio.save(carrinho); 
    }
    @PutMapping
    public void alterar(@RequestBody Carrinho carrinho){
        if(carrinho.getId()>0)
        repositorio.save(carrinho);
    }
    @PutMapping("/{id}") // Usando PUT para edição por ID
    public void editarPorId(@PathVariable Long id, @RequestBody Carrinho carrinhoAtualizado) {
        Optional<Carrinho> carrinhoOptional = repositorio.findById(id);

        if (carrinhoOptional.isPresent()) {
            Carrinho carrinhoExistente = carrinhoOptional.get();

            carrinhoExistente.setQuantidade(carrinhoAtualizado.getQuantidade());

            repositorio.save(carrinhoExistente);
        } else {
            throw new ResourceNotFoundException("Produto não encontrado com o ID: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public void excluirPorId(@PathVariable Long id) {
        repositorio.deleteById(id);
    }
 
}
