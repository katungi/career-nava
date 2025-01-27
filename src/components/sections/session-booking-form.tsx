'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { PhoneInput } from '../ui/phone-input';

const BookingForm = ({ onSubmit, title }: any) => {
  const [number, setNumber] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    data.number = number.replace('+', '');
    onSubmit(data);
  };

  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <div className="space-y-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Briefly describe your scholarship needs below.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Enter a description"
            {...register('description')}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="start-time">Start Time</Label>
            <Input
              id="start-time"
              type="datetime-local"
              {...register('startTime', { required: true })}
            />
            {errors.startTime && (
              <span className="text-red-500">Start Time is required</span>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="end-time">End Time</Label>
            <Input
              id="end-time"
              type="datetime-local"
              {...register('endTime', { required: true })}
            />
            {errors.endTime && (
              <span className="text-red-500">End Time is required</span>
            )}
          </div>
          <div className="w-full space-y-1">
            <Label htmlFor="number">Mobile Number (For Payment)</Label>
            <PhoneInput
              id="number"
              {...register('number', { required: true })}
              defaultCountry="KE"
              onChange={(value: any) => {
                setNumber(value);
              }}
              className="w-[420px]"
            />
            {errors.number && (
              <span className="text-red-500">
                Number is required for payments
              </span>
            )}
          </div>
        </div>
        <Button variant={'default'} className="w-full" type="submit">
          Proceed to payment
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
