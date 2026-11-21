import React, {useEffect} from "react";
import "./Footer.css";

import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';

import Aos from 'aos'
import "aos/dist/aos.css"


import video from "../../assets/video2.mp4";

const Footer = () => {

    useEffect(()=>{
            Aos.init({duration: 1500})
            }, [])
        

	return (
		<section className="footer">
			<div className="FTvideoDiv">
				<video
					src={video}
					loop
					autoPlay
					muted
					typeof="video/mp4"
				></video>
			</div>

			<div className="FTseeContent container">
				<div className="FTcontactDiv flex">
					<div data-aos="fade-up" className="FTtext">
						<small>KEEP IN TOUCH</small>
						<h2>TRavell With Us</h2>
					</div>

					<div className="FTinputDiv flex">
						<input data-aos="fade-up" type="text" id="emial" placeholder="Enter Email" />
						<button data-aos="fade-up" className="btn felx" type="submit">
							Send <BsSendArrowUp className="icon" />
						</button>
					</div>
				</div>

				<div className="footerCard flex">
					<div className="footerIntro felx">
						<div className="FTlogoDiv">
							<a href="#" className="FTlogo flex">
								<MdOutlineTravelExplore className="icon" />
                                Travel
							</a>
						</div>

						<div data-aos="fade-up" className="footerPara">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Recusandae explicabo dolorem sit voluptas
							fuga, numquam itaque. Architecto, recusandae.
							Expedita tempore dolor sequi aliquam eos, quidem
							illum omnis nisi alias neque.
						</div>

                        <div data-aos="fade-up" className="footerSocial flex">
                            <MdOutlineFacebook className="icon"/>
                            <FaInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                            <FaYoutube className="icon"/>
                        </div>
					</div>

                    <div className="footerLinks grid">

                        {/* Group 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                Payment
                            </li>

                        </div>

                        {/* Group 2 */}
                        <div data-aos="fade-up" data-aos-duration="3500" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                BOOKNIG
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                RENT CARS
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                HOSLTE WORLD
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                TRIVAGO
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                TRIP ADVISORS
                            </li>

                        </div>

                        {/* group 3 */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                LONDON
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                CALOFORNIA
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                INDONESIA
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                EUROPE
                            </li>

                            <li className="footerList flex">
                                <FaAngleRight className="icon"/>
                                FRANCE
                            </li>

                        </div>


                    </div>


                    <div className="footerDiv felx">
                        <small>
                            MADE BY SYED AHMAD SHAH
                        </small>
                        
                        <small>
                            COPPY RGHTS RESERVED: 24-10-2025
                        </small>
                    </div>
				</div>


			</div>
		</section>
	);
};

export default Footer;
