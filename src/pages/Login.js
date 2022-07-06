import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    carregando: false,
  }

  isLoggin = async () => {
    this.setState({
      carregando: true,
    });
    const { history, nameInput } = this.props;
    await createUser({ name: nameInput });
    history.push('/search');
  };

  render() {
    const { handleOnChange, name, disable } = this.props;
    const { carregando } = this.state;
    return (
      <div data-testid="page-login">
        {
          carregando ? <Loading /> : (
            <form>
              <label htmlFor="login-name-input">
                Nome:
                <input
                  data-testid="login-name-input"
                  type="text"
                  placeholder="Digite o seu nome"
                  onChange={ handleOnChange }
                  name="name"
                  value={ name }
                />
              </label>
              <button
                data-testid="login-submit-button"
                type="button"
                disabled={ disable }
                onClick={ this.isLoggin }
              >
                Entrar

              </button>
            </form>
          )
        }

      </div>

    );
  }
}
Login.propTypes = {
  name: PropTypes.string,
  disable: PropTypes.bool,
}.isRequired;

export default Login;
