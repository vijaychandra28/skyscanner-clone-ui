import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationCard() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  return (
    <motion.div
      className="card"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">Search flights ✈️</h1>
      <p className="subtitle">Find the best deals for your journey</p>

      {/* FROM */}
      <input
        className="input"
        placeholder="From (e.g. Hyderabad)"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      {/* TO */}
      <input
        className="input"
        placeholder="To (e.g. Delhi)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      {/* DATE */}
      <input
        type="date"
        className="date-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* PASSENGERS */}
      <div className="row">
        <label>Passengers</label>
        <select
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="select"
        >
          <option value={1}>1 Adult</option>
          <option value={2}>2 Adults</option>
          <option value={3}>3 Adults</option>
          <option value={4}>4 Adults</option>
        </select>
      </div>

      {/* SEARCH BUTTON */}
      <button
        className={`btn ${(from && to && date) ? "active" : ""}`}
        disabled={!(from && to && date)}
      >
        Search flights
      </button>
    </motion.div>
  );
}