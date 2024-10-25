import React from 'react';
import { Field } from './ui/field';
import { Button, Input, Text, VStack } from "@chakra-ui/react"
import {
   NativeSelectField,
   NativeSelectRoot,
} from '../components/ui/native-select'

import { useFormik } from 'formik';
import * as Yup from 'yup';

const formatDate = (date) => date.toLocaleDateString('en-GB').split('/').reverse().join('-');

const FormLabel = ({ text }) => {
   return <Text fontSize='1rem'>{text}</Text>
}

const BookingForm = ({ timeSlots, changeDateHandle, onSubmit }) => {
   const today = new Date();
   const validation = Yup.object().shape({
      date: Yup.date().required('Date is required').min(today, "Choosing a date in the future"),
      time: Yup.string().required('Required'),
   });
   const formik = useFormik({
      initialValues: {
         date: formatDate(today),
         time: '',
         guests: 1,
         occasion: 'birthday',
      },
      validationSchema: validation,
      onSubmit: values => {
         onSubmit(values);
      },
   });
   return (
      <form style={{ display: 'grid', minWidth: '20rem', gap: '2rem' }}
         onSubmit={formik.handleSubmit}>
         <Field label={<FormLabel text='Choose date' />} required
            errorText={formik.errors.date} invalid={!!formik.errors.date}>
            <Input type='date' name='date' size='lg' px={3}
               {...formik.getFieldProps('date')}
               onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue('time','');
                  changeDateHandle(e.target.value);
               }} />
         </Field>
         <Field label={<FormLabel text='Choose time' />} required
            errorText={formik.errors.time} invalid={!!formik.errors.time}>
            <NativeSelectRoot size='lg' name='time'>
               <NativeSelectField px={3}
                  {...formik.getFieldProps('time')}
               >
                  <option value='' disabled>Pick your reservation time</option>
                  {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
               </NativeSelectField>
            </NativeSelectRoot>
         </Field>
         <Field label={<FormLabel text='Number of guests' />} >
            <Input type='number' size='lg' min="1" max="10" px={3}
               {...formik.getFieldProps('guests')} />
         </Field>
         <Field label={<FormLabel text='Occasion' />}>
            <NativeSelectRoot size='lg' name='time'>
               <NativeSelectField px={3}
                  {...formik.getFieldProps('occasion')}
               >
                  <option value={'birthday'}>Birthday</option>
                  <option value={'anniversary'}>Anniversary</option>
                  <option value={'other'}>Other</option>
               </NativeSelectField>
            </NativeSelectRoot>
         </Field>
         <Button type="submit" size='lg' colorPalette='yellow'>
            Make Your reservation
         </Button>
      </form>
   );
}

export default BookingForm;