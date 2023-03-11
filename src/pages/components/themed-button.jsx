import React from "react";
import { ThemeContext } from "../../contexts/theme-context";

class ThemedButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let props = this.props;
		let theme = this.context;
		console.log(this.props);
		console.log(this.context);
		// return null;
		return (
			<button {...props} style={{ backgroundColor: theme.background }}>
				{this.props.children || "thme button"}
			</button>
		);
	}
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
