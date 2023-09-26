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
                    className="basis-1/2 mt-10 md:mt-0 flex justify-center"
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
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action=""
                        method="POST"
                    >
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="Name"
                            {...(register('name'),
                            { required: true, maxLength: 100 })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1 capitalize">
                                {errors.name.type === 'required' &&
                                    'this field is required'}
                                {errors.name.type === 'maxLength' &&
                                    'max length must be 100 characters or less'}
                            </p>
                        )}
                        <input
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="Email"
                            {...(register('email'),
                            {
                                required: true,
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1 capitalize">
                                {errors.email.type === 'required' &&
                                    'this field is required'}
                                {errors.email.type === 'pattern' &&
                                    'invalid email address'}
                            </p>
                        )}
                        <textarea
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-10 focus:bg-black"
                            type="text"
                            placeholder="Message"
                            rows={4}
                            cols={50}
                            textLength={1}
                            {...(register('message'),
                            { required: false, maxLength: 2000 })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1 capitalize">
                                {errors.message.type === 'required' &&
                                    'this field is required'}
                                {errors.message.type === 'maxLength' &&
                                    'max length must be 2000 characters or less'}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
