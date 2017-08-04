import React from "react";
import "./section1styles.css";
import img from "../../images/selfies/ColeGottdank_copy.png";
import Button from "react-md/lib/Buttons";
import Divider from "react-md/lib/Dividers";
import Media from "react-md/lib/Media";
import 'font-awesome/css/font-awesome.css';

/*
* Section1 contains both LeftHalf and RightHalf
*/
const Section1 = () =>
	<section className="section1-wrapper md-grid" id="landing">
		<LeftHalf />
		<RightHalf />
	</section>;

/*
* LeftHalf of Section1
*/
const LeftHalf = () =>
	<Media aspectRatio="16-9" forceAspect={true} className="md-cell--6 .md-cell left-half-wrapper">
		<img src={img} alt="Cartoon Selfie" />
	</Media>;

/*
* RightHalf of Section1
*/
const RightHalf = () =>
	<section className="md-cell--6 .md-cell right-half-wrapper">
		<Info
			header="Who am I?"
			desc="I'm a frontend developer who prides myself on my ability to
				craft high-quality, modular, and scalable React.js code
				utilizing CSS Modules."
			icons={[
				{icon: "fa fa-facebook", href: "https://www.facebook.com/cole.gottdank"},
				{icon: "fa fa-free-code-camp", href: "https://www.freecodecamp.org/colegottdank"},
				{icon: "fa fa-github", href: "https://www.github.com/colegottdank"},
				{icon: "fa fa-linkedin", href: "https://www.linkedin.com/in/cole-gottdank-585123140/"},
				{icon: "fa fa-reddit", href: "https://www.reddit.com/user/nnet3/"},
				{icon: "fa fa-twitter", href: "https://twitter.com/colegottdank"},
			]}
		/>
		<Info
			header="My specialities"
			desc="I specialize in crafting and optimizing all types of eCommerce
				websites. Crafting the highest-quality website the first time
				saves companies loads of maitence costs in the long-run."
		/>
	</section>;

/*
* Info Component
*/
const Info = props =>
	<section className="info-wrapper">
		<div className="info-div">
			<h3>&lt;h1&gt;</h3>
			<h1>
				{props.header}
			</h1>
			<h3>&lt;/h1&gt;</h3>
			<Divider />
			<p>
				{props.desc}
			</p>
			{props.icons !== undefined
				? props.icons.map(icon =>
						<Button
							icon
							iconClassName={icon.icon}
							tooltipLabel={icon.icon.replace(/fa fa-/g, "")}
							tooltipPosition="bottom"
							className="icon"
							key={icon.icon}
							href={icon.href}
							target="_blank"
						/>
					)
				: null}
		</div>
	</section>;

export default Section1;
