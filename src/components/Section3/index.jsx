import React from "react";
import Slider from "react-slick";
import "./section3styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import colegottdank from "../../images/portfolio/personal_page.png";
import Paper from "react-md/lib/Papers";

const Section3 = () =>
	<section className="section3-wrapper" id="portfolio">
		<SimpleSlider />
	</section>;

class SimpleSlider extends React.Component {
	render() {
		const portfolioPieces = [
			{
				src: colegottdank,
				alt: "Personal website",
				href: "http://www.colegottdank.com"
			},
			{},
			{}
		];
		const settings = {
			className: "centered",
			dots: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 0,
			infinite: true,
			speed: 500,
			focusOnSelect: true,
			useCSS: true
		};
		return (
			<section className="simpleslider-wrapper" id="mywork">
				<Slider {...settings}>
					{portfolioPieces.map(piece =>
						<div>
							<Paper zDepth={0} raiseOnHover={true}>
								<a
									href={piece.href}
									target="_blank"
								>
									<img
										className="portfolio-piece"
										src={piece.src}
										alt={piece.alt}
									/>
								</a>
							</Paper>
						</div>
					)}
				</Slider>
			</section>
		);
	}
}

export default Section3;
