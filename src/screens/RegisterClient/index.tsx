import React, { useState } from "react";
import { StatusBar, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderContent,
  Logo,
  HeaderTitle,
  FormContainer,
  Subtitle,
  InputContainer,
  StyledInput,
  RegisterButton,
  ButtonText,
  BackButton,
  LoginContainer,
  LoginText,
  LoginLink,
} from "./style";

// Validação de CPF
const isValidCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;

  return true;
};

// Validação de e-mail
const isValidEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
};

const RegisterClient = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Verifica se todos os campos estão preenchidos
    if (!name || !cpf || !email || !password || !confirmPassword) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos.");
      return;
    }

    // CPF
    if (!isValidCPF(cpf)) {
      Alert.alert("CPF inválido", "Por favor, insira um CPF válido.");
      return;
    }

    // E-mail
    if (!isValidEmail(email)) {
      Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
      return;
    }

    // Senha
    if (password.length < 6) {
      Alert.alert("Senha inválida", "A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    // Confirmação de senha
    if (password !== confirmPassword) {
      Alert.alert("Senhas diferentes", "As senhas não coincidem.");
      return;
    }

    console.log("Cadastro válido:", { name, cpf, email, password });

    Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <BackButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#FFF8EC" />
      </BackButton>

      <Header>
        <HeaderContent>
          <Logo source={require("../../assets/images/logo.png")} />
          <HeaderTitle>
            Cadastre-se para encontrar o profissional certo para você.
          </HeaderTitle>
        </HeaderContent>
      </Header>

      <FormContainer>
        <Subtitle>Cadastro de cliente:</Subtitle>

        <InputContainer>
          <Feather name="user" size={20} color="white" />
          <StyledInput
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
        </InputContainer>

        <InputContainer>
          <Feather name="shield" size={20} color="white" />
          <StyledInput
            placeholder="CPF"
            keyboardType="number-pad"
            maxLength={11}
            value={cpf}
            onChangeText={(text) => setCpf(text.replace(/[^0-9]/g, ""))}
          />
        </InputContainer>

        <InputContainer>
          <Feather name="mail" size={20} color="white" />
          <StyledInput
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>

        <InputContainer>
          <Feather name="lock" size={20} color="white" />
          <StyledInput
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </InputContainer>

        <InputContainer>
          <Feather name="lock" size={20} color="white" />
          <StyledInput
            placeholder="Confirme a senha"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </InputContainer>

        <RegisterButton onPress={handleRegister}>
          <ButtonText>Cadastrar</ButtonText>
        </RegisterButton>

        <LoginContainer>
          <LoginText>Já tem uma conta?</LoginText>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LoginLink>Entrar</LoginLink>
          </TouchableOpacity>
        </LoginContainer>
      </FormContainer>
    </Container>
  );
};

export default RegisterClient;
