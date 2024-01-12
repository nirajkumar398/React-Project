import React, { useRef, useEffect, useState } from "react";
import "./style.css";
const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [erase, setErase] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      isDrawing = true;
      [lastX, lastY] = getMousePos(canvas, e);
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const [x, y] = getMousePos(canvas, e);

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      [lastX, lastY] = [x, y];
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, [color]);

  const getMousePos = (canvas, e) => {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="whiteboard-container">
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-picker"
      />
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="canvas"
      ></canvas>
    </div>
  );
};

export default Whiteboard;
