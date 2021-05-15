import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import BackArrow from '../assets/BackArrow';

interface Props {
    path: string
}

const ArrowContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 26px;
`;

const GoBackArrow = (props: Props) => {
    return (
      <ArrowContainer>
        <Link
          to={props.path}
          component={TouchableOpacity}
          onPress={() => console.log('pressed')}>
          <Text>
            <BackArrow />
          </Text>
        </Link>
      </ArrowContainer>
    );
  };

export default GoBackArrow
