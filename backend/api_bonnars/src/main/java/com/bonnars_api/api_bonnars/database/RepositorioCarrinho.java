package com.bonnars_api.api_bonnars.database;
import com.bonnars_api.api_bonnars.entidade.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioCarrinho extends JpaRepository<Carrinho,Long>{
    
}
