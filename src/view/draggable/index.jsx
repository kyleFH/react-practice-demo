/* 拖拽组件
1.监听 

*/

import React, { useState, useRef,useEffect } from 'react';
import './style.scss';

function Draggable(props){
    let isDrag = false;
    let startPointValue = {startX:0,startY:0};
    let startTransform ={TransformX:0,TransformY:0};;
    const dotRef = useRef(null)
    const onMouseDown = (e) => {
        isDrag = true;
        if(dotRef.current.style.transform != ''){
            const matrixArr = dotRef.current.style.transform.replace(/[^0-9\-,]/g, "").split(",");
            startTransform.TransformX = matrixArr[0]
            startTransform.TransformY = matrixArr[1]
        }
        startPointValue.startX = e.clientX;
        startPointValue.startY = e.clientY;
    }

    const onMouseUp = (e) => {
        isDrag = false;
        console.log('onMouseUp',e)
    }

    const onMouseMove = (e) => {
        if(!isDrag) return;
        const moveX = e.clientX - startPointValue.startX  + Number(startTransform.TransformX);
        const moveY = e.clientY - startPointValue.startY + Number(startTransform.TransformY);
        dotRef.current.style.transform = 'translate('+ moveX +'px,'+ moveY + 'px)';
    }


    return (
        <div className="container" 
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        >
            <div 
            className='container-dot' 
            ref={dotRef} 
            onMouseDown={onMouseDown}
            ></div>
        </div>
    )

}

export default Draggable;
