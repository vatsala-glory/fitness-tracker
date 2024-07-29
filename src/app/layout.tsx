'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [startDate, setStartDate] = useState(new Date());

   //grabs an array of all the workout dates
   const [exerciseDates, setExerciseDates] = useState([]);
   //displays an array of unique dates only
   const uniq = [...exerciseDates];

  const handleDateChange : any = (date: Date) => setStartDate(date);

  const DateButton = ({ value }:{value?:string}) => (
    <p className="z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav
            selectedDate={startDate}
            handleDateChange={handleDateChange}
            highlightDates={uniq?.map((date) => new Date(date))} //maps the uniq array according to desired output
          />
     <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            name="startDate"
            dateFormat="PPPP"
            closeOnScroll={true}
            customInput={<DateButton />}
            highlightDates={uniq?.map((date) => new Date(date))}
          />
    {children}
    </body>
    </html>
  );
}
