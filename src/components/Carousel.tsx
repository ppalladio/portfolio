const Carousel = () => {
    return (
        <div className="h-full max-w-full flex flex-col gap-[6rem] justify-center m-auto">
            <div className="w-full h-[12rem] pointer-events-none bg-slate-600 overflow-hidden shadow-[0_2rem_2rem_0.4rem_rgba(0,0,0,0.2)]">
                <div className="h-full w-full">
                    <div className="h-full w-fit flex items-center relative animate-marquee text-2xl">
                        <div className="h-[8rem] my-0 mx-[4vw] rounded-[100rem] bg-cover bg-center bg-no-repeat bg-color-[#444] filter-[grayscale(0.6)] w-[4vw]">
                            <img
                                src="../src/assets/letter_testing.jpg"
                                alt="marquee_photo"
                            />
                        </div>

                        <div>content 2</div>

                        <div>content 3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
