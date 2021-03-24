import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import { layDanhSachPhimAction } from "../../redux/actions/PhimActions";
import { NavLink } from "react-router-dom";
class Home extends Component {
  // state = {
  //   arrFilms: [],
  // };
  loadFilm = () => {
    this.props.dispatch(layDanhSachPhimAction());
  };
  renderFilms = () => {
    return this.props.mangPhim.map((film, index) => {
      return (
        <div key={index} className="col-4 mb-4">
          <div className="card text-white bg-dark">
            <img
              className="card-img-top"
              width={280} height={280}
              src={film.hinhAnh}
              alt={film.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <NavLink className="btn btn-success" to={`details/${film.maPhim}`} >Đặt vé</NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        Home
        <button
          onClick={() => {
            this.loadFilm();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">
          Danh Sách Phim
          <div className="row">{this.renderFilms()}</div>
        </div>
      </div>
    )
  }

  // Hàm giống hàm reder của react component kế thừa
  componentDidMount(){
    // các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    this.loadFilm();
  }
  
}
const mapStateToProps = state =>({
  mangPhim: state.PhimReducer.mangPhim,
})
export default connect (mapStateToProps,null)(Home);