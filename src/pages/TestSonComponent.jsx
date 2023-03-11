import React, { useEffect, useState } from "react";

const SonItemOther = () => {
	console.log("----othersonItem");
	const [count, setCount] = useState(0);
    const handleClick = () => {
        console.group('sync---')
		console.log("--set1");
		console.log("before:" + count);
		setCount(count + 1);
		console.log(new Date().getTime());
		console.log("after:" + count);
        console.groupEnd();
        // setTimeout(() => {
        //     console.group('async---')
		// 	console.log("--setTimeout----");
		// 	console.log("before:" + count);
		// 	setCount(count + 1);
		// 	console.log(new Date().getTime());
        //     console.log("after:" + count);
        //     console.groupEnd();
		// }, 1000);
		setCount((preSatate) => {
			console.log(preSatate);
			return preSatate+1
		})
	};
	useEffect(() => {
		console.log("--OtherItemdidmount");
	}, []);
	useEffect(() => {
		console.log("SonOtherCount:" + count);
	}, [count]);
	console.log("----OtherRender:" + count);
	return (
		<div>
            ohther sonItem { new Date().getTime()}<button onClick={handleClick}> count:{count}</button>
		</div>
	);
};
const SonItem = (props) => {
	console.log(props);
	console.log("---son--render");
	useEffect(() => {
		console.log("--sonItemrdidmount");
	}, []);
	return <div>count:{props.count}</div>;
};

const TestSonComponent = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount(count + 1);
	};
	console.log("parent");
	useEffect(() => {
		console.log("didmount----parent");
	}, []);
	return (
		<div className="parent container">
			<h1>父子組件測試案例</h1>
			<button onClick={handleClick}>click</button>
			<SonItem count={count} />
			<SonItemOther />
		</div>
	);
};

export default TestSonComponent;
