import React, { useState, useCallback } from "react";
import Comment from "./Comment";
export default function UseCallBack() {
  let [like, setLike] = useState(1);

  let renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };
  // useCallback(renderNotify,[*],) => giao diện sẽ render lại nếu có giá trị thay đổi
  //   const callbackRenderNotify = useCallback(renderNotify,[like],); // => giao diện bị render lại
  const callbackRenderNotify = useCallback(renderNotify, []); // => không render lại

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={callbackRenderNotify} />
    </div>
  );
}
