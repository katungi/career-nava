"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const BookingForm = ({ onSubmit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <div className="mx-auto h-full max-w-md space-y-4  p-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Book a Session</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form to book your sessionn.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter a title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="min-h-[100px]"
            id="description"
            placeholder="Enter a description"
            {...register("description")}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="start-time">Start Time</Label>
            <Input
              id="start-time"
              type="datetime-local"
              {...register("startTime", { required: true })}
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
              {...register("endTime", { required: true })}
            />
            {errors.endTime && (
              <span className="text-red-500">End Time is required</span>
            )}
          </div>
        </div>
        <Button variant={"default"} className="w-full" type="submit">
          Proceed to payment
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
