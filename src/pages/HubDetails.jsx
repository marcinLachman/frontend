import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { getHubDataById } from '../store/features/hubsSlice';

import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { styled } from '@mui/material/styles';
const StyledRating = styled(Rating)({
  '& .MuiRating-icon': {
    color: '#fff',
    size: '2rem'
  },
});

const IMG_URL = 'backendhub-production.up.railway.app/api/v1/hubs/static/images';

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
  // const [value, setValue] = useState(null)
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
                src={hubDataById.image ? `${IMG_URL}/images-${hubDataById.image[0]['FileName']}` : ''}
                // src={hubDataById.image ? `${IMG_URL}/images-${hubDataById.image[0]['FileName']}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${hubDataById.image[1]['FileName']}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${hubDataById.image[2]['FileName']}` : ''}
                alt={hubDataById.image}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={hubDataById.image ? `${IMG_URL}/images-${hubDataById.image[3]['FileName']}` : ''}
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
        <Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: '2rem'
          }}>
            <TextField 
              color='textFieldText'
              id="name" 
              label="Name and Surname please"   
              variant="outlined" 
              fullWidth 
              sx={{
                '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
                  '& fieldset': {            // - The <fieldset> inside the Input-root
                      borderColor: '#fff',   // - Set the Input border
                  },
                  '&:hover fieldset': {
                      borderColor: '#fff', // - Set the Input border when parent has :hover
                  },
                  '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                      borderColor: '#fff',
                  },
              },
              }} 
            />
            <TextField 
              color='textFieldText'
              id="email" 
              label="Email please"   
              variant="outlined" 
              fullWidth 
              sx={{
                '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
                  '& fieldset': {            // - The <fieldset> inside the Input-root
                      borderColor: '#fff',   // - Set the Input border
                  },
                  '&:hover fieldset': {
                      borderColor: '#fff', // - Set the Input border when parent has :hover
                  },
                  '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                      borderColor: '#fff',
                  },
              },
              }} 
            />
          </Box>
          <Box>
            <Grid container spacing={2} p={4}>
            <Grid item sm={3} xs={12}>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Select Date'
                  disablePast
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  sx={{
                    svg: { color: '#fff' },
                    input: { color: '#fff' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#fff',
                      },
                      '&:hover fieldset': {
                        borderColor: '#fff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                      },
                    },
                  }}
                />
              </LocalizationProvider> */}
            </Grid>

            <Grid item sm={3} xs={12}>
            </Grid>

            <Grid item sm={3} xs={12}>
            </Grid>

            <Grid item sm={3} xs={12}>
            </Grid>
            </Grid>
          </Box>
        </Box>
      </section>

      </Container>
    </section>
    </>

    
  )
}

export default HubDetails;