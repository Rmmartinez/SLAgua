package SLAPPv1;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import SLAPPv1.Parameters.PH;
import SLAPPv1.Parameters.dao.PhDAO;


@RestController
@RequestMapping("/")

public class PhRest {

	@Autowired
	private PhDAO PhDAO;

    //--Find All--------------------------------------------------OK
	@RequestMapping(value="getPh", method=RequestMethod.GET)
	public ResponseEntity<List<PH>> getPh(){
		List<PH> Phs = PhDAO.findAll();
		return ResponseEntity.ok(Phs);
	}
	
	
    //-----------------------------------------------------------OK
	@RequestMapping(value="postPh={a}&pool={p}&year={y}&"
			+ "month={m}&day={d}&hour={h}&minute={i}", method=RequestMethod.GET)
	public ResponseEntity<PH> postPh(@PathVariable("a") Float a, 
									 @PathVariable("p") Long p,
									 @PathVariable("y") Long y,
									 @PathVariable("m") Long m,
									 @PathVariable("d") Long d,
									 @PathVariable("h") Long h,
									 @PathVariable("i") Long i){
	    PH nPh = new PH();
	    nPh.setPh(a);
	    nPh.setPool(p);
	    nPh.setYear(y);
	    nPh.setMonth(m);
	    nPh.setDay(d);
	    nPh.setHour(h);
	    nPh.setMinute(i);
	    	   
	    PH sPh = PhDAO.save(nPh);
		return ResponseEntity.ok(sPh);		
	}
	

	//--Find By Pool, Year, Month and Day ------------------------OK
	@RequestMapping(value="getPhByPool={p}&year={y}&month={m}&day={d}", method=RequestMethod.GET)
	public ResponseEntity<List<PH>> getPhByPoolAndYearAndMonthAndDay(@PathVariable("p") Long p,
			@PathVariable("y") Long y,
			@PathVariable("m") Long m,
			@PathVariable("d") Long d){

		List<PH> Phs = PhDAO.findByPoolAndYearAndMonthAndDay(p,y,m,d);
				
		return ResponseEntity.ok(Phs);
	}

}
