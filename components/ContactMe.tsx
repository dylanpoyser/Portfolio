import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

export default function ContactMe({}: Props) {

  const { register, handleSubmit, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href= `mailto:dylanpoysertech@gmail?subject=${formData.subject}&body=Hello, my name is ${formData.name}.
    ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>

        <div className="flex flex-col space-y-5 sm:space-y-10">
            <h4 className="text-base sm:text-4xl font-semibold text-center"
            >
                Need a fast learner?  <span className="underline decoration-[#0a98f7]/50">Get in touch!</span>
            </h4>

            <div className="space-y-5 sm:space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#0a98f7] h-7 w-7 animate-pulse" />
                    <p className="text-sm sm:text-2xl">+1(203)-767-0583</p>
                </div>
                
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#0a98f7] h-7 w-7 animate-pulse" />
                    <p className="text-sm sm:text-2xl">New York, New York</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#0a98f7] h-7 w-7 animate-pulse" />
                    <p className="text-sm sm:text-2xl">dylanpoysertech@gmail.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 sm:w-fit sm:mx-auto">
                <div className="sm:flex sm:space-x-2">
                    <input {...register("name")} className="w-full contactInput" placeholder="Name" type="text" />
                    <input {...register("email")} className="w-full contactInput" placeholder="Email" type="email" />
                </div>

                <input {...register("subject")} className="contactInput" placeholder="Subject" type="text" />

                <textarea {...register("message")} className="contactInput" placeholder="Message"/>
                <button type="submit" className="bg-[#0a98f7] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}