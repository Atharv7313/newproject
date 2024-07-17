import Herosection from "./homepage-components/Herosection";
import GetConnected from "./common/_components/GetConnected";
import AboutUs from "./homepage-components/AboutUs";
import CardsSection from "./homepage-components/CardsSection";
import RangeSection from "./homepage-components/RangeSection";
import pic from "./homepage-components/_assets/homepage-img.png"

export default function Home() {
  return (
    <div className='flex flex-col items-center relative'>
      <Herosection/>
      <AboutUs/>
      <RangeSection/>
      <CardsSection/>
      <GetConnected/>
      <img src={pic.src} alt="homepage-img" className='w-full mt-10'/>
    </div>
  );
}
