import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}
const theme = {
  colors: {
    white: "#FFF",
    black: "#000",
    primary: "#242424",
    secondary: "#464444",
  },
  fonts: ["'Nunito Sans', sans-serif"],
  fontWeight: {
    slim: 300,
    medium: 600,
    bold: 800,
  },
};

const Theme: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
