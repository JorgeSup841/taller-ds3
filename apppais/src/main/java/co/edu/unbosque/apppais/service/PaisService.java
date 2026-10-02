package co.edu.unbosque.apppais.service;

import co.edu.unbosque.apppais.controller.PaisController;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unbosque.apppais.entity.Pais;
import co.edu.unbosque.apppais.respository.PaisRepository;

@Service
public class PaisService {

	
	@Autowired
	private PaisRepository paisRepo;

	public PaisService() {
		
		// TODO Auto-generated constructor stub
	}

	public long contar() {
		return paisRepo.count();
	}

	public boolean exist(long id) {
		return paisRepo.existsById(id);
	}

	public int crear(Pais nuevoPais) {

		try {
			paisRepo.save(nuevoPais);
			return 0;
		} catch (Exception e) {
			return 1;
		}
	}

	public List<Pais> mostrarTodo() {

		return (List<Pais>) paisRepo.findAll();

	}

	public int eliminarPorId(long id) {

		Optional<Pais> encontrado = paisRepo.findById(id);
		if (encontrado.isPresent()) {
			paisRepo.delete(encontrado.get());
			return 0;
		} else {
			return 1;
		}

	}

	public int actualizarPorId(long id, Pais newPais) {

		Optional<Pais> encontrado = paisRepo.findById(id);

		if (encontrado.isPresent() && newPais != null) {
			Pais temp = encontrado.get();
			temp.setNombre(newPais.getNombre());
			temp.setCapital(newPais.getCapital());
			temp.setMoneda(newPais.getMoneda());
			temp.setIndioma(newPais.getIndioma());
			temp.setCantidadHabitante(newPais.getCantidadHabitante());

			paisRepo.save(temp);

			return 0;

		} else if (!encontrado.isPresent() && newPais == null) {
			paisRepo.save(newPais);
			return 1;

		} else {
			return 2;
		}
	}
	
	
	public int eliminarPorNombre(String nombre) {
		paisRepo.deleteByNombre(nombre);
		return 0 ;
		
		
	}
	
	public int eliminarPorCapital(String capital) {
		paisRepo.deleteByCapital(capital);
		
		
		return 0;
	}

}
