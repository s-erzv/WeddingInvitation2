'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="text-center text-[#4A1C2D] pt-6 mt-10 sm:px-7">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed px-14">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          <br />
          <span className="block mt-2">Kami yang berbahagia,</span>
        </p>
        <h3 className="md:text-heading sm:text-md font-semibold mt-2">Kel. Bapak Suprapto dan Ibu Tuminah &amp; Kel. Bapak Mohammad Diram dan Ibu Sukarsih</h3>
      </motion.div>

      <motion.div
        className="bg-[#FCCFC3] text-white text-sm sm:text-base py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Copyright © 2025 | nupers
      </motion.div>
    </footer>
  );
}
