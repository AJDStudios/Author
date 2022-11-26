import React from "react";
import FravashiAD from "../images/fravashiad.webp"

class About extends React.Component{
    render(){
        return (
            <div className="about">
                <div className="abouthead">
                    <h1>
                        Aaron James Dodd
                    </h1>
                    <img alt="3DAD" src={ FravashiAD } />
                </div>
                <div className="aboutauthor">
                    <h2>The Author</h2>
                    <p>Aaron has been writing since a young child, and "Demons" was one of his first "finished" works. It started as a film script where that scene now resides in book 5 in the series.
                       Much of his experience was gained through writing communities, but during university he ran a website that allowed unknown authors to get there work out there, running a short 
                       story series and a weekly upload schedule for journalism and fiction both.  
                    </p>
                </div>
                <div className="aboutcreative">
                    <h2>The Creative</h2>
                    <p>Writing is only one pursuit, Aaron also makes games in the Demons Universe, writes music and creates sprites and 3d art that come to life in these projects. 
                       Anything related to software, video editing, streaming, design and game dev is self-taught and realised. His background in music is slightly more formal though, even working as a private guitar tutor 
                       from the age of 15.  
                    </p>
                </div>
                <div className="About the man">
                    <h2>The Man</h2>
                    <p>Though Aaron has worked in many fields, the majority of his time has been spent abroad teaching English as a foreign language. France, the Czech Republic and Russia have been 
                        long-term homes as well as many places in the UK. Now he's returned and shifted his focus to software engineering. He works as a frontend software engineer in Cardiff today.</p>
                </div>    
            </div>
        )
    }
}

export default About