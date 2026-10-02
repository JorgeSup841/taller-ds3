package co.edu.unbosque.apppaises.entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pais")
public class Pais {
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;

	@Column(unique = true, length = 50)
	private String nombre;
	@Column(unique = true, length = 50)
	private String capital;
	@Column(unique = true, length = 50)
	private String moneda;
	@Column(unique = true, length = 50)
	private  String indioma;
	@Column(nullable = false)
	private long cantidadHabitante;
	
	public Pais() {
		// TODO Auto-generated constructor stub
	}

	public Pais(String nombre, String capital, String moneda, String indioma, long cantidadHabitante) {
		super();
		this.nombre = nombre;
		this.capital = capital;
		this.moneda = moneda;
		this.indioma = indioma;
		this.cantidadHabitante = cantidadHabitante;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCapital() {
		return capital;
	}

	public void setCapital(String capital) {
		this.capital = capital;
	}

	public String getMoneda() {
		return moneda;
	}

	public void setMoneda(String moneda) {
		this.moneda = moneda;
	}

	public String getIndioma() {
		return indioma;
	}

	public void setIndioma(String indioma) {
		this.indioma = indioma;
	}

	public long getCantidadHabitante() {
		return cantidadHabitante;
	}

	public void setCantidadHabitante(long cantidadHabitante) {
		this.cantidadHabitante = cantidadHabitante;
	}

	@Override
	public String toString() {
		return "Pais [id=" + id + ", nombre=" + nombre + ", capital=" + capital + ", moneda=" + moneda + ", indioma="
				+ indioma + ", cantidadHabitante=" + cantidadHabitante + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(Long.valueOf(cantidadHabitante), capital, Long.valueOf(id), indioma, moneda, nombre);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pais other = (Pais) obj;
		return cantidadHabitante == other.cantidadHabitante && Objects.equals(capital, other.capital) && id == other.id
				&& Objects.equals(indioma, other.indioma) && Objects.equals(moneda, other.moneda)
				&& Objects.equals(nombre, other.nombre);
	}
	
	
}
