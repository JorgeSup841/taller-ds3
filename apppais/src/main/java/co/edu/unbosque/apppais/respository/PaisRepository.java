package co.edu.unbosque.apppais.respository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import co.edu.unbosque.apppais.entity.Pais;

public interface PaisRepository extends CrudRepository<Pais, Long>{
	
	public boolean existsByNombre(String nombre);
	public boolean existsByCapital(String capital);
	
	public Optional<Pais> findByNombre(String nombre);
	public Optional<Pais> findByCapital(String capital);

	
}
