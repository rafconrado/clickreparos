import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff8ec;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #f48f33;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
