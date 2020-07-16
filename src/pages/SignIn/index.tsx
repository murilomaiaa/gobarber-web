import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImage from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="Go Barber" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" type="text" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="singup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
