import React from "react";
import { ThemeContext, themes } from "../contexts/theme-context";
import ThemedButton from "./components/themed-button";
import TestComsumer from "./components/cunsumer-button";

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
	return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class ContextTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: themes.light,
		};

		this.toggleTheme = () => {
			this.setState((state) => ({
				theme: state.theme === themes.dark ? themes.light : themes.dark,
			}));
		};
	}
	render() {
		// 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
		// 而外部的组件使用默认的 theme 值
		return (
			<div style={{padding: '20px 100px'}}>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar changeTheme={this.toggleTheme} />
					<TestComsumer />
				</ThemeContext.Provider>

				<ThemedButton />
			</div>
		);
	}
}

export default ContextTest;
