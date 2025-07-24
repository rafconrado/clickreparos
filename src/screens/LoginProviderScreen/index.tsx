import React from "react";
// ✨ 1. Importe os componentes necessários
import {
  StatusBar,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// ✨ 2. Importe o hook para a área segura
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Container,
  FormContainer,
  BlueFooter,
  Subtitle,
  InputContainer,
  StyledInput,
  ForgotPasswordText,
  LoginButton,
  ButtonText,
  DividerContainer,
  DividerLine,
  DividerText,
  SocialLoginContainer,
  FooterContent,
  Logo,
  FooterTitle,
  BackButton,
  SignUpContainer,
  SignUpText,
  SignUpLink,
} from "./style";

import { AntDesign, Feather } from "@expo/vector-icons";

const LoginProviderScreen = () => {
  const navigation = useNavigation();
  // ✨ 3. Obtenha as medidas da área segura
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff8ec" />
      {/* ✨ 4. Passe a medida do topo para o BackButton */}
      <BackButton topInset={insets.top} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#57b2c5" />
      </BackButton>

      {/* ✨ 5. Envolva o conteúdo com KeyboardAvoidingView e ScrollView */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <FormContainer>
            <Subtitle>Sou prestador:</Subtitle>

            <InputContainer>
              <Feather name="user" size={20} color="white" />
              <StyledInput placeholder="E-mail" keyboardType="email-address" />
            </InputContainer>

            <InputContainer>
              <Feather name="lock" size={20} color="white" />
              <StyledInput placeholder="Senha" secureTextEntry />
            </InputContainer>

            <TouchableOpacity>
              <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
            </TouchableOpacity>

            <LoginButton>
              <ButtonText>Login</ButtonText>
            </LoginButton>

            <DividerContainer>
              <DividerLine />
              <DividerText>Login com:</DividerText>
              <DividerLine />
            </DividerContainer>

            <SocialLoginContainer>
              <TouchableOpacity>
                <AntDesign name="google" size={30} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="apple1" size={30} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="facebook-square" size={30} color="#000000" />
              </TouchableOpacity>
            </SocialLoginContainer>

            <SignUpContainer>
              <SignUpText>Não tem uma conta?</SignUpText>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RegisterProvider" as never)
                }
              >
                <SignUpLink>Cadastre-se</SignUpLink>
              </TouchableOpacity>
            </SignUpContainer>
          </FormContainer>

          <BlueFooter>
            <FooterContent>
              <Logo source={require("../../assets/images/logo.png")} />
              <FooterTitle>
                Conectando você a novas oportunidades.
              </FooterTitle>
            </FooterContent>
          </BlueFooter>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginProviderScreen;