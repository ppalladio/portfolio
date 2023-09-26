import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Contact = ({}) => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    return (
        <section id="contact" className="py-48">
            {/* heading */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div>
                    <p className="font-merriweather flex justify-center font-semibold text-4xl ">
                        CONTACT
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="mx-auto w-3/4" />
                    </div>
                </div>
            </motion.div>

            {/* form */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="md:w-1/3 text-center md:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img
                        src="../../src/assets/contact-sample.jpg"
                        alt="contact"
                    />
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
