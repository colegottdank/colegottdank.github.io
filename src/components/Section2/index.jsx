import React from "react";
import Velocity from "velocity-animate";
import ScrollMagic from "scrollmagic";
import Paper from "react-md/lib/Papers";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import "./section2styles.css";

class Section2 extends React.Component {
	constructor(props) {
		super(props);

		this.State = {
			didRun: false
		};
	}

	runAnimation() {
		this.setState({
			didRun: true
		});
	}

	scroll(event, offset = 0) {
		Velocity(document.getElementById(this), "scroll", {
			duration: 1000,
			easing: "easeInBack",
			offset
		});
	}
	render() {
		const skills = [
			{
				name: "Production scale web development",
				desc: "As a React.js programmer , I'm able to craft"
			},
			{
				name: "eCommerce",
				desc: "I can do this for eCommerce..."
			},
			{
				name: "Production Scale Web Development",
				desc: "As a React.js programmer, I'm able to craft"
			},
			{
				name: "Production Scale Web Development",
				desc: "As a React.js programmer, I'm able to craft"
			},
			{
				name: "Production Scale Web Development",
				desc: "As a React.js programmer, I'm able to craft"
			},
			{
				name: "Production Scale Web Development",
				desc: "As a React.js programmer, I'm able to craft"
			},
		];
		return (
			<section className="section2-wrapper">
				<div className="content-wrapper"id="myexpertise"> 
					<Expertise skills={skills} />
				</div>
			</section>
		);
	}
}

const Expertise = props =>
	<section className="md-grid">
		{props.skills.map(skill =>
			<Paper className="md-cell md-cell--3-desktop md-cell--3-tablet md-cell--4-phone skill-paper" zDepth={0} raiseOnHover={true}>
				<Card className="skill-card">
					<CardTitle title={skill.name} />
					<CardText>
						<p>
							{skill.desc}
						</p>
					</CardText>
				</Card>
			</Paper>
		)}
	</section>;

export default Section2;
