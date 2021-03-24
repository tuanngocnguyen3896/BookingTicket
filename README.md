# useMemo

# useCallBack
# useRef

# HOC 
 Component (parent) nhận vào 1 component khác (child) => biến (child) thành 1 component mới
 1. Ở ParentComponent import vào ChildComponent, nhưng ta không thể thêm nội dung gì ở trong component này => giao diện k đổi
 2. Vậy nên ở ChildComponent ta phải dùng {props.children} để nhận các nội dung của ParentComponet
 3. Tại ParentComponent , ta có thể thêm vào  ChildComponent các params và ở ChildComponent ta có thể bóc tách các params này ra bằng {props.tenParam}

 # Template : là các giao diện k đổi 
 Thường thì các trang đều có phần header và footer 
 Nhưng 1 số trang thì không có, chỉ có phần form (Login, Register)
 => Ứng dụng HOC để tạo ra 1 Component xử lí vấn đề trên
 1. HomeTemplate
    Tại App.js ta tạo ra 1 Route  : HomeTemplate exact path='/home' Component={Home} / 
    **** Chú ý: - Component viết hoa 
                - exact, patch ở đây tương tự như các Params của component
 2. Tại HomeTemplate Component 
    Ta bóc tách các Params: let{Component,...restRoute} = props;
     trả vể 1 Route {...restParam}, Route này render về {***1(propsRoute) => {   
         return    
                Header        
                ***2  Component {...propsRoute} />
                Footer

     }}

    ***1 ở đây dùng arrow function để ta có thể code xử lí thêm vào nội dung
    ***2 Component này chính là component mà ta truyền vào ở App.js, thay vì dùng Route giờ muốn trang nào có các thành phần Header và Footer thì ở App.js ta chỉ việc tạo ra HomeTemplate rồi truyền vào Component trang ta muốn
    Tương tự ta có thể tạo ra các trang khác như là LoginTemplate, RegisterTemplate
