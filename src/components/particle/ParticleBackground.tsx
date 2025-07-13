import { useEffect, useRef } from 'react';
import { Point, Target } from './types';
import { initPoints, shiftPoint, getDistance } from './utils';
import { createCircle, drawLines } from './drawing';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const targetRef = useRef<Target>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    // Initialize points and create circles
    const initializePoints = () => {
      const points = initPoints(width, height);
      
      // Create circles for points
      points.forEach(point => {
        point.circle = createCircle(point, ctx);
      });

      return points;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      pointsRef.current.forEach(point => {
        const distance = Math.abs(getDistance(targetRef.current, point));
        
        if (distance < 4000) {
          point.active = 0.3;
          point.circle.active = 0.6;
        } else if (distance < 20000) {
          point.active = 0.1;
          point.circle.active = 0.3;
        } else if (distance < 40000) {
          point.active = 0.02;
          point.circle.active = 0.1;
        } else {
          point.active = 0;
          point.circle.active = 0;
        }

        drawLines(point, ctx);
        point.circle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      pointsRef.current = initializePoints();
      pointsRef.current.forEach(shiftPoint);
    };

    // Initialize
    targetRef.current = { x: width / 2, y: height / 2 };
    pointsRef.current = initializePoints();
    pointsRef.current.forEach(shiftPoint);
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;