import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getHubDataById } from '../store/features/hubsSlice';

import BookHub from "components/BookHub";

import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';



import { styled } from '@mui/material/styles';
const StyledRating = styled(Rating)({
  '& .MuiRating-icon': {
    color: '#fff',
    size: '2rem'
  },
});

// const IMG_URL = 'https://backendhub-production.up.railway.app/static/images';
const IMG_URL = 'http://localhost:5000/static/images';

const StyledNameHub = styled(Typography) ( ({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 600,
  marginTop: '2rem',
  [theme.breakpoints.down('md')]:{
    fontSize: '1.5rem',
    textAlign: 'center',
  }
}));
const StyledOldPriceHub = styled(Typography) ( ({ theme }) => ({
  fontSize: '2.8rem',
  marginTop: '2rem', 
  fontWeight: 600, 
  color: '#d32f2f', 
  textDecoration: "line-through",
  [theme.breakpoints.down('md')]:{
    fontSize: '0.8rem',
  }
}));
const StyledPriceHub = styled(Typography) ( ({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 600, 
  [theme.breakpoints.down('md')]:{
    fontSize: '1rem',
  }
}));

const HubDetails = () => {
  const { hubDataById, isLoading, error } = useSelector((state) => state.hubs);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getHubDataById(id['id']));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <section id="hub-details">
      <Container>
      {isLoading && <Typography variant="h5" component="div" mt={2} paragraph>Loading data ...</Typography>}
      {error && <Typography variant="h5" component="div" mt={2} paragraph>Error ...</Typography> }

      <section id='images'>
          <ImageList sx={{ width: '90%', height: '90%', mx: 'auto' }} cols={2} gap={8} rowHeight='auto'>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${Object.values(hubDataById.image[0])}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${Object.values(hubDataById.image[1])}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${Object.values(hubDataById.image[2])}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${Object.values(hubDataById.image[3])}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
        </ImageList>
      </section>

      <section id="card-name">
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <Box>
            <StyledNameHub paragraph gutterBottom>
              {hubDataById.name}
            </StyledNameHub>
            <StyledRating name="rating" defaultValue={4} readOnly />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <StyledOldPriceHub component="div" paragraph>
              {hubDataById.oldPrice} &#8364;
            </StyledOldPriceHub>
            <StyledPriceHub component="div" gutterBottom>
              {hubDataById.price} &#8364;
            </StyledPriceHub>
          </Box>
        </Box>

        <Card sx={{ backgroundColor: '#374151', marginTop: '2rem' }}>
          <CardContent>
            <Typography variant="body2" p={3}>
              {hubDataById.content}
            </Typography>
          </CardContent>
        </Card>
      </section>

      <section>
          <BookHub hubDataById={hubDataById} />
      </section>

      </Container>
    </section>
    </>

    
  )
}

export default HubDetails;