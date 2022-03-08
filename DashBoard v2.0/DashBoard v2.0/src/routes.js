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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Users from "views/Users.js";

var routes = [
  
  {
    path: "/dashboard",
    name: "Estación de Piscicultura",
    icon: "fas fa-fish",
    component: Dashboard,
    layout: "/admin",
  },
   
    {
    path: "/notifications",
    name: "Notificaciones",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  
  {
    path: "/users",
    name: "Registro de Usuarios",
    icon: "nc-icon nc-single-02",
    component: Users,
    layout: "/admin",
  },

];
export default routes;
