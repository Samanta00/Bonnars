package com.bonnars_api.api_bonnars.database;
import com.bonnars_api.api_bonnars.entidade.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioProdutos extends JpaRepository<Produto,Long> {
    
}
