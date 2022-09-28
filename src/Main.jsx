import React from 'react'
import { Box } from '@chakra-ui/react';
import Card from './Card';

export default function Main(props) {

    return (
        <Box display='flex' flexWrap='wrap' justifyContent='center' alignItem='center'>
            {
                props.coins.map(coin => (<Card data={coin} />))
            }
        </Box>
  )
}
