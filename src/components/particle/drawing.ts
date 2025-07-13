import { Point, Circle } from './types';
import { getDistance } from './utils';

export const createCircle = (point: Point, ctx: CanvasRenderingContext2D): Circle => {
  // Create varied cosmic colors
  const colors = [
    'rgba(156,217,249,0.8)', // Light blue
    'rgba(255,255,255,0.9)', // White stars
    'rgba(147,197,253,0.7)', // Sky blue
    'rgba(219,234,254,0.6)', // Very light blue
    'rgba(99,179,237,0.8)'   // Medium blue
  ];
  const colorIndex = Math.floor(Math.random() * colors.length);
  
  const circle: Circle = {
    pos: point,
    radius: 0.5 + Math.random() * 2.5, // Varied star sizes
    color: colors[colorIndex],
    active: 0,
    draw() {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      
      // Create star-like glow effect
      const gradient = ctx.createRadialGradient(
        this.pos.x, this.pos.y, 0,
        this.pos.x, this.pos.y, this.radius * 3
      );
      gradient.addColorStop(0, `rgba(255,255,255,${this.active})`);
      gradient.addColorStop(0.4, `rgba(156,217,249,${this.active * 0.6})`);
      gradient.addColorStop(1, `rgba(156,217,249,0)`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add twinkle effect for some stars
      if (Math.random() > 0.95) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius * 0.3, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255,255,255,${this.active * 1.5})`;
        ctx.fill();
      }
    }
  };
  
  return circle;
};

export const drawLines = (p: Point, ctx: CanvasRenderingContext2D) => {
  if (!p.active) return;
  p.closest.forEach(closestPoint => {
    const distance = getDistance(p, closestPoint);
    const maxDistance = 10000; // Adjust connection distance
    
    if (distance < maxDistance) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      
      // Create gradient for cosmic connection lines
      const gradient = ctx.createLinearGradient(p.x, p.y, closestPoint.x, closestPoint.y);
      gradient.addColorStop(0, `rgba(156,217,249,${p.active * 0.8})`);
      gradient.addColorStop(0.5, `rgba(99,179,237,${p.active * 0.6})`);
      gradient.addColorStop(1, `rgba(147,197,253,${closestPoint.active * 0.8})`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.3 + (p.active * 0.7); // Variable line width
      ctx.stroke();
      
      // Add occasional bright pulse effect
      if (Math.random() > 0.98) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `rgba(255,255,255,${p.active * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  });
};