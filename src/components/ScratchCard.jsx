import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const ScratchCard = ({ title, content, overlayColor = '#0d1b3c', textColor = '#ffffff' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Set canvas size with device pixel ratio
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale context for high DPI displays
    ctx.scale(dpr, dpr);

    // Draw overlay
    ctx.fillStyle = overlayColor;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add text to overlay
    ctx.fillStyle = textColor;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(title, rect.width / 2, rect.height / 2 - 20);

    ctx.font = '14px Arial';
    ctx.fillStyle = textColor;
    ctx.opacity = 0.8;
    ctx.fillText('Scratch to reveal', rect.width / 2, rect.height / 2 + 20);

    // (Removed decorative square pattern for a cleaner card background)
  }, [title, overlayColor, textColor]);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const brushRadius = 50;

    // Create smooth circular eraser with gradient
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushRadius);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Check if enough of the canvas is scratched (40% for easier reveal)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 100) {
        transparentPixels++;
      }
    }

    const revealPercentage = (transparentPixels / (data.length / 4)) * 100;

    if (revealPercentage > 40) {
      setIsRevealed(true);
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    let x, y;

    if (e.touches) {
      x = (e.touches[0].clientX - rect.left) * dpr;
      y = (e.touches[0].clientY - rect.top) * dpr;
    } else {
      x = (e.clientX - rect.left) * dpr;
      y = (e.clientY - rect.top) * dpr;
    }

    return { x, y };
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const coords = getCoordinates(e);
    if (coords) scratch(coords.x, coords.y);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    if (coords) scratch(coords.x, coords.y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleTouchStart = (e) => {
    setIsDrawing(true);
    const coords = getCoordinates(e);
    if (coords) scratch(coords.x, coords.y);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getCoordinates(e);
    if (coords) scratch(coords.x, coords.y);
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"
    >
      {/* Hidden Content */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 p-6 flex flex-col items-start justify-start overflow-hidden">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line overflow-y-auto text-left">{content}</p>
        </div>
      </div>

      {/* Scratch Overlay Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isRevealed ? 'default' : 'pointer' }}
      />

      {/* Revealed State */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-white/5 pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default ScratchCard;
