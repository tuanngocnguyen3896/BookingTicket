import axios from 'axios';
export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        // gọi action openLoading
        dispatch({
            type: 'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            //sau khi lấy dl từ api về sử dụng hàm dispatch của redux thunk để đưa dl lên sever
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim:result.data
            })
            // tắt loading
            dispatch({
                type:'closeLoading'
            }) 
        },500);
        
    }
}
// lấy thong tin chi tiết phim
export const LayThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
       try{
        let result = await axios({
            url:  `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
            method:'GET'
        });
        // sau khi lát dl từ api về ta đưa dl lên reducer = dispatch
        dispatch({
            type: 'LAY_CHI_TIET_PHIM',
            chiTietPhim: result.data
        })
       }catch(errors){
            console.log(errors.data)
       }
    }
}