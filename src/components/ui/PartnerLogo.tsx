import { motion } from "framer-motion";

interface PartnerCardProps {
  id: string | number;
  image: string;
  link: string;
  variants?: any;
}

const PartnerCard = ({ id, image, link, variants }: PartnerCardProps) => {
  return (
    <motion.a
      key={id}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
    >
      <img src={image} alt={`Partner ${id}`} className="object-contain" />
    </motion.a>
  );
};

export default PartnerCard;
