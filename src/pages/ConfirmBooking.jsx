import { Box, Button, Center, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { MdDone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ConfirmBooking = () => {
    const navigator = useNavigate();

    return (
        <section>
            <Center flexDirection='column' gap={10} py={12}
                borderTopWidth="2px" borderBottomWidth="2px"
            >
                <Box>
                    <Heading size='4xl' fontFamily='Markazi Text'>
                        Reservation finished!
                    </Heading>
                    <Center>
                    <Icon
                        fontSize="3rem" color="green"
                    >
                        <MdDone />
                    </Icon>
                    </Center>
                    <Text color='#333'>
                        Thank for choosing our restaurant.
                    </Text>
                </Box>

                <Button size='lg' colorPalette='yellow' px='2rem'
                    onClick={()=>navigator('/')}
                >
                    Back to Home page
                </Button>
            </Center>
        </section>
    );
}
export default ConfirmBooking;