import React, { useState } from 'react';
import Header from '../../components/common/header/Header';
import TabOptions from '../../components/common/tabOptions/TabOptions';
import Footer from '../../components/common/footer/Footer';
import Delivery from '../../components/Delivery/Delivery';
import DiningOut from '../../components/DiningOut/DiningOut';
import NightLife from '../../components/NightLife/NightLife';
import YourCart from '../../components/YourCard/YourCart';




const Home = () => {

   const [activeTab, setActiveTab] = useState("Delivery")

   return (
      <div>
         <Header />
         <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />

         {getCorrectScreen(activeTab)}
         <Footer />
      </div>
   )
}


const getCorrectScreen = (tabValue) => {
   switch (tabValue) {
      case "Delivery":
         return <Delivery />
      case "Dining Out":
         return <DiningOut />
      case "Nightlife":
         return <NightLife />
      case "YourCart":
         return <YourCart />
      default:
         return <Delivery />
   }
}

export default Home;