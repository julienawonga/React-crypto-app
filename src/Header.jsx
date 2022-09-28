import { Box, Container, Input, Button} from '@chakra-ui/react'
import React from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


export default function Header(props) {
  return (
    <Box>
        <Container py='10' display='flex' justifyContent='space-between' alignItem='center'>
            <Input 
                placeholder='Search a coin' 
                size='lg' 
                variant='flushed' 
                color={props.isDarkMode ? 'white' : 'black'}
                onChange={(e) => props.setSearch(e.target.value)}
            />
            <Button 
                variant='solid'
                onClick={() => props.setIsDarkMode(!props.isDarkMode)}
            >
                {props.isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
        </Container>
    </Box>
  )
}
