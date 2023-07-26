import React from 'react';
import {
  Box,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from '@mui/material';
import MainLayout from './layouts/MainLayout';

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
       <MainLayout/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
