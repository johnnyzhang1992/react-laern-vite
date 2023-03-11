import React, { useContext}from "react";

import { ThemeContext } from "../../contexts/theme-context";

const TestComsumer = () => {
    const context = useContext(ThemeContext);
    console.log(context);
    return <p>{ context.background || ''}</p>;
};
export default TestComsumer;