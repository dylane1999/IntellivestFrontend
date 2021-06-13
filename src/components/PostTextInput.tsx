import React, {useState, Dispatch, SetStateAction} from 'react';
import {View, TextInput as Input, Text} from 'react-native';
import styled from 'styled-components/native';

interface IPostTextInputProps {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
  secure?: boolean;
}


const StyledInput = styled.TextInput`
  min-width: 100%;
  height: 60%;
  border-radius: 5px;
  color: white;
  padding: 26px;
  line-height: 18px;
`;

const PostTextInput = (props: IPostTextInputProps) => {
  return (
    <View>
      <StyledInput
      multiline={true}
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="#CCCCCC"
        secureTextEntry={props.secure}
        autoFocus={true}
      />
    </View>
  );
};

export default PostTextInput;
