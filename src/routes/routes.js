import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Comprovantes from '../pages/Comprovantes';
import Receitas from '../pages/Receitas';
import Despesas from '../pages/Despesas';
import Resumo from '../pages/Resumo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/comprovantes" component={Comprovantes} />
        <Route path="/receitas" component={Receitas} />
        <Route path="/despesas" component={Despesas} />
        <Route path="/resumo" component={Resumo} />
      </Switch>
    </BrowserRouter>
  )
}   