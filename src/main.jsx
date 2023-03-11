import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import App from "./App";
import TestHoc from "./pages/TestSonComponent";
import LifeCyclePage from "./pages/LifeCycle";
import ContextTest from "./pages/ContextTest";
import TestHook from "./pages/hooks";
import EffectTest from "./pages/effect";
import HocPage from "./pages/Hoc";

ReactDOM.render(
	// <React.StrictMode>
	<Router>
		<div>
			<nav className="topNav">
				<ul className="navMenu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/testhoc">testhoc</Link>
					</li>
					<li>
						<Link to="/lifecycle">lifeCycle</Link>
					</li>
					<li>
						<Link to="/context">context</Link>
					</li>
					<li>
						<Link to="/hooks">hooks</Link>
					</li>
					<li>
						<Link to="/effets">Effects</Link>
					</li>
					<li>
						<Link to="/hoc">Hoc</Link>
					</li>
				</ul>
			</nav>
		</div>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/testhoc" component={TestHoc} />
			<Route path="/lifecycle" component={LifeCyclePage} />
			<Route path="/context" component={ContextTest} />
			<Route path="/hooks" component={TestHook} />
			<Route path="/effets" component={EffectTest} />
			<Route path="/hoc" component={HocPage} />
		</Switch>
	</Router>,
	// </React.StrictMode>,
	document.getElementById("root")
);
