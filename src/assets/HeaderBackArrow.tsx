import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Link} from 'react-router-native';
import styled from 'styled-components/native';
import BackArrow from '../assets/BackArrow';
import {useHistory} from 'react-router-native';
import ChevronArrow from './ChevronArrow';

const ArrowContainer = styled.View`
`;

const HeaderBackArrow = () => {
  const history = useHistory();

  return (
    <ArrowContainer>
      <TouchableOpacity
        onPress={() => {
          console.log('history, go back', history.location);
          history.goBack()
        }}>
        <Text>
          <ChevronArrow />
        </Text>
      </TouchableOpacity>
    </ArrowContainer>
  );
};

export default HeaderBackArrow;
