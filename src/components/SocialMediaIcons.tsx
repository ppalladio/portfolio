import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                href="https://www.linkedin.com/in/yuxuanpeng/"
                className="hover:text-cyan-100 transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineLinkedin size={30} />
            </a>
            <a
                href="https://github.com/ppalladio"
                className="hover:opacity-50 hover:text-green transition duration-500"
                target="_blank"
                rel="noreferrer"
            >
                <AiFillGithub size={30} />
            </a>
        </div>
    );
};
export default SocialMediaIcons;
