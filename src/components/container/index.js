import React from 'react';
import {Container} from '@chakra-ui/react';

const Index = (props) => {
    return (
        <Container {...props} padding={{"lg":'0 45px',"md":'0 35px',"sm":'0 15px'}} maxW={'1400px'}>
            {props.children}
        </Container>
    )
}

export default Index
