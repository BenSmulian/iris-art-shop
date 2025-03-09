import ShoppingBag from '../public/shopping-bag-icon.png'
import HomeIcon from '../public/home-icon.png'
import Image from 'next/image';

export default function ShoppingCart() {
    return (
        <div>
            <div className="w-[80%] h-[calc(100%-100px)] left-[50px] rounded-3xl bg-[#D9D9D9] bg-[#EBEBEB] top-[50px] absolute ">

            </div>

            <Image src={ShoppingBag} alt='shopping cart' width={120} height={70} className='right-[80px] top-[calc(50%-200px)] absolute w-[clamp(100px, 50%, 150px)]'/>
            <Image src={HomeIcon} alt='home' width={120} height={70} className='home right-[80px] top-[calc(50%+100px)] absolute w-[clamp(100px, 50%, 150px)]'/>
        </div>
    );
}