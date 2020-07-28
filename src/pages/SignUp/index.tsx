import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Container, Content, AnimatedContainer, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImage from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome é um campo obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail é um campo obrigatório'),
        password: Yup.string().min(6, 'Tamanho mínimo: 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={logoImage} alt="Go Barber" />

          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <h1>Faça seu cadastro</h1>

            <Input
              name="username"
              icon={FiUser}
              placeholder="username"
              type="text"
            />
            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              type="text"
            />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para log in
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
