import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CountryType } from '../../../types/CountryType';

type CountryCardProps = {
    country: CountryType;
};

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery('(min-width:600px)');

    const width = isDesktop ? 250 : '100%';

    const handleNavigate = () => {
        navigate(`/${country.name.official.replaceAll(' ', '_')}`);
    };

    return (
        <Card sx={{ width: width }}>
            <CardActionArea sx={{ height: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }} onClick={handleNavigate}>
                <CardMedia component="img" image={country.flags.png} alt={country.flags.alt} height={150} draggable={false} />
                <CardContent>
                    <Typography variant="h5">{country.name.official}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
