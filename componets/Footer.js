import { Footer } from "../styles/Footer.styled";
import {FaFacebook,FaGithub,FaLinkedin,FaUser,FaMicrophone,FaWhatsapp} from "react-icons/fa"

export function Foot(){
    return(
        <Footer>
        <div>
           <h2>PROJECTS</h2>
           <ul>
            <li>
                <a href="##">
                    <FaUser/>
                </a>
            </li>
            <li>
                <a href="###">
                    <FaWhatsapp/>
                </a>
            </li>
            <li>
                <a href="###">
                    <FaMicrophone/>
                </a>
            </li>
            
           </ul>


        </div>
        <div>
           <h2>ABOUT</h2>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Delectus eaque cum est vero porro fugiat, tempora, nulla fugit hic placeat nostrum eius quia dolores qui inventore voluptatem blanditiis minus.
            Eaque.
           </p>
        </div>
        <div>
           <h2>CONTACT</h2>
           <li className="social-links">
            <a href="###">
            <FaFacebook/>
            </a>
            <a href="###">
            <FaGithub/>
            </a>
            <a href="##">
            <FaLinkedin/>
            </a>
           </li>
           
        </div>
        </Footer>

        
    );
}