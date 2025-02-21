import { useState, useEffect, useRef } from "react";
import { DrawingTools } from "./DrawingTools";

export const DrawBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });
  const [color, setColor] = useState("black");
  const [fillColor,setFillColor] = useState("black");
  const [size, setSize] = useState(2);

  useEffect(() => {
    const updateSize = () => {
      setCanvasSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setLastPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLastPos({ x, y });
  };
  const stopDrawing = () => {
    setIsDrawing(false);
  };
  const fillCanvas =() =>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = fillColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
  const downloadCanvas =() =>{
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = "drawing.png";
    link.click();
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <DrawingTools
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        fillCanvas={fillCanvas}
        fillcolor={fillColor}
        setFillColor={setFillColor}
        clearCanvas={clearCanvas}
        downloadCanvas={downloadCanvas}
        
      />
      <div className="w-[80vw] h-[80vh] flex justify-center items-center border border-black">
  <canvas
    ref={canvasRef}
    width={window.innerWidth * 0.8} // 80% of screen width
    height={window.innerHeight * 0.8} // 80% of screen height
    className="border border-black"
    onMouseDown={startDrawing}
    onMouseMove={draw}
    onMouseUp={stopDrawing}
    onMouseOut={stopDrawing}
  />
</div>

    </div>
  );
};
