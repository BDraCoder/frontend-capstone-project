import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utilities/FakeAPI';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const today = new Date();
    const initializeTimes = ()=> {
        return fetchAPI(today);
    }
    const updateTimes = (state, action) => {
        return fetchAPI(new Date(action.date));
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const changeDate = (whichDate) => {
        dispatch({date:whichDate});
    }

    const navigate = useNavigate();
    const submitForm = (formdata) =>{
        console.log('form data', formdata);
        if (submitAPI(formdata))
            navigate('/confirm-booking');
    }

    return (<main>
        <section style={{ width: '53.75rem', margin: '0 auto' }}>
            <h1>Booking</h1>
            <p></p>
            <BookingForm timeSlots={availableTimes} changeDateHandle={changeDate} onSubmit={submitForm} />
        </section>
    </main>);
}
export default Booking;