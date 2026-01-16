"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xaqqqnjo");
  if (state.succeeded) {
    return <p className="text-2xl text-center">Your Message Has Been Sent!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-4 gap-3 items-center"
    >
      <div className="flex flex-row justify-start items-center gap-5">
        <label className="text-lg w-[30%]" htmlFor="email">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="p-3 border rounded-md w-[60%]"
          required
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="flex flex-row justify-start gap-5">
        <label className="text-lg w-[30%]" htmlFor="message">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="p-3 border rounded-md w-[60%]"
          required
        />
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="hover:cursor-pointer disabled:hover:cursor-default rounded-2xl border border-width-2 w-[20%] bg-amber-200 dark:bg-amber-800 disabled:bg-transparent disabled:border-neutral-200 disabled:text-neutral-200 dark:disabled:border-neutral-800 dark:disabled:text-neutral-800"
      >
        Submit
      </button>
    </form>
  );
}
