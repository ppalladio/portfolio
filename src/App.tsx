import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
    const [isTopOfPage, setIsTopOfPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            } else {
                setIsTopOfPage(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app bg-deep-blue">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="w-5/6 mx-auto md:h-full">
                {isAboveMediumScreen && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
