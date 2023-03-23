import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const IMG_URL = 'https://glorious-lamb-train.cyclic.app/static/images';
// const IMG_URL = 'https://backendhub-production.up.railway.app/static/images';
// const IMG_URL = 'http://localhost:5000/static/images';

const DisplayHubDetails = ({ hubs }) => {

  return (

    <section id='hubs'>
      <Card sx={{ backgroundColor: '#374151' }}>
        <Link to={`/hubdetails/${hubs._id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${IMG_URL}/images-${Object.values(hubs.image[0])}`}
              // image={`${IMG_URL}/${hubs.image[0]['FileName']}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hubs.name}
              </Typography>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-around',
                alignItems: 'center',
                gap: 2
              }}>
                <Typography variant="body2" color='#9CA3AF'>
                  {hubs.content.substring(0, 100)} (...)
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Typography variant="h4">
                    {hubs.price}
                  </Typography>
                  <Typography variant="h5">
                    &#8364;
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </section>

  )
}

export default DisplayHubDetails;