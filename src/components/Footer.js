import React from "react";
import Gif from "./aden.gif"

function Footer(){
    return(
        <footer className="footer">
            <div className="socials">
                <section>
                    <a href="https://www.youtube.com/channel/UCIWsjkVvj1LASyBDxuix7Hw" target="blank" rel="noreferrer" alt=""><i className="fa-brands fa-youtube"></i></a>
                </section>
                <section>
                    <a href="https://www.twitch.tv/ajdstudios" target="_blank" rel="noreferrer" alt=""><i className="fa-brands fa-twitch"></i></a>
                </section>
                <section>
                    <a href="https://discord.gg/tMMVKstvac" target="_blank" rel="noreferrer">
                    <img className="animated-gif" alt="" src={ Gif } />
                    </a>
                </section>
                <section className="darktoggle">
                    <input type="checkbox" className="checkbox" id="chk"/>
                    <label className="label" htmlFor="chk">
                        <i className="fas fa-sun"></i>
                        <i className="fas fa-moon"></i>
                        <div className="ball"></div>
                    </label>
                </section>
            </div>    
            <div className="footer">
                <h1 className="copyright">Copyright 2022</h1>
            </div>
        </footer>
       
    )
}

export default Footer