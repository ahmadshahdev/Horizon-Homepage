import React, {useEffect} from "react";
import "./Main.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";

import img1 from "../../assets/travel1.jpg";
import img2 from "../../assets/travel2.jpg";
import img3 from "../../assets/travel3.jpg";
import img4 from "../../assets/travel4.jpg";
import img5 from "../../assets/travel1.jpg";
import img6 from "../../assets/travel2.jpg";
import img7 from "../../assets/travel3.jpg";
import img8 from "../../assets/travel1.jpg";
import img9 from "../../assets/travel4.jpg";

import Aos from 'aos'
import "aos/dist/aos.css"



const Data = [
	{
		id: 1,
		imgSrc: img1,
		destTitle: "Bora Bora",
		location: "New Zealand",
		grade: "CULTURAL RELAX",
		fees: "$700",
		description:
			"The epitome of romance, Bora Bora is one of the best travel destinations in the world. Known for its luxurious stays and adventurous activities.",
	},
	{
		id: 2,
		imgSrc: img2,
		destTitle: "Machu Picchu",
		location: "Peru",
		grade: "CULTURAL RELAX",
		fees: "$600",
		description:
			"Experience the ancient Incan citadel set high in the Andes Mountains. Machu Picchu is rich in history, mystery, and stunning landscapes.",
	},
	{
		id: 3,
		imgSrc: img3,
		destTitle: "Santorini",
		location: "Greece",
		grade: "HONEYMOON RETREAT",
		fees: "$850",
		description:
			"A romantic getaway with iconic whitewashed houses, blue-domed churches, and breathtaking sunsets over the Aegean Sea.",
	},
	{
		id: 4,
		imgSrc: img4,
		destTitle: "Kyoto",
		location: "Japan",
		grade: "CULTURAL HERITAGE",
		fees: "$950",
		description:
			"Immerse yourself in Japan’s ancient traditions, tranquil temples, cherry blossoms, and historic wooden houses in the heart of Kyoto. ",
	},
	{
		id: 5,
		imgSrc: img5,
		destTitle: "Swiss Alps",
		location: "Switzerland",
		grade: "ADVENTURE ESCAPE",
		fees: "$1200",
		description:
			"A paradise for nature lovers and adventurers, the Swiss Alps offer skiing, hiking, and unforgettable alpine views. You should must visit once.",
	},
	{
		id: 6,
		imgSrc: img6,
		destTitle: "Bali",
		location: "Indonesia",
		grade: "CULTURAL RELAX",
		fees: "$750",
		description:
			"Bali is known for its forested volcanic mountains, serene beaches, coral reefs, yoga retreats, and vibrant culture. You should must visit once.",
	},
	{
		id: 7,
		imgSrc: img7,
		destTitle: "Grand Canyon",
		location: "USA",
		grade: "NATURE WONDER",
		fees: "$500",
		description:
			"One of the seven natural wonders of the world, the Grand Canyon offers breathtaking views, hiking adventures, and a connection with nature.",
	},
	{
		id: 8,
		imgSrc: img8,
		destTitle: "Paris",
		location: "France",
		grade: "CITY ESCAPE",
		fees: "$1100",
		description:
			"The City of Light — famous for its art, fashion, gastronomy, and culture. Home to the Eiffel Tower and romantic streets that captivate every visitor.",
	},
	{
		id: 9,
		imgSrc: img9,
		destTitle: "Dubai",
		location: "UAE",
		grade: "LUXURY GETAWAY",
		fees: "$1300",
		description:
			"A modern paradise featuring luxurious hotels, desert adventures, shopping malls, and the world-famous Burj Khalifa skyline. That is must visit place.",
	},
	{
		id: 10,
		imgSrc: img7,
		destTitle: "Grand Canyon",
		location: "USA",
		grade: "NATURE WONDER",
		fees: "$500",
		description:
			"One of the seven natural wonders of the world, the Grand Canyon offers breathtaking views, hiking adventures, and a connection with nature.",
	},
	{
		id: 11,
		imgSrc: img4,
		destTitle: "Kyoto",
		location: "Japan",
		grade: "CULTURAL HERITAGE",
		fees: "$950",
		description:
			"Immerse yourself in Japan’s ancient traditions, tranquil temples, cherry blossoms, and historic wooden houses in the heart of Kyoto. ",
	},
	{
		id: 12,
		imgSrc: img1,
		destTitle: "Bora Bora",
		location: "New Zealand",
		grade: "CULTURAL RELAX",
		fees: "$700",
		description:
			"The epitome of romance, Bora Bora is one of the best travel destinations in the world. Known for its luxurious stays and adventurous activities.",
	}
];

const Main = () => {

	useEffect(()=>{
			Aos.init({duration: 1500})
		}, [])
	


	return (
		<section className="main container section">
			<div className="secTitle">
				<h3 data-aos="fade-right" className="title">Most visited Destination</h3>
			</div>

			<div className="secContent grid">
				{Data.map(
					({
						id,
						imgSrc,
						destTitle,
						location,
						grade,
						fees,
						description,
					}) => {
						return (
							
							<div key={id} data-aos="fade-up" className="singleDestination">
								<div className="imgDiv">
									<img src={imgSrc} alt={destTitle} />
								</div>

								<div className="cardINfo">
									<h4 className="desTitle">{destTitle}</h4>

									<span className="continent flex">
										<MdOutlineLocationOn className="icon" />
										<span className="name">
											{" "}
											{location}{" "}
										</span>
									</span>

									<div className="fees flex">
										<div className="grade">
											<span>
												{grade}
												<small>+1</small>
											</span>
										</div>

										<div className="price">
											<h5>{fees}</h5>
										</div>
									</div>

									<div className="desc">
										<p>{description}</p>
									</div>

									<button className="btn flex">
										Detatils{" "}
										<FaRegClipboard className="icon" />
									</button>
								</div>
							</div>
						);
					}
				)}
			</div>
		</section>
	);
};

export default Main;
