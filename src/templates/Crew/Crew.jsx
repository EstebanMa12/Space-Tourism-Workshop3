
import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";

const cards = [
  {
    title: "Design Projects 1",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696798716/Group_5_vpbdk1.png",
  },
  {
    title: "Design Projects 2",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_1_jobc9l.png",
  },
  {
    title: "Design Projects 3",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_2_c6bhdn.png",
  },
  {
    title: "Design Projects 4",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_3_utcz5p.png",

  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingStyle = {
    fontFamily: 'Barlow Condensed',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '2.700000047683716px',
    textAlign: 'center',
    padding: '30px',
    
  };
  const numberStyle = {
    color: 'gray', // Color gris para el número
    marginRight: '8px', // Espacio entre el número y el título principal
    fontFamily: 'Barlow Condensed',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '2.700000047683716px',
    textAlign: 'center',
  };
  const backgroundImageUrl = 'https://res.cloudinary.com/dpc1vrbek/image/upload/v1696612865/Bitmap_tcauwq.jpg'; // Reemplaza 'url_de_tu_imagen.jpg' con la URL de tu imagen de fondo.
  
    const containerStyle = {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor.
      backgroundRepeat: 'no-repeat', // Evita que la imagen de fondo se repita.
      color: 'white', // Color del texto.
      minHeight: '100vh', // Altura mínima para cubrir la pantalla completa.
      display: 'flex',
      flexDirection: 'column',
    };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container style={containerStyle}>
      <Heading as="h1" textAlign="center" style={headingStyle}>
        <span style={numberStyle}>02</span>
        MEET YOUR CREW
      </Heading>
      <Box position="relative" height="300px" width="100%" overflow="hidden">
        {/* Carousel */}
        <Stack
          direction="horizontal"
          spacing={0}
          width={`${cards.length * 100}%`}
          transform={`translateX(-${(currentIndex / cards.length) * 100}%)`}
          transition="transform 0.5s ease-in-out"
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              width="100%"
              height="300px"
              background={`url(${card.image}) no-repeat`}
              backgroundPosition={"center"}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent="center"
            >
            </Box>
          ))}
        </Stack>
      </Box>
     {/* Indicadores */}
     <Center bottom="20px" width="100%" zIndex={2}>
        <HStack spacing={2}>
          {cards.map((_, index) => (
            <Button
              key={index}
              onClick={() => handleDotClick(index)}
              variant={currentIndex === index ? "teal" : "outline"}
              size="xs"
              width={"10px"}
              height={"10px"}
              padding={0}
            ></Button>
          ))}
        </HStack>
      </Center>

      <Box position="relative" height="300px" width="100%" overflow="hidden">
        {/* Carousel */}
        <Stack
          direction="horizontal"
          spacing={0}
          width={`${cards.length * 100}%`}
          transform={`translateX(-${(currentIndex / cards.length) * 100}%)`}
          transition="transform 0.5s ease-in-out"
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              width="100%"
              height="300px"
              backgroundPosition={"center"}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent="center"
            >
              <Container size="container.lg" textAlign="center">
                <Stack spacing={6}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Stack>
      </Box>
      </Container>
  );
}