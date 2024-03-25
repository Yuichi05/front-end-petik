import { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer>
				<h3>Copyrights &copy; 2024 Developed By {this.props.nama}</h3>
				<span>Make with &10084</span>
			</footer>
		);
	}
}

export default Footer;