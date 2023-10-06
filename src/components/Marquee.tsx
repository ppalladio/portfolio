const Marquee = () => {
    return (
        <div className="h-full max-w-full flex flex-col gap-[6rem] justify-center m-auto">
            <div className="w-full h-[20rem] pointer-events-none bg-green overflow-hidden  ">
                <div className="h-full w-full text-black ">
                    <div className="h-full w-fit flex items-center relative animate-marquee ">
                        {/* <div className="h-[8rem] my-0 mx-[4vw] rounded-[100rem] bg-cover bg-center bg-no-repeat filter-[grayscale(0.6)] w-[118px] ">
                            <img
                                src="../src/assets/letter_testing.jpg"
                                alt="marquee_photo"
                            />
                        </div> */}
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                        <div className="left-chevron "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
