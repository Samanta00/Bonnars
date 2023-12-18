package com.bonnars_api.api_bonnars.database;
import com.bonnars_api.api_bonnars.entidade.Pagantes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioPagantes extends JpaRepository<Pagantes,Long>{
    
}
