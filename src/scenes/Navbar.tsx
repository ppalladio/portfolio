import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Link from '../components/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
interface NavBarProps {
    isTopOfPage: boolean;
    selectedPage: string;
    setSelectedPage: (page: string) => void;
}

const Navbar: React.FC<NavBarProps> = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage,
}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-red';
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6}`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-merriweather text-3xl font-bold ">FC</h4>
                {/* desktop nav */}
                {isDesktop ? (
                    <div className="flex justify-between  gap-16 font-merriweather text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : !isMenuToggled ? (
                    <button
                        style={{
                            color: 'white',
                            background: '#DE6378',
                            padding: '10px',
                            borderRadius: '100%',
                        }}
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <AiOutlineMenu size={20} />
                    </button>
                ) : (
                    <button
                        style={{
                            color: 'white',
                            background: '#DE6378',
                            padding: '10px',
                            borderRadius: '100%',
                        }}
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <AiOutlineClose size={20} />
                    </button>
                )}
                {/*// @ mobile nav */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* menu item */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
