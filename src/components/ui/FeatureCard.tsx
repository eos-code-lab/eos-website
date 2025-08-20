// FeatureCard.tsx
import { motion } from "framer-motion";

interface FeatureCardProps {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  variants?: any;
}

const FeatureCard = ({
  id,
  icon,
  title,
  description,
  variants,
}: FeatureCardProps) => {
  return (
    <motion.div key={id} className="text-center" variants={variants}>
      <div className="flex-shrink-0 mr-4 green">
        <span className="mt-1">
          <i className={`fas ${icon} fa-2x`}></i>
        </span>
        <div>
          <h4 className="text-center font-bold text-black">{title}</h4>
          <p className="text-sm text-stone-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
