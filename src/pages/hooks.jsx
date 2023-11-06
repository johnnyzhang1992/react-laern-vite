import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import useDebouce from "../hooks/dedounce";

const HookItem = (props) => {
  const { count } = props;
  useEffect(() => {
    console.log("---effect--item--无依赖", count);
    return () => {
      console.log("---effect--item--return", count);
    };
  });
  console.log("I am rendering");
  return <p>子组件，count:{props.count}</p>;
};

function areEqual(prevProps, nextProps) {
  if (prevProps.count === nextProps.count) {
    return true;
  } else {
    console.log("---更新");
    return false;
  }
}

const MemoItem = React.memo(HookItem);

const TestHook = () => {
  const ref = useRef({});
  const [count, setCount] = useState(() => {
    console.log("---init--count");
    return 0;
  });
  // if (count > 2) {
  //     const [test, setTest] = useState('');
  // }
  const [num, setNum] = useState(0);
  const [testObj, updateObj] = useState({
    a: "a",
    b: "a",
  });
  useEffect(() => {
    console.log("--effect-无依赖");
    return () => {
      console.log("---effect--return");
    };
  });
  useEffect(() => {
    ref.current = count;
    console.log("--effect--空数组");
  }, []);

  useEffect(() => {
    ref.current = count;
    console.log(Date.now());
    console.log("---effect-依赖 count:" + count);
    return () => {
      console.log(Date.now());
      console.log("---ref.current:" + ref.current);
    };
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((preCount) => {
      return preCount + 1;
    });
  }, [count]);

  const debouceClick = useDebouce(handleClick, 100);
  console.dir(debouceClick);
  const handleClickNum = () => {
    setNum((preNum) => {
      return preNum + 1;
    });
    console.log("handleClick", num);
    // setTimeout(() => {
    // 	setNum((preNum) => {
    // 		return preNum + 1;
    // 	});
    // 	console.log("---timeout" + num);
    // });
  };
  const handleUpdateObj = () => {
    let date = new Date().getTime();
    testObj.a = "a" + date;
    testObj.b = "b" + date;
    updateObj({
      ...testObj,
    });
  };
  let date = new Date().getTime();
  testObj.a = "a" + date;
  testObj.b = "b" + date;
  useEffect(() => {
    console.log(testObj);
  }, [testObj]);
  useLayoutEffect(() => {
    console.log("----layoutEffect");
  });
  useLayoutEffect(() => {
    console.log("----layoutEffect", count);
  }, [count]);
  console.log("----rerender---");
  console.log("--num:" + num);
  return (
    <div className="container">
      <div>
        Count:{count}
        <button onClick={debouceClick}>+</button>
        <HookItem count={count} />
      </div>
      <div>
        num:{num}
        <button onClick={handleClickNum}>+</button>
        <HookItem count={num} />
        <MemoItem count={num} />
      </div>
      <div>
        num:{JSON.stringify(testObj)}
        <button onClick={handleUpdateObj}>更新</button>
      </div>
    </div>
  );
};

export default TestHook;
