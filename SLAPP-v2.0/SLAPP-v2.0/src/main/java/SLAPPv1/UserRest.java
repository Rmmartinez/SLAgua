package SLAPPv1;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import SLAPPv1.Parameters.User;
import SLAPPv1.Parameters.dao.UserDAO;


@RestController
@RequestMapping("/")
public class UserRest {
	@Autowired
	private UserDAO UserDAO;

    //--Find All--------------------------------------------------OK
	@RequestMapping(value="getUser", method=RequestMethod.GET)
	public ResponseEntity<List<User>> getUser(){
		List<User> users = UserDAO.findAll();
		return ResponseEntity.ok(users);
	}
	

	
    //Post User --------------------------------------------------OK
	@RequestMapping(value="postUser={u}&pass={p}&rol={r}&"
			+ "name={n}&surname={s}", method=RequestMethod.POST)
	public ResponseEntity<User> postUser(@PathVariable("u") String u, 
										 @PathVariable("p") String p,
										 @PathVariable("r") Long r,
										 @PathVariable("n") String n,
										 @PathVariable("s") String s){
	    User nUser = new User();
	    nUser.setUser(u);
        nUser.setPass(p);
        nUser.setRol(r);
        nUser.setName(n);
        nUser.setSurname(s);
        
	    User sUser = UserDAO.save(nUser);
		return ResponseEntity.ok(sUser);		
	}
	

	//--Find By User and Pass ------------------------------------OK
	@RequestMapping(value="getUser={u}&pass={p}", method=RequestMethod.GET)
	public ResponseEntity<Long> getUser(
			 @PathVariable("u") String u,
			 @PathVariable("p") String p){

		List<User> users = UserDAO.findByUserAndPass(u,p);
		System.out.println();  
		if(users.size()>0) {
			return ResponseEntity.ok(users.get(0).getRol());
		}else{
			return ResponseEntity.ok(0L);
		}
		
	}
	
}

