import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../App/Login/login";
import Register from "../App/Register/register";
import Component from "../App/components/index";
import Form from "../App/Form/form";
import Client from "../App/Client/cliente";
function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Component />} />
        <Route path="/form" element={<Form />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </>
  );
}

export default Routers;
