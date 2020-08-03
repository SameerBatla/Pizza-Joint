import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.2,
    },
  },
};

const nextVarient = {
  hidden: {
    x: '-250vw',
  },
  visible: {
    x: 0,

    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      variants={continerVarient}
      className="base container"
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: 'yellow', originX: 0 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
        variants={nextVarient}
          className="next"
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 8px rgba(255,255,255)',
                boxShadow: '0px 0px 8px rgba(255,255,255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
