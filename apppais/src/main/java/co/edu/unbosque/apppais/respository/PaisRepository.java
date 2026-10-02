package co.edu.unbosque.apppais.respository;

import org.springframework.data.repository.CrudRepository;

import co.edu.unbosque.apppais.entity.Pais;

public interface PaisRepository extends CrudRepository<Pais, Long>{

	public void deleteByNombre(String name);
	
	public void deleteByCapital(String capital);
	
}
