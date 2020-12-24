const defaultTheme = 'light';
const theme = {
  light: {
    dark: false,
    colors: {
      primary: '#00a688',
      danger: '#f04b40',
      background: '#f5f5f5',
      card: '#ffffff',
      text: '',
      border: '#f5f5f5',
      notification: ''
    }
  },
  dark: {
    dark: true,
    colors: {
      primary: '#00a688',
      danger: '#f04b40',
      background: '#f5f5f5',
      card: '#ffffff',
      text: '',
      border: '#f5f5f5',
      notification: ''
    }
  }
};

export default theme[defaultTheme].colors;
