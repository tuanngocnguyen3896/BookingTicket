import React, { useState, useEffect } from "react";
import {connect , useSelector ,useDispatch} from 'react-redux';
import { layDanhSachPhimAction } from "../../redux/actions/PhimActions";
export default function ReduxHookHome(props) {
    // const [arrPhim, setArrPhim] = useState([]);
    
    // useSelector là hook để lấy dl từ reducer về
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim);
    // console.log(mangPhim);
    // useDispatch tương tự this.props.dispatch
    const dispatch = useDispatch();
    
    const renderPhim = () => {
      return mangPhim.map((phim, index) => {
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
     // useEffect phải đặt trước return
    // nhân vào 2 tham số:
    // + tham số 1 là hàm chạy sau khi component render
    // + tham số 2 chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
    // ghi chú : 1 compo có thể gọi nhiều useEffect
    useEffect(() => {
        dispatch(layDanhSachPhimAction())
        return () => {
            // hàm này sẽ kích hoạt khi component mất khỏi giao diện
        }
      }, []);
    return (
      <div className="container">
        <button className="btn btn-danger">
          Lấy danh sách phim
        </button>
        <h4>Danh Sách Phim</h4>
        <div className="row">{renderPhim()}</div>
      </div>
    );
}
