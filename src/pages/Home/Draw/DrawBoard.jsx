import { useState, useEffect, useRef } from "react";

export const DrawBoard = ()=>{
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState({x:0, y:0});

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return ()=>{
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    },[])

    const startDrawing = (e) =>{
        setIsDrawing(true);
        const rect = canvasRef.current.getBoundingClientRect();
        setLastPos({
            x:e.clientX - rect.left,
            y:e.clientY - rect.top,
        });
    }

        const draw = (e)=>{
            if(!isDrawing) return;
            const ctx = canvasRef.current.getContext('2d');
            const rect = canvasRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ctx.beginPath();
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(x, y);
            ctx.stroke();
            setLastPos({x,y});
        }
        const stopDrawing = () => {
            setIsDrawing(false);
          };
    
    return(
        <>
        <canvas
        ref = {canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp = {stopDrawing}
        onMouseOut = {stopDrawing}
        style={{border: '1px solid black'}}
        >
        </canvas>

        </>
    )
}