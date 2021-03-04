const defaultTheme = 'light';
const theme: any = {
  light: {
    dark: false,
    colors: {
      primary: '#00a688',
      primaryLight: '#ccede7',
      secondary: '#f99942',
      danger: '#f04b40',
      info: '#3498db',
      background: '#f5f5f5',
      card: '#ffffff',
      text: '',
      border: '#f5f5f5',
      notification: '',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#00a688',
      primaryLight: '#ccede7',
      secondary: '#f99942',
      danger: '#f04b40',
      info: '#3498db',
      background: '#f5f5f5',
      card: '#ffffff',
      text: '',
      border: '#f5f5f5',
      notification: '',
    },
  },
};

export default theme[defaultTheme].colors;
