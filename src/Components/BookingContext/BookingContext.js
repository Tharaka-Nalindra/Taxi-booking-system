import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [arrival, setArrival] = useState(""); 
  const [destination, setDestination] = useState(""); 
  const [members, setMembers] = useState("");
  const [contact, setContact] = useState(""); 
  const [vehicle, setVehicle] = useState(""); 
  const [date, setSelectedDate] = useState(""); 
  const [time, setSelectedTime] = useState(""); 


  return (
    <BookingContext.Provider value={{ arrival, setArrival, destination, setDestination, members, setMembers, contact, setContact, vehicle, setVehicle, date, setSelectedDate, time, setSelectedTime }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
