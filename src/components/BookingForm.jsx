import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//const formatDate = (date) => date.toLocaleDateString('en-US');
const formatDate = (date) => date.toLocaleDateString('en-GB').split('/').reverse().join('-');

const BookingForm = ({ timeSlots, changeDateHandle, onSubmit }) => {
   const today = new Date();
   const validation = Yup.object().shape({
      date: Yup.date().required('Date is required').min(today, "Choosing a date in the future"),
   });
   const onChange = e => {
      if (e.target.id === 'res-date') {
         changeDateHandle(e.target.value);
      }
   };
   const formik = useFormik({
      initialValues: {
         date: formatDate(today),
         time: timeSlots[0],
         guests: 1,
         occasion: 'anniversary',
      },
      validationSchema: validation,
      onSubmit: values => {
         onSubmit(values);
         // alert(JSON.stringify(values, null, 2));
      },
   });
   return (
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
         onSubmit={formik.handleSubmit}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" name='date' {...formik.getFieldProps('date')} 
            onChange={(e)=>{
               formik.handleChange(e);
               onChange(e);
            }} />
         {formik.errors.date ? <div>{formik.errors.date}</div> : null}
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time"  {...formik.getFieldProps('time')} >
            {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
         </select>
         <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests"
            {...formik.getFieldProps('guests')}
         />

         <label htmlFor="occasion">Occasion</label>
         <select id="occasion" name="occasion"
            {...formik.getFieldProps('occasion')}
         >
            <option value={'birthday'}>Birthday</option>
            <option value={'anniversary'}>Anniversary</option>
         </select>
         <input type="submit" value="Make Your reservation" />
      </form>
   );
}

export default BookingForm;