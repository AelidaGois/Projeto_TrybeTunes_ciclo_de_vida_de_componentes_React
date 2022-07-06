import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <>
            <h2 data-testid="header-user-name">
              {nome.name}
            </h2>
            <Link data-testid="link-to-search" to="/search">Pesquisar </Link>
            <Link data-testid="link-to-favorites" to="/favorites">Favoritos </Link>
            <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
          </>
        )}

      </header>
    );
  }
}

export default Header;
