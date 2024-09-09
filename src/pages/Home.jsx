//React...
import React from 'react';

//React slick...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//React icons...
import { GiTexas } from "react-icons/gi";
import { RiHandSanitizerLine } from "react-icons/ri";
import { SiMinetest } from "react-icons/si";
import { FaRegCircleCheck } from "react-icons/fa6";





//Styles...
import '../styles/home.scss'

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };


    return (
        <div className='home-page'>

            <div className='main'>
                <div className='main-left'>
                    <h1>State Board Kits</h1>
                    <p>lorem ipsum and falsidf aslidfjwleif 928  fsdkfn alf sdla fho safsdli ene lsi32idgnaslfsdf wifnsa n</p>
                    <button>Check Out</button>
                </div>
                <div className='main-right'>
                    <img src="https://images.squarespace-cdn.com/content/v1/5d52feb1aa6f990001929012/e89c181b-dd09-420e-8e80-06aa47a5a37a/todecacho.png" alt="" />
                    <img src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/704133/biz_photo/8bb21783ffc649668eba3ab919fa7a-yak-kuts-biz-photo-5679d8acfde047ae9043cc07601e89-booksy.jpeg?size=640x427" alt="" />
                    <img src="https://img.freepik.com/premium-photo/young-man-barber-getting-haircut_23-2148985675.jpg" alt="" />
                    <img src="https://www.shutterstock.com/image-photo/two-barbers-cut-client-beard-600nw-1628454715.jpg" alt="" />
                </div>
            </div>

            <section className='services'>
                <div className='service-heading'>
                    <h2>Benefits?</h2>
                </div>

                <div className='service-cards-wrap'>
                    <div>
                        <GiTexas/>
                        <h2>Requirements</h2>
                        <p>Meets Requirements set by the state of Texas</p>
                    </div>
                    <div>
                        <RiHandSanitizerLine/>
                        <h2>Sanitation</h2>
                        <p>Pre-Sanitized Tools & Accessories</p>
                    </div>
                    <div>
                        <SiMinetest/>
                        <h2>Test</h2>
                        <p>Test-Approved Mannequins & Equipment</p>
                    </div>
                    <div>
                        <FaRegCircleCheck/>
                        <h2>Lisence</h2>
                        <p>Endorsed by Licensed Professionals</p>
                    </div>
                </div>
                    
            </section>


            <div className="slider-container-wrap">
                <h2>Products</h2>
                <Slider {...settings} className='actual-slider'>
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title of product</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title of product</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title of product</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title of Product</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                    <div className='slides'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s" alt="" />
                        <div>
                            <h3>Title</h3> 
                            <span>$100</span>
                        </div>
                    </div>      
                          
                </Slider>
            </div>

            <section className="about-me">
                <div className='about-left'>
                    <h2>About Me?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque harum odit perferendis at placeat expedita et quos ipsa, voluptates eveniet autem beatae aliquid ut deserunt quibusdam aspernatur molestias? Et!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque harum odit perferendis at placeat expedita et quos ipsa, voluptates eveniet autem beatae aliquid ut deserunt quibusdam aspernatur molestias? Et!</p>
                </div>
                <div className='about-right'>
                    <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" alt="picture of you" />
                </div>
            </section>



            
           


        </div>
    );
};

export default Home;