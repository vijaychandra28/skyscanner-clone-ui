import React from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import CalendarCard from './components/CalendarCard';
import AnimatedBackground from './components/AnimatedBackground';

import './App.scss';

export default function App() {
  return (
    <motion.div
      className="app-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatedBackground />

      <Header />

      <main className="main-container">
        <CalendarCard />
      </main>
    </motion.div>
  );
}