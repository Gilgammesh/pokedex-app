import ImageColors from 'react-native-image-colors';

const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {
    cache: true,
  });
  let primary: string = '';
  let secondary: string = '';
  let background: string = '';

  if (colors.platform === 'ios') {
    primary = colors.primary as string;
    secondary = colors.secondary as string;
    background = colors.background as string;
  }
  if (colors.platform === 'android') {
    primary = colors.dominant as string;
    secondary = colors.average as string;
    background = colors.dominant as string;
  }

  return {primary, secondary, background};
};

export default getImageColors;
