import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getAllHubs } from 'store/features/hubsSlice';

import DisplayHubDetails from "components/DisplayHubDetails";

import main from 'assets/main.png';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
const StyledAvatar = styled(Avatar) ( ({ theme }) => ({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  }
}));
const StyledMainText = styled(Typography) ( ({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 600, 
  [theme.breakpoints.down('md')]:{
    fontSize: '1.8rem',
    fontWeight: 600,
  }
}));
const StyledMainContentText = styled(Typography) ( ({ theme }) => ({
  fontSize: '1.5rem',
  textAlign: 'center', 
  marginLeft: '4rem', 
  marginRight: '4rem',
  [theme.breakpoints.down('md')]:{
    fontSize: '0.8rem',
    marginLeft: '1rem', 
    marginRight: '1rem',
  }
}));

const Home = () => {
  const { hubsData, isLoading, error } = useSelector((state) => state.hubs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHubs());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <main>
      <section id="main-image">
        <Grid container spacing={2} p={4}>
            <Grid item sm={6} xs={12}>
            <StyledAvatar variant="rounded" src={main} />
            </Grid>

            <Grid item sm={6} xs={12} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly'
            }}>
            <StyledMainText component="div">
              &#8222;Taking you to the best places...&#8223;
              </StyledMainText>
            <StyledMainContentText component="div">
              The Adventure Hub is the perfect choice for anyone looking for a thrilling and unforgettable adventure experience, with a strong emphasis on  personalized service.
            </StyledMainContentText>
          </Grid>
        </Grid>
      </section>

      <section>
      <Container>
        {isLoading && <Typography variant="h5" component="div" mt={2} paragraph>Loading data ...</Typography>}
        {error && <Typography variant="h5" component="div" mt={2} paragraph>Error ...</Typography> }
        <Grid container spacing={2} mt={4}>
          {hubsData.map( (hubs) => {
            return (  
              <Grid key={hubs._id}  item sm={4} xs={12}>
                <DisplayHubDetails hubs={hubs} />
              </Grid>
            );
          })};
        </Grid>       
      </Container>
      </section>
    </main>
  )
}

export default Home;