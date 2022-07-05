import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends Component {
  state = {
    nome: '',
    carregando: true,
  }

componentDidMount = () => {
  this.isGetUser();
}

  isGetUser = async () => {
    const user = await getUser();
    this.setState({ nome: user, carregando: false });
  };

  render() {
    const { nome, carregando } = this.state;
    return (
      <header data-testid="header-component">
        {carregando ? <Loading /> : (
          <h2 data-testid="header-user-name">
            {nome.name}
          </h2>
        )}

      </header>

    );
  }
}

export default Header;
