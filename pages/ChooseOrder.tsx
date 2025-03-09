import HomeIcon from '../public/home-icon.png'
import Image from "next/image";
export default function ChooseOrder() {
    return (
        <div>
            <div className="w-screen h-[50px] bg-[#EAEAEA] text-center leading-13 text-[#BABABA] text-3xl">.אומנות מרגיעה, לשחרר את הנפש</div>
            <Image src={HomeIcon} alt='shopping cart' width={120} height={70}  className="left-[20px] top-[20px] absolute w-[clamp(100px, 50%, 150px)] hover:opacity-50 hover:cursor-pointer"/>

            <div className='absolute left-[10%] top-[10%] w-[80%] bg-[#D9D9D9] rounded-3xl'></div>
            <div className='absolute left-[30%] top-[10%] w-[100%]'>
                <h1 className='h-30 text-8xl w-[40%] text-center select-none'>איך ברצונך לקבל</h1>
                <h1 className='h-30 text-8xl w-[40%] text-center select-none'>?את המשלוח</h1>
            </div>

            <h2 className='text-4xl font-bold text-center absolute top-[50%] w-[100%] h-[100%] text-xxb'>(+30₪)</h2>

            <div className="h-30 text-7xl w-[40%] left-[30%] top-[55%] leading-30 absolute text-center bg-center select-none bg-black rounded-3xl text-white hover:bg-[rgb(100,100,1010)] hover:cursor-pointer transition">דואר</div>
            <div className="h-30 text-7xl w-[40%] left-[30%] top-[70%] leading-30 absolute text-center bg-center select-none bg-black rounded-3xl text-white hover:bg-[rgb(100,100,1010)] hover:cursor-pointer transition">הגעה אל איריס סמליאן</div>
        </div>
    );
}