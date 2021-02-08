import React from 'react';
import { MdDashboard, MdAttachMoney, MdClose, MdPersonAdd, MdCreditCard, MdAttachFile, MdPayment, MdPanTool, MdViewList, MdMoreVert } from 'react-icons/md';
import { Background, Container, Header, ContainerDefault } from './styles';

import ImgAvatar from '../../assets/avatar.jpeg';

function Dashboard() {
  return (
    <Background>
      <Container>
        <Header>
          <div className="info">
            <img src={ImgAvatar} alt="avatar"/>
            <strong>Caique Queiroz</strong>
          </div>
          <hr />
          <nav>            
            <ul>
              <li><a href=""><MdDashboard /> Dashboard</a></li>
              <li><a href=""><MdCreditCard /> Despesas</a></li>
              <li><a href=""><MdAttachMoney /> Receitas</a></li>
              <li><a href=""><MdPanTool /> Gastos não previstos</a></li>
              <li><a href=""><MdPayment /> Contas a pagar</a></li>
              <li><a href=""> <MdAttachFile /> Anexar boletos</a></li>
              <li><a href=""><MdPersonAdd /> Usuários</a></li>
              <li><a href=""><MdViewList /> Relatórios</a></li>
              <hr/>
              <li><a href=""><MdClose /> Sair</a></li>
            </ul>
          </nav>
        </Header>
        <ContainerDefault>
          <div className="grid">
            <div className="item">
              <div className="header">
                <button>
                  <MdMoreVert />
                </button>
              </div>
            </div>
            <div className="item">
              <div className="header">
                <button>
                  <MdMoreVert />
                </button>
              </div>
            </div>
            <div className="item item1">
              <div className="header">
                <button>
                  <MdMoreVert />
                </button>
              </div>
            </div>
          </div>
        </ContainerDefault>
      </Container>
    </Background>
  );
}

export default Dashboard;