import Image from 'next/image';

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl py-10 px-2">
            <div className="relative">
                <Image src={"/paper-bg.jpg"} alt="paper" width={0} height={0} sizes="100vw" className='h-72 w-full rounded-lg'/>

                <div className='absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30'></div>
                
                <Image src={"/book.png"} alt="book" width={0} height={0} sizes="100vw" className="absolute bottom-0 right-5" style={{width: "auto", height: "18rem"}}/>
                
                <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
                Your Gateway to Thousands of E-books and Resources...
                </h3>
            </div>
        </div>
    );
};

export default Banner;