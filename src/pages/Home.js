import React from "react";
import Demons from "../images/title.webp"

class Home extends React.Component{
    render(){
        return (
            <div className="homesplash">
                <img alt="book cover" src={ Demons } />
                <h1>Demons: Genesis</h1>
                <p>
                    As angels patrol the borders of Eden, they discover a creature long thought to be legend, a human child calmly sitting surrounded by the most dangerous beasts in their world.
                </p>
                <br></br>
                <p>
                    A normal life is impossible for Aden Deter. On occasion, he wakes up in unknown worlds with no understanding of how he got there but can return at will after the first time. He divides his time between the places he learns to call home, but modern ideals on Earth and the traditional and militaristic upbringing in Eden collide as he can’t secure his right to prove himself on patrol. When he later wakes up in Hell, that opportunity presents itself and he helps the devilry plan battles in a demon civil war. 
                </p>
                <br></br>
                <p>
                    Back on Earth, he discovers a creature that doesn’t belong trapped in his bedroom and realises his travels leave a footprint, one that can be used to track and, even worse, summon him.
                </p>
                <br></br>
                <p>
                    With incompatible values instilled in Aden, he is viewed as an outsider wherever he goes. Though his journey sees him face to face with physical demons, he learns that the internal kind are often worse. 
                </p>
            </div>
        )
    }
}

export default Home