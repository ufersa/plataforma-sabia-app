interface ThemeProps {
  [key: string]: any
}

const defaultTheme = 'light';
const theme: ThemeProps = {
  light: {
    dark: false,
    colors: {
      primary: '#00a688',
      primaryLight: '#ccede7',
      orange: '#f99942',
      orangeLight: '#feebd9',
      secondary: '#f99942',
      danger: '#f04b40',
      info: '#3498db',
      infoLight: '#d6eaf8',
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
      orange: '#f99942',
      orangeLight: '#feebd9',
      secondary: '#f99942',
      danger: '#f04b40',
      info: '#3498db',
      infoLight: '#d6eaf8',
      background: '#f5f5f5',
      card: '#ffffff',
      text: '',
      border: '#f5f5f5',
      notification: '',
    },
  },
};

export default theme[defaultTheme].colors;
