//要求：使用JS写圆周运动
import React, { useState, useRef,useEffect } from 'react';
import './style.scss';

function PaintingGarden(props) {

    let angle = 0;
    const center = {centerX:300,centerY:300}
    const dotRef = useRef(null)
    //方法一
    // setInterval(function(){
    //     angle += 1;
    //     const radian = (angle * Math.PI)/180;
    //     const L = Math.sin(radian) * 200;
    //     const T = Math.cos(radian) * 200;
    //     if(dotRef.current){
    //         dotRef.current.style.left = (center.centerX + L)+'px';
    //         dotRef.current.style.top = (center.centerX - T)+'px';
    //     } 
    // },160)

    //方法二
    const run = () => {
        angle += 1;
        const radian = (angle * Math.PI)/180
        const positionX = center.centerX + Math.sin(radian) * 200;
        const positionY = center.centerY - Math.cos(radian) * 200
        if(dotRef.current){
            dotRef.current.style.transform = 'translate('+ positionX +'px,'+positionY+'px)';
            
        }  
        window.requestAnimationFrame(run)
    }
    run()

    return (
        <div className='container'>
            <div className='container-dot' ref={dotRef}></div>
        </div>
    )
}

export default PaintingGarden