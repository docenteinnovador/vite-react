import React from "react";
import { motion } from "framer-motion";

const Contacto: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-20 mt-24 space-y-12 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Título */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACTO
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="max-w-2xl text-lg text-center text-gray-700 md:text-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. Nuestro equipo está listo para asistirte.
      </motion.p>

      {/* Lista de contacto */}
      <motion.ul
        className="flex flex-col items-start gap-4 pl-6 text-gray-800 list-disc"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.li
          className="transition-all cursor-pointer hover:text-blue-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          📧 Correo electrónico: jorcornejo3777@gmail.com
        </motion.li>
        <motion.li
          className="transition-all cursor-pointer hover:text-green-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          📱 Teléfono: 0983036256
        </motion.li>
        <motion.li
          className="transition-all cursor-pointer hover:text-purple-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          🏠 Dirección: pronto disponible
        </motion.li>
      </motion.ul>

      {/* Mensaje final */}
      <motion.p
        className="mt-6 text-lg font-medium text-center text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Estamos dispuestos a ayudarte en lo que necesites. ¡Contáctanos y conversemos sobre tus ideas!
      </motion.p>
    </motion.div>
  );
};

export default Contacto;
