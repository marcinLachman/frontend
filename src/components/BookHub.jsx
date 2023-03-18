import { useState } from "react";

import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from '@mui/material/styles';
const StyledInputNameSurnameFields = styled(Box) ( ({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  [theme.breakpoints.down('md')]:{
    display: 'flex',
    flexDirection: 'column',
  }
}));

const BookHub = ({ hubDataById }) => {
  const [date, setDate] = useState(new Date());
  const [input, setInput] = useState({
    name: '',
    surnname: '',
    email: '',
    houers: '',
    adults: '',
    kids: ''
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  };

  return (
    <div>
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
            <StyledInputNameSurnameFields>
              <TextField 
                color='textFieldText'
                id="name" 
                label="Name please"   
                variant="outlined" 
                value={input.name}
                name="name"
                onChange={handleChange}
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
                id="sruname" 
                label="Surname please"   
                variant="outlined" 
                value={input.surname}
                name="surname"
                onChange={handleChange}
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
            </StyledInputNameSurnameFields>
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
                {/* <DatePicker
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
                /> */}
                <DatePicker 
                  minDate={new Date()}
                  className="bg-dark"
                  value={date}
                  name="date"
                  onChange={(newDate) => setDate(newDate)}
                  style={{
                    backgroundColor: "#111827",
                    color: '#fff',
                    height: "24px",
                    fontSize: "1rem",
                    border: '1.8px #fff solid',
                    padding: "1rem",
                    width: '100%'
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
    </div>
  )
}

export default BookHub;