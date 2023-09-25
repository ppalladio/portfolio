import AnchorLink from 'react-anchor-link-smooth-scroll';

interface DotGroupProps {
    selectedPage: string;
    setSelectedPage: (page: string) => void;
}
const DotGroup: React.FC<DotGroupProps> = ({
    selectedPage,
    setSelectedPage,
}) => {
    const selectedStyle = `relative bg-green before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-green before:left-[-50%] before:top-[-50%]`;
    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${
                    selectedPage === 'home' ? selectedStyle : 'bg-dark-grey'
                } w-3 h-3 rounded-full `}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'project' ? selectedStyle : 'bg-dark-grey'
                } w-3 h-3 rounded-full `}
                href="#projects"
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${
                    selectedPage === 'contact' ? selectedStyle : 'bg-dark-grey'
                } w-3 h-3 rounded-full `}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
        </div>
    );
};
export default DotGroup;
