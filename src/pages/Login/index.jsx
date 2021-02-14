import React from "react";
import { MdPerson, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

import { Container, Form, ContainerTotal } from "./styles";

function Login() {
  return (
    <ContainerTotal>
      <div className="section1">
        <Container>
          <Form>
            <h1>FinanceApp</h1>
            <div>
              <label htmlFor="">
                <MdPerson /> Login
              </label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">
                <MdLock /> Senha
              </label>
              <input type="password" />
            </div>
            <Link to="/dashboard">LOGIN</Link>
          </Form>
        </Container>
      </div>
      <div className="section2"></div>
    </ContainerTotal>
  );
}

export default Login;
