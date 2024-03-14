"use client";
import { P5CanvasInstance, SketchProps, type Sketch } from "@p5-wrapper/react";
// @ts-ignore
import { NextReactP5Wrapper } from "@p5-wrapper/next";
type Props = {};

const sketch: Sketch = (p5: P5CanvasInstance<SketchProps>) => {
  let startX: any, startY: any;
  let controlX1, controlY1, controlX2, controlY2;
  let endX: any, endY: any;
  let angle = 0;
  let speedX = 0;
  let speedY = 0;
  let limit = 80;
  let reverse = 1;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth > 640 ? p5.windowWidth : 640, p5.windowHeight);
    startX = -50;
    startY = p5.height / 2;
    endX = p5.width + 50;
    endY = p5.height / 2;
    console.log("🚀 ~ p5.windowWidth > 640 ? p5.windowWidth : 640:", p5.windowWidth > 640 ? p5.windowWidth : 640);
  };
  p5.draw = () => {
    p5.background(255, 242, 216);
    // Calculate control points based on sine wave
    controlX1 = p5.width / 2 + p5.cos(angle) * (p5.width / 2);
    controlY1 = p5.height / 2 - speedX + p5.sin(angle) * (p5.height / 2);
    // if(frameCount % 360 == 0){
    controlX2 = p5.width - speedX + p5.cos(angle) * (p5.width / 2);
    controlY2 = p5.height - speedX + p5.sin(angle) * (p5.height / 2);
    // }
    // Draw the point
    p5.fill(0);
    // ellipse(controlX1, controlY1, 10, 10);
    // line(startX, startY, controlX1, controlY1)
    // line(endX, endY, controlX2, controlY2)

    // Draw the bezier curve
    p5.stroke(17, 57, 70);
    // p5.stroke(17, 57, 70, 180);
    // p5.stroke("#b59c78");
    p5.strokeWeight(4);
    p5.noFill();
    p5.bezier(startX, startY + p5.mouseY * 0.03, controlX1, controlY1, controlX2, controlY2, endX, endY - p5.mouseY * 0.0);
    p5.bezier(startX, startY / 1.3 + p5.mouseY * 0.04, controlX1, controlY1 + speedX, controlX2 + speedX, controlY2 + speedX, endX, endY / 1.3 - p5.mouseY * 0.0);
    // bezier(startX, startY/1.6 + (mouseY*0.5), controlX1, controlY1 + speedX*2, controlX2 + speedX*2, controlY2+speedX*2, endX, endY/1.6 - (mouseY*0.0));
    // Update angle for the waving effect
    angle += 0.005;
    speedX += reverse;

    // Check if the object reaches the limit
    if (speedX > limit || speedX < 0) {
      // Reverse the speed
      reverse *= -1;
      limit = p5.random(50, p5.width);
    }
  };
};

const TwoLinesCanvas = (props: Props) => {
  return <NextReactP5Wrapper sketch={sketch} />;
};

export default TwoLinesCanvas;
