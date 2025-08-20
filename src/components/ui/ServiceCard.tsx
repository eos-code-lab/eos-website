import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  id: string | number;
  image: string;
  title: string;
  description: string;
  color?: string;
  variants?: any;
}

const ServiceCard = ({
  id,
  image,
  title,
  description,
  color = "",
  variants,
}: ServiceCardProps) => {
  return (
    <motion.div
      key={id}
      className="flex flex-col items-center text-stone-500"
      variants={variants}
    >
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="text-center">
        <h3 className={`font-bold text-2xl ${color}`}>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
