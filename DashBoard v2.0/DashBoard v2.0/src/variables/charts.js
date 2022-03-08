/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//import React from "react"

const url = "http://localhost:8080/getTempByPool=1&year=2021&month=11&day=1"
let mediciones = []
let ultTemp = 0



async function fetchApi () {
  console.log(mediciones.length)
  mediciones= []
  console.log(mediciones.length)
  const response = await fetch(url)
  const respJson = await response.json()
  respJson.forEach(element => {
    mediciones.push(element.temp)
    ultTemp = element.temp
  });
  console.log(mediciones.length)
  console.log(ultTemp)
  return(respJson)
}



const Horas = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]

const dashboardTEMPChart = {
  data: (canvas) => {
    return {
      labels: Horas,
      datasets: [
        {
          data: mediciones,
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: mediciones,
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

module.exports = {
    dashboardTEMPChart,
};
