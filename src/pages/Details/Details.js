import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { LayThongTinPhimAction } from "../../redux/actions/PhimActions";
export default function Details(props) {
    const {chiTietPhim} = useSelector (state => state.PhimReducer);
    // tự gọi api khi load trang
    const dispatch = useDispatch();
   useEffect( () => {
      let {id} = props.match.params;
      dispatch(LayThongTinPhimAction(id))
   },[])
   
   return (
    <div className="container">
      ID: {props.match.params.id}
      <div className="row mt-5">
        <div className="col-6">
          <img className="w-100" src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim}></img>
        </div>
        <div className="col-6">
          <table className="table" style={{fontSize: '14px'}}>
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô Tả</th>
                <th>
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quaerat inventore omnis aut odit officiis et sunt
                  dicta accusantium quo quas delectus a eius harum error fugit
                  vel repudiandae officia nostrum obcaecati modi, nesciunt
                  voluptate. Ratione libero reiciendis culpa unde?
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
