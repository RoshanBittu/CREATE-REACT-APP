import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import ResponsiveDrawer from './slideBarCom/ResponsiveDrawer';

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
          <ResponsiveDrawer/>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
