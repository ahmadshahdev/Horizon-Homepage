import React, {useEffect} from "react";
import "./Home.css";
import video1 from "../../assets/video1.mp4";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineFilterAlt } from 'react-icons/md';
import { MdOutlineFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa6';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {

	useEffect(()=>{
		Aos.init({duration: 1500})
	}, [])


	return (
		<section className="home">
			<div className="overlay"></div>
			<video src={video1} muted autoPlay loop type="video1.mp4"></video>

			<div className="homeContent container">
				<div className="textDiv">
					<span data-aos="fade-up" className="smallText">Our packages</span>

					<h1 data-aos="fade-up" className="homeTitle">Search your Holidays</h1>
				</div>

				<div data-aos="fade-up" className="cardDiv grid">
					<div className="destinationInput">
						<label htmlFor="city">Search your Destinatioon:</label>
						<div className="input flex">
							<input
								name="city"
								id="city"
								type="text"
								placeholder="Enter Name Here"
							/>
							<MdOutlineLocationOn className="icon" />
						</div>
					</div>

					<div className="dateInput">
						<label htmlFor="date">Select Your Date:</label>
						<div className="input flex">
							<input type="date" id="date" />
						</div>
					</div>

					<div className="destinationInput">
						<div className="lable_total flex">
							<label htmlFor="price">Max Price:</label>
							<h3 className="total">$5000</h3>

						</div>
							<div className="input flex">
								<input
									name="price"
									id="price"
									type="range"
									max="5000"
									min="1000"
								/>
							</div>
					</div>


					<div className="searchOptions flex">
						<MdOutlineFilterAlt className="icon"/>
						<span>Filter</span>
					</div>

				</div>

				{/* =================================== */}

				<div data-aos="fade-up" className="homeFooterIcons flex">
					<div className="rightIcons">

						<MdOutlineFacebook className="icon"/>
						<FaInstagram className="icon"/>
						<FaTripadvisor className="icon"/>

					</div>
					<div className="leftIcons">

						<FaListUl className="icon"/>
						<TbApps className="icon"/>

					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
