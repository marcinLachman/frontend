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
const StyledMainNameAndLogo = styled(Typography) ( ({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  [theme.breakpoints.down('md')]:{
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 800,
  }
}));
const StyledAdminDisplayOff = styled(Button) ( ({ theme }) => ({
  [theme.breakpoints.down('md')]:{
    display: 'none',
  }
}));
const StyledFlagsIcons = styled(Avatar) ( ({ theme }) => ({
  width: '2rem',
  height: '1.5rem',
  [theme.breakpoints.down('md')]:{
    width: '0.8rem',
    height: '0.5rem',
  }
}));
const StyledTextContact = styled(Button) ( ({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('md')]:{
    fontSize: '0.5rem',
  }
}));

const Navbar = () => {
  return (
  <nav>
    <Container>
      <Grid container direction="row-reverse" spacing={1}>

        <Grid item sm={6} xs={12}>
            <Button variant="text">
              <StyledFlagsIcons variant={"square"} alt="The icon pl" src={polandIcon} />
            </Button>
            <Button variant="text">
              <StyledFlagsIcons variant={"square"} alt="The icon uk" src={spainIcon} />
            </Button>
            <Button variant="text">
              <StyledFlagsIcons variant={"square"} alt="The icon uk" src={ukIcon} />
            </Button>
            <StyledTextContact variant="body2" component="div">Contact</StyledTextContact>
            <StyledAdminDisplayOff variant="body2" component="div">admin</StyledAdminDisplayOff>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Link to='/'>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <StyledMainNameAndLogo variant="h4" component="h2"  m={2} gutterBottom>
              <BsFillSignRailroadFill />
            </StyledMainNameAndLogo>
            <StyledMainNameAndLogo m={2} gutterBottom>
              Adventure Hubs
            </StyledMainNameAndLogo>
            </Box>
          </Link>
        </Grid>
        </Grid>
    </Container>
 </nav>
  )
}

export default Navbar;