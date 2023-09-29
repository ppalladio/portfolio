import { motion } from 'framer-motion';
const pictureVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
interface LandingPicsProps {
    title: string;
}
const LandingPics: React.FC<LandingPicsProps> = ({ title }) => {
    const projectTitle = title.split(' ').join('-').toLocaleLowerCase();
    // const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    return (
        <motion.div
            variants={pictureVariant}
            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] relative"
        >
            <img src={`./src/assets/${projectTitle}.png`} alt={projectTitle} />
        </motion.div>
    );
};
export default LandingPics;
