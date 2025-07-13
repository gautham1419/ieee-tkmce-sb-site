import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active: number;
  circle: Circle;
}

interface Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;
  draw: () => void;
}

interface Target {
  x: number;
  y: number;
}

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

    // Initialize points
    const initPoints = () => {
      const points: Point[] = [];
      
      // Reduce density for better performance
      for (let x = 0; x < width; x += width / 15) {
        for (let y = 0; y < height; y += height / 15) {
          const px = x + (Math.random() * width) / 15;
          const py = y + (Math.random() * height) / 15;
          const point: Partial<Point> = { 
            x: px, 
            originX: px, 
            y: py, 
            originY: py,
            closest: [],
            active: 0
          };
          points.push(point as Point);
        }
      }

      // Find closest points for each point
      points.forEach((p1, i) => {
        const closest: Point[] = [];
        points.forEach((p2, j) => {
          if (i !== j) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                } else if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        });
        p1.closest = closest;
      });

      // Create circles for points
      points.forEach(point => {
        const circle: Circle = {
          pos: point,
          radius: 1 + Math.random() * 2,
          color: 'rgba(156,217,249,0.3)',
          active: 0,
          draw() {
            if (!this.active) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(156,217,249,${this.active})`;
            ctx.fill();
          }
        };
        point.circle = circle;
      });

      return points;
    };

    const getDistance = (p1: Point | Target, p2: Point | Target): number => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    const drawLines = (p: Point) => {
      if (!p.active) return;
      p.closest.forEach(closestPoint => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
    };

    const shiftPoint = (p: Point) => {
      const animate = () => {
        const targetX = p.originX - 30 + Math.random() * 60;
        const targetY = p.originY - 30 + Math.random() * 60;
        const duration = 2000 + Math.random() * 2000;
        const startTime = Date.now();
        const startX = p.x;
        const startY = p.y;

        const update = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;

          p.x = startX + (targetX - startX) * easeProgress;
          p.y = startY + (targetY - startY) * easeProgress;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            setTimeout(animate, 100);
          }
        };
        update();
      };
      animate();
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

        drawLines(point);
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
      pointsRef.current = initPoints();
      pointsRef.current.forEach(shiftPoint);
    };

    // Initialize
    targetRef.current = { x: width / 2, y: height / 2 };
    pointsRef.current = initPoints();
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