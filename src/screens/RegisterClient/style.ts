import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #df692b;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 25px;
  z-index: 1;
  padding: 5px;
`;

export const Header = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-right: 15px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: #fff8ec;
  font-weight: bold;
  flex-shrink: 1;
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: #fff8ec;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 30px 25px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #df692b;
  border-radius: 12px;
  padding: 0 15px;
  margin-bottom: 15px;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.7)",
})`
  flex: 1;
  color: #fff;
  padding: 15px 10px;
  font-size: 16px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #df692b;
  padding: 15px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 25px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const LoginText = styled.Text`
  font-size: 15px;
  color: #666;
`;

export const LoginLink = styled.Text`
  font-size: 15px;
  color: #f48f33;
  font-weight: bold;
  margin-left: 5px;
`;
