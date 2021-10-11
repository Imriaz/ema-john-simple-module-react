import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />
                <br />

                <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                <input placeholder='Address' {...register("address", { required: true })} />
                <br />
                <input placeholder='City' {...register("city", { required: true })} />
                <br />
                <input placeholder='Phone' {...register("phone", { required: true })} />
                <br />

                {errors.email && <span>This field is required</span>}
                <br />

                <input type="submit" />
                <br />
            </form>
        </div>
    );
};

export default Shipping;