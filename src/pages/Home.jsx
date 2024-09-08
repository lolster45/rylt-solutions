import React from 'react';

//React icons...
import { GiTexas } from "react-icons/gi";
import { RiHandSanitizerLine } from "react-icons/ri";
import { SiMinetest } from "react-icons/si";
import { FaRegCircleCheck } from "react-icons/fa6";





//Styles...
import '../styles/home.scss'

const Home = () => {
    return (
        <div className='home-page'>

            <div className='main'>
                <div className='main-left'>
                    <h1>State Board Kits</h1>
                    <p>lorem ipsum and falsidf aslidfjwleif 928  fsdkfn alf sdla fho safsdli ene lsi32idgnaslfsdf wifnsa n</p>
                    <button>Check Out</button>
                </div>
                <div className='main-right'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                </div>
            </div>

            <section className='services'>
                <div>
                    <GiTexas/>
                    <p>Meets State requirements</p>
                </div>
                <div>
                    <RiHandSanitizerLine/>
                    <p>Pre-Sanitized Tools & Accessories</p>
                </div>
                <div>
                    <SiMinetest/>
                    <p>Test-Approved Mannequins & Equipment</p>
                </div>
                <div>
                    <FaRegCircleCheck/>
                    <p>Endorsed by Licensed Professionals</p>
                </div>
            </section>

            <section className="about-me">
                <div className='about-left'>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque harum odit perferendis at placeat expedita et quos ipsa, voluptates eveniet autem beatae aliquid ut deserunt quibusdam aspernatur molestias? Et!</p>
                </div>
                <div className='about-right'>
                    <img src="" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;