import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImage from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImage} alt="Go Barber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input
            name="username"
            icon={FiUser}
            placeholder="username"
            type="text"
          />
          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="singup">
          <FiArrowLeft />
          Voltar para log in
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
