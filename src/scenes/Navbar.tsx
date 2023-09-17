import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
interface LinkProps {
	page: string;
	selectedPage: string;
	setSelectedPage: Function;
}
const Link: React.FC<LinkProps> = ({ selectedPage, setSelectedPage, page }) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-green' : ''
            } hover:text-green transition duration-500 `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

interface NavBarProps {
	selectedPage: string;
	setSelectedPage: Function;
}

const Navbar: React.FC<NavBarProps> = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
    return (
        <nav className="z-40 w-full fixed top-0 py-6 ">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-merriweathersans leading-3 text-3xl font-bold ">
                    FC
                </h4>
                {/* desktop nav */}
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-16 font-merriweather text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
