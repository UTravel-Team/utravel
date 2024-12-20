import React from "react";
import SocialMedia from "../Buttons/SocialMediaButton.jsx";
import LoginRegisterButtons from "../Buttons/LoginRegisterGroup.jsx";
import ProvSearchBar from "../../components/SearchBar/ProvSearchBar.jsx"
import Logo from "./Logo.jsx";

function Header() {
  
  return (
    <header className="bg-green-700 text-white border-b-4">

      <div className="flex flex-col p-4">
      
        <div className="flex items-center justify-between flex-wrap mb-4">
        
          {/* Logo y SearchBar */}
          <div className="flex flex-nowrap items-center gap-4">
            <Logo />
            
            {/* Search Bar Section */} 
            <ProvSearchBar />
          </div>

          {/* Search Bar Section */}        
          
          {/* Social Media and Login/Register Buttons */}
          <div className="flex gap-4 items-center">
            <SocialMedia />
            <LoginRegisterButtons />
          </div>

        </div>
      
      </div>

    </header>
  );
}

export default Header;
