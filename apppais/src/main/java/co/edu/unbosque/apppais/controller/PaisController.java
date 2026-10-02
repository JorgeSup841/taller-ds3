package co.edu.unbosque.apppais.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
			return new ResponseEntity<>(numeroEncontrado, HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<>(numeroEncontrado, HttpStatus.OK);
		}
		
	}
	
	@GetMapping(path = "/crear")
	public ResponseEntity<String> crearPais(Pais pais){
		
		paisServ.crear(pais);
		
		return new ResponseEntity<>("Pais creado", HttpStatus.OK);
		
	}
	

}
