import React from "react";
import "../../loader.styles.css";
import loadingGif from "../../assets/loading.gif";
const Loader = () => {
  return (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
    
      <div className="text-container">
        <span className="letter">F</span>
        <span className="letter">U</span>
        <span className="letter">R</span>
        <span className="letter">N</span>
        <span className="letter">I</span>
        <span className="letter">T</span>
        <span className="letter">U</span>
        <span className="letter">R</span>
        <span className="letter">E</span>
        <span className="letter"><br></br></span>
        <span className="letter">H</span>
        <span className="letter">O</span>
        <span className="letter">U</span>
        <span className="letter">S</span>
        <span className="letter">E</span>
       
        

      </div>
    </div>
  );
};

export default Loader;
