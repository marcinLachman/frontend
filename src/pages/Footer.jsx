
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Box sx={{ textAlign: 'center', backgroundColor: '#374151', marginTop: '1.5rem'}}>
        <Typography 
          variant="h5" 
          component="div"
          p={1}  
        >
          Copyright ©2023
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer;