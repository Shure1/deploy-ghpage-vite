
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const CardUser = ({char}) => {
    const {name, house, species, image} = char;
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt={`foto de ${name}`}
        height="300"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {house}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {species}
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default CardUser