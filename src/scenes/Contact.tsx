import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
const Contact = () => {
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-center w-full"
            >
                <div>
                    <p className="font-merriweather font-semibold text-4xl">
                        <span className="text-green">CONTACT ME</span> TO GET
                        STARTED
                    </p>
                    <div className="flex md:justify-center my-5">
                        <LineGradient width="w-1/2" />
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
                        src="/images/contact-sample.jpg"
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
                        method="POST"
                        action="https://formsubmit.co/51b153074d11aa68cd03a0e9778a15d4"
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
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.toString(),
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
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-10 focus:bg-gradient-btn"
                            inputMode="text"
                            placeholder="Message"
                            rows={4}
                            cols={50}
                            {...(register('message'),
                            { required: false, maxLength: 2000, minLength: 1 })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1 capitalize">
                                {errors.message.type === 'required' &&
                                    'this field is required'}
                                {errors.message.type === 'maxLength' &&
                                    'max length must be 2000 characters or less'}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="bg-gradient-blue font-semibold px-5 py-1 rounded-[2px] capitalize text-white mt-5 hover:bg-green hover:text-white transition duration-500"
                        >
                            send
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
