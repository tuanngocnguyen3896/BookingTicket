import React, { memo } from "react";
function Comment(props) {
    console.log("comment");
    return (
      <div>
          {props.renderNotify()} <br/>
        <textarea></textarea> <br />
        <button>Gửi</button>
      </div>
    );
}
// sử dụng memo để bao component lại, tác dụng tương tự như PureComponent
export default memo(Comment);
