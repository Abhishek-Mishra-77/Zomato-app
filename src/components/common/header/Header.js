import React from "react";
import './Header.css';


const Header = () => {
   return (
      <div className="max-width header">
         <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="zomato-logo"
            className="header-logo" />

         <div className="header-right">
            <div className="header-location-search-container">
               <div className="location-wrapper">
                  <div className="location-icon-name">
                     <i className="fi fi-rr-marker absolute-center location-icon">Varanasi</i>
                  </div>
                  <i className="fi fi-rr-caret-down absolute-center"></i>
               </div>
               <div className="location-search-seprator"></div>
               <div className="header-searchbar">
                  <i className="fi fi-rr-search absolute-cenetr search-icon"></i>
                  <input placeholder="Search for restaurant , cuisine or a dish" className="seacrh-input" />
               </div>
            </div>

            <div className="profile-wrapper">
               <img src="https://cdn-icons-png.flaticon.com/128/5777/5777661.png" alt="profile" className="header-profile-image" />
               <span className="header-username">Abhishek</span>
               <i className="fi fi-rr-angle-small-down absolute-center prifile-options-icon"></i>
            </div>



         </div>
      </div >
   )
}

export default Header;