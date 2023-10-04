// import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
// import { motion } from 'framer-motion';
// import SocialMediaIcons from '../components/SocialMediaIcons';
interface LandingProps {
    setSelectedPage: (page: string) => void;
}
const Landing: React.FC<LandingProps> = ({ setSelectedPage }) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
    return (
        <section id="home" className="md:flex md:h-full md:items-center md:justify-center my-auto ">
            {/* image  */}
            <div className="md:order-2 flex justify-center   z-30">
                {/* //! need to adjust the img and z-index */}
                {isAboveMediumScreen ? (
                    <div className="grid max-w-[50rem] grid-cols-3 ">
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className=" "
                        />
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
                        <img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
						<img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
						<img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
						<img
                            src="../src/assets/profile.png"
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[550px] md:max-w-[550px] "
                        />
						
                    </div>
                ) : (
                    <img
                        src="../src/assets/profile.png"
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[400px] md:max-w-[600px] "
                    />
                )}
            </div>
            {/*//@ main */}
        </section>
    );
};
export default Landing;
//  <div className="z-30 basis-2/5 mt-12 md:mt-32">
//     {/* Heading */}
//     <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//         }}
//     >
//         <p className="text-6xl font-merriweather z-10 text-center md:text-start">
//             
//             Yuxuan
//             <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[20px] before:-top-[70px] before:z-[-1]">
//                 Peng
//             </span>
//         </p>
//         <p className="mt-10 mb-7 text-sm text-center md:text-start">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore et dolore
//             magna aliqua. Ut enim ad minim veniam, quis nostrud
//             exercitation ullamco laboris nisi ut aliquip ex ea
//             commodo consequat.
//         </p>
//     </motion.div>

//     {/* cta  */}

//     <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//         }}
//         className="flex mt-5 justify-center md:justify-start"
//     >
//         <AnchorLink
//             className="bg-gradient-btn text-zinc-50 rounded-[2px] px-7 py-3 font-semibold hover:bg-green hover:text-white transition duration-500"
//             onClick={() => setSelectedPage('contact')}
//             href="#contact"
//         >
//             Contact
//         </AnchorLink>
//         {/* <AnchorLink
//             className="rounded-r-sm bg-gradient-btn py-1 px-1 "
//             onClick={() => setSelectedPage('contact')}
//             href="#contact"
//         >
//             <div className="bg-red hover:text-red transition duration-500 w-full h-full items-center flex justify-center font-merriweather px-10">
//                 talk
//             </div>
//         </AnchorLink> */}
//     </motion.div>

//     <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//         }}
//     >
//         <SocialMediaIcons />
//     </motion.div>
// </div>
