import React, { useState, useEffect, useCallback ,useRef,useLayoutEffect} from "react";

const HookItem = (props) => {
	useEffect(() => {
        console.log("---effect--item--无依赖");
        return () => {
            console.log('---effect--destory--item')
        }
	}, [props.count]);
    console.log("I am rendering", props.count);
    useLayoutEffect(() => {
        console.log('layoutEffect----item')
        return () => {
            console.log('---layoutEffect--item--destory')
        }
    })
    return <p>字组件，count:{props.count}</p>;
    
};

// function areEqual(prevProps, nextProps) {
// 	if (prevProps.count === nextProps.count) {
// 		return true;
// 	} else {
// 		console.log("---更新");
// 		return false;
// 	}
// }

// const MemoItem = React.memo(HookItem);

const EffectTest = () => {
	const ref = useRef({});
	const [count, setCount] = useState(() => {
		console.log('---init--count')
		return 0;
	});
    // if (count > 2) {
    //     const [test, setTest] = useState('');
    // }
	// const [num, setNum] = useState(0);
	useEffect(() => {
        console.log("--effect-无依赖1");
        let timer = setTimeout(() => {
            console.log('timeout---1');
        }, 30)
        return () => {
            console.log('---effect--destory--1')
            clearTimeout(timer)
        }
    });
	useEffect(() => {
        console.log("--effect-无依赖2");
        let timer = setTimeout(() => {
            console.log('timeout---2');
        }, 20)
        return () => {
            console.log('---effect--destory--2')
            clearTimeout(timer)
        }
    });
	useEffect(() => {
        console.log("--effect-无依赖3");
        let timer = setTimeout(() => {
            console.log('timeout---3');
        }, 10)
        return () => {
            console.log('---effect--destory--3')
            clearTimeout(timer)
        }
    });
    
	useEffect(() => {
		ref.current = count;
		console.log("--effect--空数组");
	}, []);
	useEffect(() => {
		ref.current = count;
		console.log(Date.now())
		console.log("---effect-依赖 count:"+count);
        return () => {
            console.log('---effect--destory--count')
			console.log(Date.now())
			console.log('---ref.current:'+ref.current);
		}
	}, [count]);

	const handleClick = useCallback(() => {
		setCount((preCount) => {
			return preCount + 1;
		});
	}, [count]);
    console.log('----rerender---', count)
    useLayoutEffect(() => {
        console.log('layoutEffect----')
        return () => {
            console.log('---layoutEffect--destory')
        }
    })
    useLayoutEffect(() => {
        console.log('layoutEffect----1')
        return () => {
            console.log('---layoutEffect--destory1')
        }
    })
    console.log('---render')
	return (
		<div className="container">
			<div>
				Count:{count}
				<button onClick={handleClick}>+</button>
				<HookItem count={count} />
			</div>
		</div>
	);
};

export default EffectTest;
