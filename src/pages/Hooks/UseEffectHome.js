import React, { useState, useEffect } from "react";
import axios from "axios";
// làm trang chủ tương tự class Home
export default function UseEffectHome() {
  const [arrPhim, setArrPhim] = useState([]);
  // useEffect phải đặt trước return
  // nhân vào 2 tham số:
  // + tham số 1 là hàm chạy sau khi component render
  // + tham số 2 chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
  // ghi chú : 1 compo có thể gọi nhiều useEffect
  useEffect(() => {
    loadPhim();
    return () => {
        // hàm này sẽ kích hoạt khi component mất khỏi giao diện
    }
  }, []);

  const loadPhim = async () => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      setArrPhim(result.data);
      console.log(result.data);
    } catch (errors) {
      console.log(errors.data);
    }
  };

  const renderPhim = () => {
    return arrPhim.map((phim, index) => {
      return (
        <div key={index} className="col-4">
          <div className="card text-white bg-primary">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              width={200}
              height={280}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <button className="btn btn-success">Đặt vé</button>
            </div>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div className="container">
      <button onClick={() => loadPhim()} className="btn btn-danger">
        Lấy danh sách phim
      </button>
      <h4>Danh Sách Phim</h4>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
