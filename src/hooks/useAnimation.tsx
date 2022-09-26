import {useRef} from 'react';
import {Animated} from 'react-native';

const useAnimation = () => {
  const opacityInit = 0.3;
  const opacityEnd = 1;
  const opacityDuration = 3000;
  const opacity = useRef(new Animated.Value(opacityInit)).current;

  const fadeIn = (duration: number = opacityDuration) => {
    Animated.timing(opacity, {
      toValue: opacityEnd,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (duration: number = opacityDuration) => {
    Animated.timing(opacity, {
      toValue: opacityInit,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {opacity, fadeIn, fadeOut};
};

export default useAnimation;
