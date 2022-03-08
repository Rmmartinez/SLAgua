package SLAPPv1;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import SLAPPv1.Parameters.OXI;
import SLAPPv1.Parameters.dao.OxiDAO;


@RestController
@RequestMapping("/")

public class OxiRest {

	@Autowired
	private OxiDAO OxiDAO;

    //--Find All--------------------------------------------------OK
	@RequestMapping(value="getOxi", method=RequestMethod.GET)
	public ResponseEntity<List<OXI>> getOxi(){
		List<OXI> Oxis = OxiDAO.findAll();
		return ResponseEntity.ok(Oxis);
	}
	
	
    //-----------------------------------------------------------OK
	@RequestMapping(value="postOxi={o}&pool={p}&year={y}&"
			+ "month={m}&day={d}&hour={h}&minute={i}", method=RequestMethod.GET)
	public ResponseEntity<OXI> postOxi(@PathVariable("o") Float o, 
									   @PathVariable("p") Long  p,
									   @PathVariable("y") Long  y,
									   @PathVariable("m") Long  m,
									   @PathVariable("d") Long  d,
									   @PathVariable("h") Long  h,
									   @PathVariable("i") Long  i){
	    OXI nOxi = new OXI();
	    nOxi.setOxi(o);
	    nOxi.setPool(p);
	    nOxi.setYear(y);
	    nOxi.setMonth(m);
	    nOxi.setDay(d);
	    nOxi.setHour(h);
	    nOxi.setMinute(i);
	    	   
	    OXI sOxi = OxiDAO.save(nOxi);
		return ResponseEntity.ok(sOxi);		
	}
	

	//--Find By Pool, Year, Month and Day ------------------------OK
	@RequestMapping(value="getOxiByPool={p}&year={y}&month={m}&day={d}", method=RequestMethod.GET)
	public ResponseEntity<List<OXI>> getOdByPoolAndYearAndMonthAndDay(
			@PathVariable("p") Long p,
			@PathVariable("y") Long y,
			@PathVariable("m") Long m,
			@PathVariable("d") Long d){

		List<OXI> Oxis = OxiDAO.findByPoolAndYearAndMonthAndDay(p,y,m,d);
				
		return ResponseEntity.ok(Oxis);
	}

}
