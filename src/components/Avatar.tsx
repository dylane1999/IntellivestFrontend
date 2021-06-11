import React from 'react';
import styled from 'styled-components/native';

interface IAvatarProps {
  imageUrl: string;
  size?: string;
}

const Avatar = (props: IAvatarProps) => {
  const getImageSize = () => {
    if (props.size) {
      return props.size;
    }
    return '50px';
  };

  const AvatarImage = styled.Image`
    height: ${getImageSize()};
    width: ${getImageSize()};
    border-radius: 50;
  `;

  return (
    <AvatarImage
      source={{
        uri: props.imageUrl,
      }}
    />
  );
};

export default Avatar;
