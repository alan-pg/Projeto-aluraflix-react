import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/Home/App';
import CadastroVideo from './pages/cadastro/videos';
import erro404 from './pages/Error';
import cadastroCategoria from './pages/cadastro/categorias';
// const pagina404 = () => (<div>Erro 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video/" component={CadastroVideo} />
      <Route path="/cadastro/categoria/" component={cadastroCategoria} />
      <Route component={erro404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
