import Chevron from './Chevron';

const Marquee = () => {
    return (
        // implementation 1
        <>
            <div className="w-full h-[10rem] pointer-events-none bg-green overflow-hidden  ">
                <div className="h-full w-fit flex items-center  animated-marquee ">
                    {/* <div className="h-[8rem] my-0 mx-[4vw] rounded-[100rem] bg-cover bg-center bg-no-repeat filter-[grayscale(0.6)] w-[118px] ">
                            <img
							src="../src/assets/letter_testing.jpg"
							alt="marquee_photo"
                            />
                        </div> */}
                    <Chevron />
                </div>
            </div>
            {/* implementation 2 with after */}
            <div className="w-full h-[10rem] pointer-events-none bg-green overflow-hidden mt-10  ">
                <div className="h-full w-fit flex items-center animate-marquee ">
                    {/* <div className="h-[8rem] my-0 mx-[4vw] rounded-[100rem] bg-cover bg-center bg-no-repeat filter-[grayscale(0.6)] w-[118px] ">
                            <img
							src="../src/assets/letter_testing.jpg"
							alt="marquee_photo"
                            />
                        </div> */}
                    <Chevron />
                </div>
            </div>
            {/* // implementation 3 with js */}
            <div className="hero-section">
                <div className="loop-container">
                    <div className="item">
                        Infinite Horizontal Looping Text&nbsp;
                    </div>
                    <div className="item">
                        Infinite Horizontal Looping Text&nbsp;
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marquee;
