import React from 'react';
import { Avatar } from '../components/ui/avatar';
import { Text, Heading, Card, HStack, VStack } from "@chakra-ui/react";
import * as FakeAPI from '../utilities/FakeAPI';
import { LuStar } from 'react-icons/lu'

const Testimonial = () => {
    const [reviewData, setData] = React.useState('');
    React.useEffect(() => {
        FakeAPI.getTestimonial().then(response => {
            console.log("response", response);
            setData(response);
        });
    }, []);
    return (
        <VStack justifyContent='center' gap='5rem' width='100%'>
            <Heading size='4xl' fontFamily='Markazi Text'>Testimonials</Heading>
            <HStack gap={5} wrap='wrap' width='100%'>
                {reviewData ? reviewData.map((guest, index) => (
                    <Card.Root width='12.5rem' height='11.5rem'
                        variant='subtle' key={index}
                        style={{ padding: '1.5rem' }}>
                        <VStack alignItems='flex-start' gap={3}>
                            <HStack><Text fontWeight='bold'>Rating: {guest.rate}</Text><LuStar /></HStack>
                            <HStack gap={4}>
                                <Avatar size='xl' shape='square' src={guest.ava} />
                                <Text fontWeight='bold'>{guest.name}</Text>
                            </HStack>
                            <Card.Description>{guest.desc}</Card.Description>
                        </VStack>
                    </Card.Root>
                )) :
                    <Heading size='4xl' fontFamily='Markazi Text'>Loading....</Heading>
                }
            </HStack>
        </VStack>
    );
}

export default Testimonial;