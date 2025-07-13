import { Point, Target } from './types';

export const getDistance = (p1: Point | Target, p2: Point | Target): number => {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
};

export const initPoints = (width: number, height: number): Point[] => {
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

  return points;
};

export const shiftPoint = (p: Point) => {
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