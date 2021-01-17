const defaultTheme = 'light';
const theme = {
  light: {
    dark: false,
    colors: {
      primary: '#00a688',
      danger: '#f04b40',
      background: '#f5f5f5',
      card: '',
      text: '',
      border: '',
      notification: '',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#00a688',
      danger: '#f04b40',
      background: '#f5f5f5',
      card: '',
      text: '',
      border: '',
      notification: '',
    },
  },
};

export default theme[defaultTheme].colors;
