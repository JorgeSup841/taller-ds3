package co.edu.unbosque.apppais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import co.edu.unbosque.apppais.entity.Pais;
import co.edu.unbosque.apppais.service.PaisService;

@RestController
@RequestMapping("/pais")
@CrossOrigin(origins = {"*"})
public class PaisController {
	
	
	@Autowired
	private PaisService paisServ;
	
	
	@GetMapping(path = "/contar")
	public ResponseEntity<Long> contar(){
		
		long numeroEncontrado = paisServ.contar();
		
		
		if(numeroEncontrado==0L) {
			return new ResponseEntity<>(numeroEncontrado, HttpStatus.OK);
		}else {
			return new ResponseEntity<>(numeroEncontrado, HttpStatus.OK);
		}
		
	}
	
	@PostMapping(path = "/crear")
	public ResponseEntity<String> crearPais(@RequestBody Pais pais){
		
		paisServ.crear(pais);
		
		return new ResponseEntity<>("Pais creado", HttpStatus.OK);
		
	}
	
	@GetMapping(path = "/mostrar")
	public ResponseEntity<List<Pais>> mostrarTabla(){
		
		List<Pais> paises = paisServ.mostrarTodo();

	    return new ResponseEntity<>(paises, HttpStatus.OK);
	}
	
	@DeleteMapping(path = "/eliminarporid")
	public ResponseEntity<String> eliminarPorId(@RequestParam int id){
		return new ResponseEntity<>(paisServ.eliminarPorId(id) + "", HttpStatus.OK);
	}
	
	@PutMapping(path = "/actualizarporid")
		public ResponseEntity<String> actualizarPorId(@RequestParam int id, @RequestBody Pais pais){
			
			return new ResponseEntity<>(paisServ.actualizarPorId(id, pais) + "", HttpStatus.OK); 
		}
	
	
	@DeleteMapping(path = "/eliminarpornombre")
	public ResponseEntity<String> eliminarPorNombre(@RequestParam String nombre){
		
		paisServ.eliminarPorNombre(nombre);
		
		return new ResponseEntity<>("El país: " + nombre + " fue eliminado con exito" , HttpStatus.OK );
		
	}
	
	
	
	@DeleteMapping(path = "/eliminarporcapital")
	public ResponseEntity<String> eliminarPorCapital(@RequestParam String capital){
		
		if(paisServ.eliminarPorCapital(capital) == 0) {
			
			return new ResponseEntity<>("El pais que tiene como capital: " + capital + " fue eliminado con exito", HttpStatus.ACCEPTED );
		}else {
			
			return new ResponseEntity<>("No existe un pais con la capital: " + capital, HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping(path = "/actualizarpornombre")
	public ResponseEntity<String> actualizarPorNombre(@RequestParam String nombre, @RequestBody Pais pais){
		
		int resultado = paisServ.actualizarPorNombre(nombre, pais);
		
		if(resultado == 0) {
			
			return new ResponseEntity<>("El pais " + nombre + " ha sido actualizado.", HttpStatus.ACCEPTED);
			
		}else if(resultado == 1) {
			return new ResponseEntity<>("El pais " + nombre + "no existia pero ha sido creado.", HttpStatus.ACCEPTED);
			
		}
		
		else {
			
			return new ResponseEntity<>("No se ha encontrado ningun pasi", HttpStatus.NOT_FOUND);
			
		}
	}
	
	
}
