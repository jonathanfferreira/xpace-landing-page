import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
    return (
        <AnimatePresence>
            <motion.a
                href="https://wa.me/554791700812"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1.5
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-shadow duration-300 group"
                aria-label="Fale conosco no WhatsApp"
            >
                <svg
                    viewBox="0 0 32 32"
                    className="w-8 h-8 md:w-9 md:h-9 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.928 0.908 5.65 2.479 7.947l-2.456 8.018 8.29-2.438C12.872 30.56 14.394 31 16 31c7.732 0 14-6.268 14-14S23.732 2 16 2z m0 26.5c-2.456 0-4.784-0.811-6.685-2.196l-0.479-0.349-4.881 1.436 1.446-4.721-0.359-0.5C3.395 20.306 2.5 18.239 2.5 16c0-7.444 6.056-13.5 13.5-13.5 7.444 0 13.5 6.056 13.5 13.5S23.444 28.5 16 28.5z m7.094-10.153c-0.388-0.194-2.296-1.132-2.651-1.261-0.355-0.129-0.614-0.194-0.873 0.194-0.259 0.388-1.002 1.261-1.228 1.519-0.226 0.259-0.453 0.291-0.841 0.097-0.388-0.194-1.638-0.603-3.12-1.925-1.155-1.03-1.935-2.303-2.161-2.691-0.226-0.388-0.024-0.598 0.17-0.792 0.177-0.177 0.388-0.453 0.582-0.679 0.194-0.226 0.259-0.388 0.388-0.647 0.129-0.259 0.065-0.485-0.032-0.679-0.097-0.194-0.873-2.103-1.196-2.879-0.315-0.756-0.636-0.653-0.873-0.665-0.224-0.011-0.48-0.011-0.736-0.011-0.256 0-0.672 0.096-1.023 0.481-0.351 0.385-1.343 1.312-1.343 3.2 0 1.888 1.375 3.712 1.566 3.968 0.192 0.256 2.706 4.133 6.556 5.797 0.916 0.396 1.63 0.632 2.183 0.81 0.916 0.295 1.749 0.253 2.406 0.155 0.738-0.11 2.296-0.938 2.619-1.844 0.323-0.906 0.323-1.682 0.226-1.844-0.097-0.162-0.356-0.259-0.744-0.453z"></path>
                </svg>

                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
            </motion.a>
        </AnimatePresence>
    );
};
