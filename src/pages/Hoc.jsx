import React, { useState, useEffect } from "react";

function createHoc() {
	const renderQueue = []; /* 待渲染队列 */
	return function Hoc(Component) {
		function RenderController(props) {
			/* RenderController 用于真正挂载原始组件  */
			const { renderNextComponent, ...otherprops } = props;
            useEffect(() => {
                console.log(renderQueue);
				renderNextComponent(); /* 通知执行下一个需要挂载的组件任务 */
			}, []);
			return <Component {...otherprops} />;
		}

		return class Wrap extends React.Component {
			constructor() {
				super();
				this.state = {
					isRender: false,
				};
				const tryRender = () => {
					this.setState({
						isRender: true,
					});
				};
				if (renderQueue.length === 0) this.isFirstRender = true;
				renderQueue.push(tryRender);
			}
			isFirstRender = false; /* 是否是队列中的第一个挂载任务 */
			renderNextComponent = () => {
				/* 从更新队列中，取出下一个任务，进行挂载 */
				if (renderQueue.length > 0) {
					console.log("挂载下一个组件");
					const nextRender = renderQueue.shift();
					nextRender();
				}
			};
			componentDidMount() {
				/* 如果是第一个挂载任务，那么需要 */
				this.isFirstRender && this.renderNextComponent();
			}
			render() {
				const { isRender } = this.state;
				return isRender ? (
					<RenderController
						{...this.props}
						renderNextComponent={this.renderNextComponent}
					/>
				) : (
					<span>loading</span>
				);
			}
		};
	};
}

/* 创建 hoc  */
const loadingHoc = createHoc();

function CompA() {
	useEffect(() => {
		console.log("组件A挂载完成");
	}, []);
	return <div>组件 A </div>;
}
function CompB() {
	useEffect(() => {
		console.log("组件B挂载完成");
	}, []);
	return <div>组件 B </div>;
}
function CompC() {
	useEffect(() => {
		console.log("组件C挂载完成");
	}, []);
	return <div>组件 C </div>;
}

function CompD() {
	useEffect(() => {
		console.log("组件D挂载完成");
	}, []);
	return <div>组件 D </div>;
}
function CompE() {
	useEffect(() => {
		console.log("组件E挂载完成");
	}, []);
	return <div>组件 E </div>;
}

const ComponentA = loadingHoc(CompA);
const ComponentB = loadingHoc(CompB);
const ComponentC = loadingHoc(CompC);
const ComponentD = loadingHoc(CompD);
const ComponentE = loadingHoc(CompE);

export default function Index() {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="container">
			<ComponentA />
			<ComponentB />
			<ComponentC />
			{isShow && <ComponentD />}
			{isShow && <ComponentE />}
			<button onClick={() => setIsShow(true)}> 挂载组件D ，E </button>
		</div>
	);
}
// const WrapComponent = (props) => {
// 	return (
// 		<>
// 			<div>hello,wrap</div>
// 			<div>name:{props.name || ""}</div>
// 			<div>author:{props.author || ""}</div>
// 		</>
// 	);
// };

// function HOC(WrapComponent) {
// 	return class Advance extends React.Component {
// 		state = {
// 			name: "《React 进阶实践指南》",
// 			author: "我不是外星人",
// 		};
//         render() {
//             console.log(this);
// 			return <WrapComponent {...this.props} {...this.state} />;
// 		}
// 	};
// }

// const HocItem = HOC(WrapComponent);

// class HocPage extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		// 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
// 		// 而外部的组件使用默认的 theme 值
// 		return (
// 			<div>
// 				<HocItem />
// 			</div>
// 		);
// 	}
// }

// export default HocPage;
