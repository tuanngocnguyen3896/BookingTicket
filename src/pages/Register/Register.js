import React, { Component } from 'react'

export default class Register extends Component {
    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen:''
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen:''
        }
    }
    handleChangeValue = (e) => {
        const {name,value} = e.target;
        let newValues = {...this.state.values};
        newValues[name] = value;
        let newErrors = {...this.state.errors};
        let erro = '';
        newErrors[name] = erro;
        if(value.trim() === ''){
            erro = name + ' không được bỏ trống';
            console.log(erro)
        }else{
            erro = '';
        }
        this.setState({
            values: newValues,
            errors: newErrors
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        // Lỗi khi valid không hợp lệ
        // + khi bất kì thuộc tính nào của errors !== '' => lỗi
        // hoặc + bất kì thuộc tính nào của values === ''
        for(let keyErr in this.state.errors){
            if(this.state.errors[keyErr] !== ''){
                valid = false;
            }
        }
        for(let keyVal in this.state.values){
            if(this.state.values[keyVal] === ''){
                valid = false;
            }
        }
        if(!valid){
            alert("k hop le");
            return
        }
        alert("thanh cong")
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="display-4">Đăng Ký</div>
                <div className="form-group">
                    <p>Tài Khoản</p>
                    <input value={this.state.values.taiKhoan} onChange={this.handleChangeValue} name="taiKhoan" className="form-control" />
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                    <p>Họ Tên</p>
                    <input value={this.state.values.hoTen} onChange={this.handleChangeValue} name="hoTen" className="form-control" />
                    <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                    <p>Mật Khẩu</p>
                    <input value={this.state.values.matKhau} onChange={this.handleChangeValue} name="matKhau" className="form-control" />
                    <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input value={this.state.values.email} onChange={this.handleChangeValue} name="email" className="form-control" />
                    <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                    <p>Số Điện Thoại</p>
                    <input value={this.state.values.soDienThoai} onChange={this.handleChangeValue} name="soDienThoai" className="form-control" />
                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                   <button type="submit" className="btn btn-success">Đăng Ký</button>
                </div>
            </form>
        )
    }
}
