import React, {useState, Dispatch, SetStateAction} from 'react';
import {View, TextInput as Input, Text} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
}

const StyledInput = styled.TextInput`
  width: 322px;
  height: 56px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  color: white;
  margin: 20px;
  padding-left: 6px;

`;

const TextInput = (props: Props) => {
  return (
    <View>
      <StyledInput
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};

export default TextInput;
