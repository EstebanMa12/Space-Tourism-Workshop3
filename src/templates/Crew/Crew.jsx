// import React from 'react';
// import { Box, Center, Container, Heading, Image, Text } from '@chakra-ui/react';
// import GoogleFonts from 'react-google-fonts';


//   const Crew = () => {
//     const backgroundImageUrl = 'https://res.cloudinary.com/dpc1vrbek/image/upload/v1696612865/Bitmap_tcauwq.jpg'; // Reemplaza 'url_de_tu_imagen.jpg' con la URL de tu imagen de fondo.
  
//     const containerStyle = {
//       backgroundImage: `url(${backgroundImageUrl})`,
//       backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor.
//       backgroundRepeat: 'no-repeat', // Evita que la imagen de fondo se repita.
//       color: 'white', // Color del texto.
//       minHeight: '100vh', // Altura mínima para cubrir la pantalla completa.
//       display: 'flex',
//       flexDirection: 'column',
//     };
//     const numberStyle = {
//       color: 'gray', // Color gris para el número
//       marginRight: '8px', // Espacio entre el número y el título principal
//       fontFamily: 'Barlow Condensed',
//       fontSize: '16px',
//       fontWeight: '400',
//       lineHeight: '19px',
//       letterSpacing: '2.700000047683716px',
//       textAlign: 'center',
//     };
//     const headingStyle = {
//       fontFamily: 'Barlow Condensed',
//       fontSize: '16px',
//       fontWeight: '400',
//       lineHeight: '19px',
//       letterSpacing: '2.700000047683716px',
//       textAlign: 'center',
//       padding: '30px',
      
//     };
  
//   return (
//     <Container>
      
//     <Box style={containerStyle}>
    
//       {/* Título */} <GoogleFonts font= "Barlow Condensed"/>
//       <Box p={4}>
//       <Heading as="h1" textAlign="center" style={headingStyle}>
//             <span style={numberStyle}>02</span>
//             MEET YOUR CREW
//           </Heading>
//       </Box>

//       {/* Espacio para imagen */}
//       <Box>
//         <Center>
//           <Image src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1696467752/Group_5_cuiwvq.png" maxW="100%" maxH="100%" objectFit="contain" />
//         </Center>
//       </Box>

//       {/* Espacio para escribir texto */}
//       <Box p={4}>
//         <Text textAlign="center">Commander Douglas Hurley Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</Text>
//       </Box>
//     </Box>
//     </Container>
//   );
// }

// export default Crew;

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Crew() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Crew;