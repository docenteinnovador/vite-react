import React from "react";
import { motion } from "framer-motion";

const Contacto: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 mt-24 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACTO
      </motion.h1>

      
      <motion.p
        className="mb-4 text-center text-gray-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
      </motion.p>

     
      <motion.ul
        className="pl-6 text-gray-700 list-disc"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, 
            },
          },
        }}
      >
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          Correo electrónico: jorcornejo3777@gmail.com
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Teléfono: 0983036256
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Dirección: pronto disponible
        </motion.li>
      </motion.ul>

      
      <motion.p
        className="mt-4 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Estamos dispuestos a ayudarte en lo que necesites.
      </motion.p>
    </motion.div>
  );
};

export default Contacto;
