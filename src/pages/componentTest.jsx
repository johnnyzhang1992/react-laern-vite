import React from "react";
import message from "../components/message";

const ComponentTest = () => {
  const showMessage = () => {
    message.open({
      type: "info",
      content: {
        text: "message test:消息测试",
        duration: 5000,
        canClose: true,
      },
    });
  };
  return (
    <div
      style={{
        margin: "40px 100px",
      }}>
      ComponentTest
      <button onClick={showMessage}>消息测试</button>
    </div>
  );
};
export default ComponentTest;
