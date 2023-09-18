import AnchorLink from 'react-anchor-link-smooth-scroll';

interface LinkProps {
    page: string;
    selectedPage: string;
    setSelectedPage: (page: string) => void;
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

export default Link;
