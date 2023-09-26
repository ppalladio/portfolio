import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from './components/LineGradient';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const isDesktop = useMediaQuery('(min-width: 992px)');
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
                {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <Landing setSelectedPage={setSelectedPage} />
            </div>
            <LineGradient />
            <div className="w-5/6 mx-auto">
                <Projects />
            </div>
            <div className="w-5/6 mx-auto">
                <Contact />
            </div>
        </div>
    );
}

export default App;
