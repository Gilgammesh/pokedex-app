import React from 'react';
import {Animated, ImageStyle, StyleProp} from 'react-native';
import useAnimation from '../hooks/useAnimation';

interface IProps {
  uri: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: IProps) => {
  const {opacity, fadeIn} = useAnimation();

  return (
    <Animated.Image
      source={{uri}}
      style={[style, {opacity}]}
      onLoad={() => fadeIn(1000)}
    />
  );
};

export default FadeInImage;
