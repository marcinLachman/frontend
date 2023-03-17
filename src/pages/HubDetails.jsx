import { useEffect, useState } from "react";
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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [date, setDate] = useState(null)
  const [input, setInput] = useState({
    houers: '',
    adults: '',
    kids: ''
  });
  const { hubDataById, isLoading, error } = useSelector((state) => state.hubs);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getHubDataById(id['id']));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

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
        <Box>
          <Typography variant="h3" m={2} p={3} sx={{ fontWeight: 600 }}>
            Zarezerwój teraz: 
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            marginTop: '2rem',
          }}>
            <TextField 
              color='textFieldText'
              id="name" 
              label="Name and Surname please"   
              variant="outlined" 
              fullWidth 
              sx={{
                "& input": {
                  color: '#fff'
                },
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
                "& input": {
                  color: '#fff'
                },
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
            <Grid container spacing={2} mt={2}>
            <Grid item sm={3} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label='Select Date'
                  disablePast
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  sx={{
                    svg: { color: '#fff' },
                    input: { color: '#fff' },
                    label: { color: '#fff' },
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
              </LocalizationProvider>
            </Grid>

            <Grid item sm={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Godziny</InputLabel>
                <Select
                  color="textFieldText"
                  labelId="houers"
                  id="houers"
                  value={input.houers}
                  label="Godziny"
                  name="houers"
                  onChange={handleChange}
                  sx={{
                    color: "#fff",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    }, 
                  }}
                >
                {hubDataById.bookingHouers?.map((index) => {
                return (
                  <MenuItem key={index} value={index} sx={{ color: '#000'}}>
                    {index}
                  </MenuItem>
                )})}
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ilość Dorosłych</InputLabel>
                <Select
                  color="textFieldText"
                  labelId="adults"
                  id="adults"
                  value={input.adults}
                  label="Ilość Dorosłych"
                  name="adults"
                  onChange={handleChange}
                  sx={{
                    color: "#fff",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                  }}
                >
                {hubDataById.bookingAdults?.map((index) => {
                return (
                  <MenuItem key={index} value={index} sx={{ color: '#000'}}>
                    {index}
                  </MenuItem>
                )})}
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ilość dzieci</InputLabel>
                <Select
                  color="textFieldText"
                  labelId="kids"
                  id="kids"
                  value={input.kids}
                  label="Ilość dzieci"
                  name="kids"
                  onChange={handleChange}
                  sx={{
                    color: "#fff",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                  }}
                >
                {hubDataById.bookingChilds?.map((index) => {
                return (
                  <MenuItem key={index} value={index} sx={{ color: '#000'}}>
                    {index}
                  </MenuItem>
                )})}
                </Select>
              </FormControl>
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