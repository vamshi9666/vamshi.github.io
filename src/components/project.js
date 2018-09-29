// eslint-disable-next-line
import React, { Component } from 'react';

import './../style.css';

class Project extends Component {
	constructor(props) {
		super(props);
	}
	// componentDidUpdate(){
	// }
	render() {
		return (
			<div className="project">
				<div className="project-head">
					<img src={this.props.logo} alt="" />
					<h3>{this.props.name}</h3>
				</div>
				<div className="disc-con">
					<p>{this.props.discription}</p>
				</div>
				<div className="links">
					<a href={this.props.gitUrl}>
						<button className="btn">
							<img
								className="git-icon"
								src="https://www.shareicon.net/data/2017/03/07/880593_media_512x512.png"
								alt="repo link"
							/>
						</button>
					</a>
				</div>
			</div>
		);
	}
}

export default Project;
