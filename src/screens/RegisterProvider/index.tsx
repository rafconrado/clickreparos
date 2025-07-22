import React from "react";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, Subtitle } from "./style";

const RegisterProvider = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Tela de Cadastro</Title>
      <Subtitle>Loading...</Subtitle>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default RegisterProvider;
