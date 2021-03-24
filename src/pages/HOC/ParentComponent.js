import React from 'react'
import Home from '../Home/Home'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent title="abc">
                
                <div className="text-center display-4">Trang chủ</div>
                <Home/>
            </ChildComponent>
        </div>
    )
}
