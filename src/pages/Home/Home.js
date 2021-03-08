import React, { Component } from "react";
import axios from "axios";
export default class Home extends Component {
  state = {
    arrFilms: [],
  };
  loadFilm = () => {
    const promise = axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
    // xử lí thành công
    promise.then((result) => {
      console.log("result:", result.data);
      this.setState({
        arrFilms: result.data,
      });
    });
    // xử lí khi requset bị lỗi
    promise.catch((error) => {
      console.log("err:", error.response.data);
    });
  };
  renderFilms = () => {
    return this.state.arrFilms.map((film, index) => {
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
