import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { red, purple, green, yellow, blue } from '@mui/material/colors';

function Title() {
  return <Typography variant='h4' component="h1" gutterBottom color='primary' align='center'>
          My Material UI App1
        </Typography>
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> My Awesome Website! </Link>
      {' '} {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, border: 1, borderColor: blue.A100 }}>
        <Title/>
        <Box sx={{m: 3, border: 1, borderColor: purple[600]}}>
          <ProTip />
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3, mb: 3, ml: 3, mr: 3 }}>
          <Button color='secondary' variant='contained'>Hello World</Button>
          <Button variant='contained'>Submit</Button>
          <Button variant='contained'>Cancel</Button>
          <Button color='error' variant='contained'>Test</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3, mb: 3, ml: 3, mr: 3 }}>
          <Button variant='contained' sx={{color: yellow.A700, background: blue.A400}}>Windows</Button>
          <Button variant='contained' color='secondary'>Linux</Button>
          <Button variant='contained' color='info'>MacOS</Button>
        </Box>
        <Copyright/>
      </Box>
    </Container>
  );
}
