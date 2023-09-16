import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
    return (
        <nav className="z-40 w-full fixed top-0 py-6 ">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-merriweathersans text-3xl font-bold ">
                    YP
                </h4>
                {/* desktop nav */}
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-16 font-merriweather text-sm font-semibold">
                    
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
