import Image from 'next/image'
import shoppingCart from '../public/shopping-cart-icon.png'
export default function Home() {
  return (
    <div>
      <div className="w-screen h-[50px] bg-[#EAEAEA] text-center leading-13 text-[#BABABA] text-3xl">.אומנות מרגיעה, לשחרר את הנפש</div>
      <div className="relative w-1/2 h-[90px] top-[40px] left-[25%] bg-[#D9D9D9] rounded-3xl ">
        <Image src={shoppingCart} alt='shopping cart' width={70} height={70} className="absolute top-[10px] right-[20px]"/>
        <h1 className="absolute top-[30px] left-[20px] w-[90%] text-[clamp(1.5rem,2.5vw,3rem)] text-center leading-5 text-white">חנות האומנות של איריס סמליאן</h1>
      </div>
      <div className="w-[90%] h-160 left-[5%] rounded-3xl bg-[#D9D9D9] bg-[#EBEBEB] top-[250px] absolute ">
        <div className='w-[calc(100%-100px)] left-[50px] h-[calc(100%-100px)] top-[50px] absolute flex flex-wrap gap-5 productsContainer'>
          <div className="w-35 h-40 bg-white rounded-3xl">
            <Image src={shoppingCart} alt='shopping cart' width={140} height={100} className='w-[100%] h-[100%] rounded-3xl overflow-hidden object-cover object-center'/>
            <h1 className='w-[100%] text-center text-2xl text-[140%]'>המילוי מקום</h1>
            <h3 className='w-[100%] text-center text-2xl text-[100%]'>10000000₪</h3>
            <button className='w-[70%] h-10 bg-[#ffffff] rounded-2xl text-xl ml-[15%]'>הוספה לסל</button>
          </div>
        </div>
      </div>
    </div>
  );
}
