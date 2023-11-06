import React, { useCallback, useEffect, useRef } from "react";

const  useDebouce = (fn, wait) => {
    const { current } = useRef({ fn, timer: null });
    console.log(new Date());
	return useCallback(
		(...args) => {
			if (current.timer) {
				clearTimeout(current.timer);
			}
			current.timer = setTimeout(() => {
				current.fn.call(current.fn, ...args);
			}, wait || 20);
		},
		[current.fn, fn]
	);
};

const debouce = (fn, wait = 0) => {
	let timer = null;
	return (...args) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, args);
			clearTimeout(timer);
		}, wait);
	};
};

export default useDebouce;