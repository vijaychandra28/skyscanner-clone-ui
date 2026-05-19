import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <motion.div
      className="calendar-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="calendar-title">Select Your Flight Date</h2>

      <Calendar onChange={setDate} value={date} />

      <div className="selected-date">
        Selected: {date.toDateString()}
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="continue-btn"
      >
        Continue
      </motion.button>
    </motion.div>
  );
}