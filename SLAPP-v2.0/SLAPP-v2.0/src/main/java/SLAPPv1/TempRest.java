package SLAPPv1;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import SLAPPv1.Parameters.Temp;
import SLAPPv1.Parameters.dao.TempDAO;


@RestController
@RequestMapping("/")
public class TempRest {
    	
	@Autowired
	private TempDAO TempDAO;

    //--Find All--------------------------------------------------OK
	@RequestMapping(value="getTemp", method=RequestMethod.GET)
	public ResponseEntity<List<Temp>> getTemp(){
		List<Temp> temps = TempDAO.findAll();
		return ResponseEntity.ok(temps);
	}
	

    /*//--Find By ID------------------------------------------------OK
	@RequestMapping(value="getTemp:{t}", method=RequestMethod.GET)
	public ResponseEntity<Temp> getTempById(@PathVariable("t") Long tempId){
		Optional<Temp> optionalTemp = TempDAO.findById(tempId);
		if(optionalTemp.isPresent()) {
			return ResponseEntity.ok(optionalTemp.get());
		}else {
			System.out.println("NO HAY RESULTADOS");
		    return ResponseEntity.ok(new Temp());
		}
	}*/
	
    //Post Temperature-------------------------------------------OK
	@RequestMapping(value="postTemp={t}&pool={p}&year={y}&"
			+ "month={m}&day={d}&hour={h}&minute={i}", method=RequestMethod.GET)
	public ResponseEntity<Temp> postTemp(@PathVariable("t") Float t, 
										 @PathVariable("p") Long p,
										 @PathVariable("y") Long y,
										 @PathVariable("m") Long m,
										 @PathVariable("d") Long d,
										 @PathVariable("h") Long h,
										 @PathVariable("i") Long i){
	    Temp nTemp = new Temp();
	    nTemp.setTemp(t);
	    nTemp.setPool(p);
	    nTemp.setYear(y);
	    nTemp.setMonth(m);
	    nTemp.setDay(d);
	    nTemp.setHour(h);
	    nTemp.setMinute(i);
	    	   
	    Temp sTemp = TempDAO.save(nTemp);
		return ResponseEntity.ok(sTemp);		
	}
	

	//--Find By Pool, Year, Month and Day ------------------------OK
	@RequestMapping(value="getTempByPool={p}&year={y}&month={m}&day={d}", method=RequestMethod.GET)
	public ResponseEntity<List<Temp>> getTempPoolAndYearAndMonthAndDay(@PathVariable("p") Long p,
			 @PathVariable("y") Long y,
			 @PathVariable("m") Long m,
			 @PathVariable("d") Long d){

		List<Temp> temps = TempDAO.findByPoolAndYearAndMonthAndDay(p,y,m,d);
		System.out.println(temps.get(0).getTemp()); //--Obtengo temp del elemento 1
		System.out.println(temps.size());           //--Obtengo longitud de lista
		return ResponseEntity.ok(temps);
	}
	
}

