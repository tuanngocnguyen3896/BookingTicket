import React, { useRef, useState } from 'react'

export default function UseRef(props) {
    let [number,setNumber] = useState(1);
    
    // cách thường dùng
    // let mess = '';
    // console.log(mess); => mess ở đây luôn = '' vì khi render lại giao diện component sẽ chạy từ trên xuống dưới theo thứ tự
    
    let messRef = useRef('');
    console.log({messRef}); // => 'dl trả về đã thay đổi' -----
    return (
        <div className="text-center">
            {number} <br/>
            <button className="btn btn-danger" onClick={()=>{
                setNumber(number+1);
                messRef.current = 'dl trả về đã thay đổi';
                console.log(messRef);
            }}>+</button>
        </div>
    )
}
