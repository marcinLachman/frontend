import { Link } from 'react-router-dom';

import polandIcon from 'assets/polandIcon.svg';
import ukIcon from 'assets/ukIcon.svg'
import spainIcon from 'assets/spainIcon.svg'; 
import { BsFillSignRailroadFill } from "react-icons/bs";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/system';
const MainNameAndLogo = styled(Typography) ( ({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  [theme.breakpoints.down('md')]:{
    fontSize: '1.3rem',
    textAlign: 'center',
    fontWeight: 800,
  }
}));
const AdminDisplayOff = styled(Button) ( ({ theme }) => ({
  [theme.breakpoints.down('md')]:{
    display: 'none',
  }
}));

const Navbar = () => {
  return (
  <nav>
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Link to='/'>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MainNameAndLogo variant="h4" component="h2"  m={2} gutterBottom>
              <BsFillSignRailroadFill />
            </MainNameAndLogo>
            <MainNameAndLogo m={2} gutterBottom>
              Adventure Hubs
            </MainNameAndLogo>
            </Box>
          </Link>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Button variant="text">
            <Avatar variant={"square"} alt="The icon pl" src={polandIcon} style={{
              width: '2rem',
              height: '1.5rem',
            }} />
          </Button>
          <Button variant="text">
            <Avatar variant={"square"} alt="The icon uk" src={spainIcon} style={{
              width: '2rem',
              height: '1.5rem',
            }} />
          </Button>
          <Button variant="text">
            <Avatar variant={"square"} alt="The icon uk" src={ukIcon} style={{
              width: '2rem',
              height: '1.5rem',
            }} />
          </Button>
          <Button variant="body2" component="div">Contact</Button>
          <AdminDisplayOff variant="body2" component="div">admin</AdminDisplayOff>
        </Grid>
        </Grid>
    </Container>
 </nav>
  )
}

export default Navbar;