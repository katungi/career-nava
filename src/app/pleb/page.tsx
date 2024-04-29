"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { api } from "~/trpc/react";
import { z } from "zod";

const Page = () => {
  const res = api.daraja.stkPush.useMutation({
    onError: (err) => {
      console.log(err.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{
    amount: string;
    phoneNumber: string;
  }>({});
  const onSubmit = async (data: { amount: string; phoneNumber: string }) => {
    const stk = res.mutate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>amount</label>
          <input type="text" placeholder="Amount" {...register("amount")} />
        </div>
        <div>
          <label>tillnumber</label>
          <input
            type="text"
            placeholder="phone "
            {...register("phoneNumber")}
          />
        </div>
        <button type="submit">{res.isPending ? "paying" : "pay now"}</button>
      </form>
    </div>
  );
};

export default Page;
