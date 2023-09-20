import useMediaQuery from "../hooks/useMediaQuery";

interface LandingProps {
	setSelectedPage: (page: string) => void
}
const Landing: React.FC<LandingProps> = ({ setSelectedPage }) => {

	const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
  return (
	<section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
{/* image  */}
<div className="md:order-2 flex justify-center basis-3/5 z-30 mt-16 md:mt-32">
{isAboveMediumScreen ? (
	<div>
		<img src="" alt="profile" />
	</div>
):()}
</div>
	</section>
  )
}
export default Landing