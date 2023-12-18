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
import com.bonnars_api.api_bonnars.database.RepositorioPagantes;
import java.util.List;
import com.bonnars_api.api_bonnars.entidade.Pagantes;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/pagantes")
public class PagantesRest {
    @Autowired
    private RepositorioPagantes repositorio;

    @GetMapping
    public List<Pagantes> listar() {
        return repositorio.findAll();
    }

    @GetMapping("/{id}")
    public Pagantes listarPorId(@PathVariable Long id) {
        Optional<Pagantes> pagantesOptional = repositorio.findById(id);
        
        if (pagantesOptional.isPresent()) {
            return pagantesOptional.get();
        } else {
            return null;
        }
    }

    @PostMapping
    public void salvar(@RequestBody Pagantes pagantes) {
        repositorio.save(pagantes); 
    }
    @PutMapping
    public void alterar(@RequestBody Pagantes pagantes){
        if(pagantes.getId()>0)
        repositorio.save(pagantes);
    }
 
    @DeleteMapping
    public void excluir(@RequestBody Pagantes pagantes){
        repositorio.delete(pagantes);
    }
 
}
