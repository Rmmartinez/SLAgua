package SLAPPv1;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class InfoApiRest {
	@RequestMapping(value="info", method=RequestMethod.GET)
	public String info() {
		
		String text="";
		//text += "<meta http-equiv=\"refresh\" content=\"5\" />";
		text += "<center> <img src=\"http://slagua.sanluis.gov.ar/wp-content/uploads/2020/06/Logo-agua-2-300x180.png\"></center>";
		text += "<h1><center>-- SISTEMA DE TELEMETRIA --</center></h1>"
				 + "<h2><u><center>--- San Luis Agua API ---</center></u></h2>";
		text += "<br>";
		text += "<br> >> http://[IP]:8080/getPh";
		text += "<br> >> http://[IP]:8080/getPhByPool=[P]&year=[Y]&month=[M]&day=[D]";
		text += "<br> >> http://[IP]:8080/postPh=[T]&pool=[P]&year=[Y]&month=[M]&day=[D]&hour=[H]&minute=[M]";
		
		text += "<br>";
		text += "<br> >> http://[IP]:8080/getOxi";
		text += "<br> >> http://[IP]:8080/getOxiByPool=[P]&year=[Y]&month=[M]&day=[D]";
		text += "<br> >> http://[IP]:8080/postOxi=[O]&pool=[P]&year=[Y]&month=[M]&day=[D]&hour=[H]&minute=[M]";

		text += "<br>";
		text += "<br> >> http://[IP]:8080/getTemp";
		text += "<br> >> http://[IP]:8080/getTempByPool=[P]&year=[Y]&month=[M]&day=[D]";
		text += "<br> >> http://[IP]:8080/postTemp=[T]&pool=[P]&year=[Y]&month=[M]&day=[D]&hour=[H]&minute=[M]";

 		return text;
	}
}
