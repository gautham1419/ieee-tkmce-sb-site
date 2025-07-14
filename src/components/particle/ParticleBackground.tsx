import { useEffect, useRef } from 'react';
import { gsap, Circ } from 'gsap';

// Define types for better readability and safety
interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active: number;
  circle: Circle;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;
  ctx: CanvasRenderingContext2D;

  constructor(pos: Point, rad: number, color: string, ctx: CanvasRenderingContext2D) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
    this.ctx = ctx;
  }

  draw() {
    if (!this.active) return;
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    this.ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const largeHeaderRef = useRef<HTMLDivElement>(null); // Assuming a parent div for size reference

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    targetRef.current = { x: width / 2, y: height / 2 };

    const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const shiftPoint = (p: Point) => {
      gsap.to(p, {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        duration: 1 + Math.random(),
        ease: Circ.easeInOut,
        onComplete: () => {
          shiftPoint(p);
        },
      });
    };

    const drawLines = (p: Point) => {
      if (!p.active) return;
      for (const i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    };

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Create points
      pointsRef.current = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + (Math.random() * width) / 20;
          const py = y + (Math.random() * height) / 20;
          const p: Point = { x: px, originX: px, y: py, originY: py, closest: [], active: 0, circle: null! };
          pointsRef.current.push(p);
        }
      }

      // For each point find the 5 closest points
      for (let i = 0; i < pointsRef.current.length; i++) {
        const p1 = pointsRef.current[i];
        const closest: Point[] = [];
        for (let j = 0; j < pointsRef.current.length; j++) {
          const p2 = pointsRef.current[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed && !closest[k]) {
                closest[k] = p2;
                placed = true;
              }
            }
            for (let k = 0; k < 5; k++) {
              if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Assign a circle to each point
      for (const i in pointsRef.current) {
        const p = pointsRef.current[i];
        p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)', ctx);
      }

      // Start animation
      pointsRef.current.forEach(p => shiftPoint(p));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const i in pointsRef.current) {
        const p = pointsRef.current[i];
        const dist = Math.abs(getDistance(targetRef.current, p));
        if (dist < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (dist < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (dist < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }
        drawLines(p);
        p.circle.draw();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    const mouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const resize = () => {
      initHeader();
    };

    initHeader();
    animate();

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
      gsap.killTweensOf(pointsRef.current);
    };
  }, []);

  return (
    <div ref={largeHeaderRef} className="absolute inset-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default ParticleBackground;