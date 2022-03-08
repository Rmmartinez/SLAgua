package SLAPPv1.Parameters;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="users", schema="SLAgua")
public class User {
	@Id
	@Column(name="id", table="users")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="user",nullable=false, length=30, table="users")
	private String user;

	@Column(name="pass",nullable=false, length=50, table="users")
	private String pass;

	@Column(name="rol",nullable=false, table="users")
	private Long rol;
	
	@Column(name="name",nullable=false, length=30, table="users")
	private String name;

	@Column(name="surname",nullable=false, length=30, table="users")
	private String surname;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public Long getRol() {
		return rol;
	}

	public void setRol(Long rol) {
		this.rol = rol;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	
}
