import { Card, CardContent, CardMedia, Divider, IconButton, Link, Stack, Typography, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CountryType } from '../../../types/CountryType';
import { useNavigate } from 'react-router-dom';

type CountryDescCardProps = {
    country: CountryType;
};

export const CountryDescCard: React.FC<CountryDescCardProps> = ({ country }) => {
    const { name, capital, currencies: currenciesTemp, languages: languagesTemp, borders: bordersArr, maps, population } = country;
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const navigate = useNavigate();

    const imageWidth = isDesktop ? 250 : '100%';

    const goBack = () => navigate(-1);

    const currencies = Object.entries(currenciesTemp).map((entry) => {
        const [key, value] = entry;

        return value;
    });

    const languages = Object.entries(languagesTemp).map((entry) => {
        const [key, value] = entry;

        return value;
    });

    const borders =
        bordersArr &&
        bordersArr.map((border, index) => (
            <Typography variant="h5" key={index}>
                {border}
            </Typography>
        ));

    const formatPopulation = population.toLocaleString();

    return (
        <>
            <IconButton sx={{ position: 'absolute', left: 16, top: 16 }} onClick={goBack}>
                <ArrowBackIosIcon />
            </IconButton>
            <Card sx={{ width: 'fit-content' }}>
                <Stack flexDirection={isDesktop ? 'row' : 'column'}>
                    <CardMedia
                        sx={{ height: 200, width: imageWidth }}
                        component="img"
                        image={country.flags.png}
                        title={country.flags.alt}
                        draggable={false}
                    />
                    <CardContent>
                        <Typography variant="h5">Official name: {name.official}</Typography>
                        <Divider />
                        <Typography variant="h5">Common name: {name.common}</Typography>
                        <Divider />
                        <Typography variant="h5">Capital: {capital}</Typography>
                        <Divider />
                        <Typography variant="h5">
                            Currencies: {currencies[0].name} ({currencies[0].symbol})
                        </Typography>
                        <Divider />
                        <Typography variant="h5">Languages: {languages[0]}</Typography>
                        <Divider />
                        {maps && (
                            <>
                                <Typography variant="h5">
                                    Maps:{' '}
                                    <Link href={maps.googleMaps} target="_blank">
                                        Open in google maps
                                    </Link>
                                </Typography>
                                <Divider />
                            </>
                        )}
                        {borders && (
                            <>
                                <Typography variant="h5">Borders:</Typography>
                                <Stack flexDirection="column" sx={{ maxHeight: 150, overflowY: 'auto' }}>
                                    {borders}
                                </Stack>
                                <Divider />
                            </>
                        )}
                        <Typography variant="h5">Population: {formatPopulation}</Typography>
                    </CardContent>
                </Stack>
            </Card>
        </>
    );
};
