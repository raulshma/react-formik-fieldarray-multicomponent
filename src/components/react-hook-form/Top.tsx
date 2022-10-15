import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorSummary from '../ErrorSummary';

const formOptions = {
    firstName: { required: { value: true, message: "First Name is required." } },
    lastName: { required: { value: true, message: "Last Name is required." } },
    email: { required: { value: true, message: "Email is required." } }
}

function Top() {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: '1em' }}>
            <code>Top</code>
            <ErrorSummary errors={errors} mode={"FIELD"} />
            <input {...register('firstName', formOptions.firstName)} />
            <input  {...register('lastName', formOptions.lastName)} />
            <input {...register('email', formOptions.email)} />
        </div>
    );
}

export default Top;
