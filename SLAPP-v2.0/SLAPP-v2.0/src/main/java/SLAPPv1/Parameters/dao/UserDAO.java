package SLAPPv1.Parameters.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import SLAPPv1.Parameters.User;

//Data Access Object
public interface UserDAO extends JpaRepository<User, Long>{

	List<User> findByUserAndPass(String u, String p);

}
