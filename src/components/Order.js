import React from 'react';
import { motion } from 'framer-motion';

const continerVarient = {
  hidden: {
    x: '250vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    },
  },
};

const nextVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={continerVarient}
      className="container order"
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={nextVarient}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={nextVarient}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
