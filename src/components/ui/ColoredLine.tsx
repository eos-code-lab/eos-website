// The colored horizontal lines used throughout the site
import { motion } from 'framer-motion';

interface ColorLineProps {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
  animate?: boolean;
  variants?: any;
}

const ColorLine = ({
  color = 'blue-500',
  width = '24',
  height = '1',
  className = '',
  animate = false,
  variants
}: ColorLineProps) => {
  // Construct the Tailwind classes for the line
  const lineClasses = `border-t-4 w-${width} h-${height} ${color} mx-auto my-4 ${className}`;

  // Return either a static div or an animated motion.hr based on the animate prop
  return animate ? (
    <motion.hr 
      className={lineClasses}
      variants={variants}
    />
  ) : (
    <hr className={lineClasses} />
  );
};

export default ColorLine;
