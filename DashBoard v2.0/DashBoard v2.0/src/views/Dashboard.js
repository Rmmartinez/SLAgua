
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card, CardHeader, CardBody, CardFooter,
  UncontrolledAlert, CardTitle, Row, Col,
} from "reactstrap";

//import {dashboardTEMPChart} from "variables/charts.js"
import React, { useState, useEffect } from "react";
import axios from 'axios';


var parametro = "Temperatura";

/*var url = "http://10.42.0.1:8080/getTempByPool=1&year=2022&month=3&day=4"       //Temperatura
var urlPh = "http://10.42.0.1:8080/getPhByPool=1&year=2022&month=3&day=4"       //Ph */
var urlCond = "http://10.42.0.1:8080/getCondByPool=1&year=2022&month=3&day=4"   //Conductividad
//var urlOxi = "http://10.42.0.1:8080/getOxiByPool=1&year=2022&month=3&day=4"     //Oxígeno
var urlSal = "http://10.42.0.1:8080/getSalByPool=1&year=2022&month=3&day=4"     //Salinidad
var urlProf = "http://10.42.0.1:8080/getProfByPool=1&year=2022&month=3&day=4"   //Profundidad
var urlRedox = "http://10.42.0.1:8080/getRedoxByPool=1&year=2022&month=3&day=4" //Oxígeno de Reducción

var url = "http://localhost:8080/getTempByPool=1&year=2021&month=11&day=1"
var urlPh = "http://localhost:8080/getPhByPool=1&year=2021&month=11&day=1"
var urlOxi = "http://localhost:8080/getOxiByPool=1&year=2021&month=11&day=1"





function Dashboard() {

  const [arrayParametro, setArrayParametro] = useState();   //arreglo general

  const [arrayTemp, setArrayTemp] = useState();     //el Array es para el gráfico
  const [lastTemp, setLastTemp] = useState();       //el lastTemp es para la tarjeta

  const [arrayPh, setArrayPh] = useState();
  const [lastPh, setLastPh] = useState();

  const [arrayCond, setArrayCond] = useState();
  const [lastCond, setLastCond] = useState();

  const [arrayOxi, setArrayOxi] = useState();
  const [lastOxi, setLastOxi] = useState();

  const [arraySal, setArraySal] = useState();
  const [lastSal, setLastSal] = useState();

  const [arrayProf, setArrayProf] = useState();
  const [lastProf, setLastProf] = useState();

  const [arrayRedox, setArrayRedox] = useState();
  const [lastRedox, setLastRedox] = useState();

  const Horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"]

  let cardTemp = "";

  const funcionPrint = () => {
    //window.print()
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><h2>Tabla de Datos:</h2> Estación de Piscicultura Río Grande - últimas 24 horas<head>');
    mywindow.document.write('<style>.table{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.table th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:center;font-size:15px;}.table td{border:1px solid #ddd;text-align:center;padding:6px;}</style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById('muestra').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    mywindow.close();
    return true;
  };

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };

  function recargar() {
    let tempHoy = [];
    let phHoy = [];
    let condHoy = [];
    let oxiHoy = [];
    let salHoy = [];
    let profHoy = [];
    let redoxHoy = [];

    //temperatura
    axios.get(url)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            tempHoy[j] = response.data[index].temp
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            tempHoy[index] = response.data[index].temp
          }
        }

        setArrayTemp(tempHoy);
        setLastTemp(response.data[response.data.length - 1].temp);

      })

    //PH
    axios.get(urlPh)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            phHoy[j] = response.data[index].ph
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            phHoy[index] = response.data[index].ph
          }
        }

        setArrayPh(phHoy);
        setLastPh(response.data[response.data.length - 1].ph);
      })

    //conductividad

    axios.get(urlCond)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            condHoy[j] = response.data[index].cond
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            condHoy[index] = response.data[index].cond
          }
        }

        setArrayCond(condHoy);
        setLastCond(response.data[response.data.length - 1].cond);
      })


    //Oxígeno
    axios.get(urlOxi)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            oxiHoy[j] = response.data[index].oxi
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            oxiHoy[index] = response.data[index].oxi
          }
        }

        setArrayOxi(oxiHoy);
        setLastOxi(response.data[response.data.length - 1].oxi);
      })

    //Salinidad

    axios.get(urlSal)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            salHoy[j] = response.data[index].sal
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            salHoy[index] = response.data[index].sal
          }
        }

        setArraySal(salHoy);
        setLastSal(response.data[response.data.length - 1].sal);
      })

    //Profundidad

    axios.get(urlProf)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            profHoy[j] = response.data[index].prof
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            profHoy[index] = response.data[index].prof
          }
        }

        setArrayProf(profHoy);
        setLastProf(response.data[response.data.length - 1].prof);
      })

    //Óxido de Reducción

    axios.get(urlRedox)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            redoxHoy[j] = response.data[index].redox
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            redoxHoy[index] = response.data[index].redox
          }
        }

        setArrayRedox(redoxHoy);
        setLastRedox(response.data[response.data.length - 1].redox);
      })


  };

  const cambioParametro = (param) => {
    if (param == 'PH') {
      parametro = 'PH';
      setArrayParametro(arrayPh);
    }
    if (param == 'oxigeno') {
      parametro = 'Oxígeno';
      setArrayParametro(arrayOxi);
    }
    if (param == 'salinidad') {
      parametro = 'Salinidad';
      setArrayParametro(arraySal);
    }
    if (param == 'profundidad') {
      parametro = 'Profundidad';
      setArrayParametro(arrayProf);
    }
    if (param == 'conductividad') {
      parametro = 'Conductividad';
      setArrayParametro(arrayCond);
    }
    if (param == 'oxireduc') {
      parametro = 'Oxígeno Reducido';
      setArrayParametro(arrayRedox);
    }
    if (param == 'temperatura') {
      parametro = 'Temperatura';
      setArrayParametro(arrayTemp);
    }
    recargar();
  }


  const sidebarToggle = React.useRef();

  useEffect(async () => {
    let phHoy = [];
    let tempHoy = [];
    let condHoy = [];
    let oxiHoy = [];
    let salHoy = [];
    let profHoy = [];
    let redoxHoy = [];

    //Temperatura
    await axios.get(url)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            tempHoy[j] = response.data[index].temp
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            tempHoy[index] = response.data[index].temp
          }
        }

        setArrayTemp(tempHoy);
        setLastTemp(response.data[response.data.length - 1].temp);

      })

    //Ph
    await axios.get(urlPh)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            phHoy[j] = response.data[index].ph
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            phHoy[index] = response.data[index].ph
          }
        }

        setArrayPh(phHoy);
        setLastPh(response.data[response.data.length - 1].ph);
      })

    //conductividad

    await axios.get(urlCond)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            condHoy[j] = response.data[index].cond
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            condHoy[index] = response.data[index].cond
          }
        }

        setArrayCond(condHoy);
        setLastCond(response.data[response.data.length - 1].cond);
      })

    //Oxígeno

    await axios.get(urlOxi)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            oxiHoy[j] = response.data[index].oxi
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            oxiHoy[index] = response.data[index].oxi
          }
        }

        setArrayOxi(oxiHoy);
        setLastOxi(response.data[response.data.length - 1].oxi);
      })

    //Salinidad

    await axios.get(urlSal)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            salHoy[j] = response.data[index].sal
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            salHoy[index] = response.data[index].sal
          }
        }

        setArraySal(salHoy);
        setLastSal(response.data[response.data.length - 1].sal);
      })

    //Profundidad

    await axios.get(urlProf)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            profHoy[j] = response.data[index].prof
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            profHoy[index] = response.data[index].prof
          }
        }

        setArrayProf(profHoy);
        setLastProf(response.data[response.data.length - 1].prof);
      })

    //Óxido de Reducción

    await axios.get(urlRedox)
      .then(response => {
        if (response.data.length > 24) {
          for (let index = response.data.length - 24, j = 0; index < response.data.length; index++, j++) {
            redoxHoy[j] = response.data[index].redox
          }
        } else {
          for (let index = 0; index < response.data.length; index++) {
            redoxHoy[index] = response.data[index].redox
          }
        }

        setArrayRedox(redoxHoy);
        setLastRedox(response.data[response.data.length - 1].redox);
      })



  }, []);


  useEffect(() => {
    setInterval(() => {
      recargar()
    }, 1000 * 11);
  }, []);


  if (lastTemp > 20) {
    cardTemp = "fas fa-thermometer-three-quarters text-danger"
  } else {
    cardTemp = "fas fa-thermometer-three-quarters text-primary"
  }


  //Dibujo de la gráfica: HORAS debería ser dinámico según el desplegable
  var dashboardTEMPChart = {
    data: (canvas) => {
      return {
        labels: Horas,
        datasets: [
          {
            data: arrayParametro,
            fill: false,
            borderColor: "#51CACF",
            backgroundColor: "transparent",
            pointBorderColor: "#51CACF",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8,
            tension: 0.4,
          },
        ],
      };
    },
    options: {
      plugins: {
        legend: { display: false },
      },
    },
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">

            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}

                onClick={() => cambioParametro('PH')}

              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-danger"></i>

                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">PH</p>
                        <CardTitle tag="p"> {lastPh} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>





          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('oxigeno')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-success"></i>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Oxígeno</p>
                        <CardTitle tag="p"> {lastOxi} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('salinidad')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-warning"></i>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Salinidad</p>
                        <CardTitle tag="p"> {lastSal} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">

            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('profundidad')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-danger"></i>

                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Profundidad</p>
                        <CardTitle tag="p"> {lastProf} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('conductividad')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-success"></i>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Conductividad</p>
                        <CardTitle tag="p"> {lastCond}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('oxireduc')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fas fa-tint text-warning"></i>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">ORP</p>
                        <CardTitle tag="p">{lastRedox}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <button
                type="button"
                //ref= {sidebarToggle}
                className="navbar-toggler"
                //onClick={() => openSidebar()}
                onClick={() => cambioParametro('temperatura')}
              >
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className={cardTemp}></i>
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Temperatura</p>
                        <CardTitle tag="p"> {lastTemp} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                  <Row>

                  </Row>
                </CardBody>
              </button>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>

                <CardTitle tag="h5">{parametro} en Pileta</CardTitle>
                <br />
                <select name="Rol">
                  <option >Tiempo</option>
                  <option value="value1">24 horas</option>
                  <option value="value2">2 días</option>
                  <option value="value3">Semanal</option>
                </select>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardTEMPChart.data}
                  options={dashboardTEMPChart.options}
                  width={400}
                  height={140}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="2"></Col>
          <Col ><CardTitle tag="h5">Tabla de Datos:</CardTitle></Col>
          <Col md="2"></Col>
        </Row>
        <Row>
          <Col md="2"></Col>
          <Col><p className="card-category">Ultimas 24 Horas</p></Col>
          <Col md="2"></Col>
        </Row>

        <Row>
          <Col md="2"></Col>
          <Col>
            <div id="muestra">
              <table id="muestra" class="table">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">{parametro}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>22/2/2022</td>
                    <td>10:00</td>
                    <td>17°</td>
                  </tr>
                  <tr>
                    <td>22/2/2022</td>
                    <td>11:00</td>
                    <td>17.2°</td>
                  </tr>
                  <tr>
                    <td>22/2/2022</td>
                    <td>12:00</td>
                    <td>18°</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
          <Col md="2"></Col>
        </Row>
        <Row>
          <Col md="8"></Col>
          <input type="button" value="Descargar" class="btn btn-danger btn-sm" onClick={() => funcionPrint()} />
        </Row>


      </div>

    </>


  );




}



export default Dashboard;

