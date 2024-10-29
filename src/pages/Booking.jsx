import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import * as FakeAPI from '../utilities/FakeAPI';
import { useNavigate } from 'react-router-dom';
import { Box, Center, Heading, Text } from '@chakra-ui/react';
import { isInThePast } from '../utilities/time';

const Booking = () => {
    const initializeTimes = () => {
        return FakeAPI.getTimeSlots(new Date());
    }
    const updateTimes = (state, action) => {
        const pickDate = new Date(action.date)
        if (isInThePast(pickDate)) return [];
        return FakeAPI.getTimeSlots(pickDate);
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const changeDate = (whichDate) => {
        dispatch({ date: whichDate });
    }

    const navigate = useNavigate();
    const submitForm = (formdata) => {
        console.log('form data', formdata);
        if (FakeAPI.submit(formdata))
            navigate('/confirm-booking');
    }

    return (
        <section>
            <Center flexDirection='column' gap={10} py={12}
                borderTopWidth="2px" borderBottomWidth="2px"
            >
                <Box>
                    <Heading size='4xl' fontFamily='Markazi Text'>
                        Booking
                    </Heading>
                    <Text color='#333'>Choose your date first. <br />
                        Then spare time slots will be changed by that. <br />
                        Pick your time after changing.
                    </Text>
                </Box>
                <BookingForm timeSlots={availableTimes} changeDateHandle={changeDate} onSubmit={submitForm} />
            </Center>
        </section>
    );
}
export default Booking;