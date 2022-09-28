import React from 'react'
import { Box, Container, Image, Text} from '@chakra-ui/react'
import './style.css'

export default function Card(props) {

    const { icon, name, symbol, price, priceChange1h } = props.data;

    console.log(props);
    return (
        <Box 
            width={{base:'200px', sm: '150px', md: '200px'}} 
            height={{base: '200px', sm:'150px', md: '200px'}} 
            bg='#011627'
            m={2}
            rounded='lg'
            shadow='xl'
            textColor='white'
            className='card'
        >
        <Container 
            display='flex' 
            flexDirection='column'
            justifyContent='center' 
            alignItem='center'
            textAlign='center'
            pt={2}
            >
            <Image 
                boxSize='40px'
                src={icon}
            />
            <Text
                fontSize={{base: '12px', sm: '15px', md: '18px'}}
            >
                {name} ({symbol})
            </Text>
            <Text
                fontSize='15px'
            >
                Price: ${price.toFixed(5)}
            </Text>
            <Text 
                fontSize={{base: '15px', sm: '15px', md: '20px'}}
            >
                Last Hours : <Text  textColor={priceChange1h>0 ? 'green.500' : 'red.500'}>{priceChange1h}</Text>
            </Text>
        </Container>
    </Box>
    )
}
