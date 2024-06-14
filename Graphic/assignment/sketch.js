
let isAnimationStarted = false;
let x = 0;  // 初始化文本坐标
let lastTime = 0; // 存储上一次显示文本的时间
let texts = [];
let resetInterval; // 定时器
let logoX, logoY, targetX, targetY;

function preload() {
    logo = loadImage('crescendo_logo.png');
}

function setup() {
    createCanvas(1280, 720);
    background(245,245,245);
    angleMode(DEGREES);

    squareUpRight = new SquareUpRight();
    ball = new Ball();
    triangleUpLeft = new TriangleUpLeft();
    triangleDownRight = new TriangleDownRight();
    square1 = new Square1();
    square2 = new Square2();
    square3 = new Square3();
    square4 = new Square4();
    semiCircle = new SemiCircle();

    logoX = 420;
    logoY = -300;
    targetX = 420;
    targetY = 100;

    lastTime = millis();
}

function draw() {
    // 大四方 背景
    fill(255);
    noStroke();
    square(350, 60, 600);

    square1.drawSquare();
    square1.drawSkinTriangleScale();
    square1.adjustSize();
    square1.drawSkinTriangle1();
    square1.move1();
    square1.drawPentagon();

    square4.drawSquare();
    square4.drawSkinTriangle1();
    square4.move1();
    square4.drawSkinTriangleScale();
    square4.adjustSize();
    square4.drawPentagon(); 

    square2.drawSquare();
    square2.drawTriangleSkin();
    square2.adjustSize();

    square3.drawSquare();
    semiCircle.drawSemiCircle();
    semiCircle.updateRotation();

    // 盖掉多余的
    fill(255);
    noStroke();
    rect(810, 200, 140, 460);
    rect(350, 60, 460, 140);

    squareUpRight.drawSquare();
    ball.drawBall();
    ball.move();
    triangleUpLeft.drawTriangle();
    triangleUpLeft.adjustSize();
    triangleDownRight.drawTriangle();
    triangleDownRight.adjustPosition();

    // 盖掉多的
    noStroke();
    fill(245,245,245);
    rect(350, 0, 1240, 60);
    rect(0, 0, 350, 720);
    rect(0, 660, 1240, 60);
    rect(950, 0, 330, 720);

    let currentTime = millis();
    if (isAnimationStarted) {
        background(245,245,245);
        // 照片和文本
        if (currentTime - lastTime > 2350) {
            // 重置 lastTime 为当前时间
            lastTime = currentTime;
            texts.push(createVector(-500, 630)); // 将新文本添加到数组的底部
        }

        for (let i = 0; i < texts.length; i++) {
            let textPos = texts[i];
            fill(0);
            textSize(27);
            // textStyle(BOLD);
            text("Crescendo International College", textPos.x, textPos.y);
    
            // 更新文本位置
            textPos.x += 3;
            if (textPos.x > width) {
                // 如果文本移出屏幕，则将其从数组中移除
                texts.splice(i, 1);
                i--; // 将索引减一，以防止跳过下一个元素
            }
        }

        moveLogo();
        image(logo, logoX, logoY, 500, 400); 
        
        if (!resetInterval && currentTime > 5000) {
            resetInterval = setInterval(resetScene, 10000); // 每10秒检查一次是否需要重置
        }
    }
}

function moveLogo() {
    let speed = 2;

    if (logoY < targetY) {
        logoY += speed;
        if (logoY > targetY) {
            logoY = targetY;
        }
    }
}

function resetScene() {
    // 清除所有的文本
    texts = [];

    // 重置 lastTime 为当前时间
    lastTime = millis();

    // 重置 logo
    logoX = 420;
    logoY = -300;

    // 重置球
    ball.location = createVector(880, 590);
    ball.route = 1;
    ball.resetCount++;

    // 重置所有
    squareUpRight = new SquareUpRight();
    ball = new Ball();
    triangleUpLeft = new TriangleUpLeft();
    triangleDownRight = new TriangleDownRight();
    square1 = new Square1();
    square2 = new Square2();
    square3 = new Square3();
    square4 = new Square4();
    semiCircle = new SemiCircle();

    // 重置动画和间隔
    isAnimationStarted = false;
    clearInterval(resetInterval);
    resetInterval = null; // 清除值，以便稍后重新赋值
}

class SquareUpRight {
    drawSquare() {
        fill(107, 171, 255);
        square(810, 60, 140)
    }
}

class Ball {
    constructor() {
        this.location = createVector(880, 590); 
        this.radius = 140;
        this.velocity = createVector(0, -16); 
        this.acceleration = createVector(0, -0.03);
        this.horizontalDirection = 1; // 水平移动方向，1表示向右，-1表示向左
        this.verticalDirection = 0; // 垂直移动方向，0表示不移动，1表示向下
        this.horizontalSpeed = 6; 
        this.route = 1; // 运动路线阶段
    }

    drawBall() {
        fill(57, 245, 163);
        circle(this.location.x, this.location.y, this.radius);
    }

    move() {  
        switch (this.route) {
            case 1:
                // 垂直向上的运动
                if (this.location.y > 140) {
                    this.velocity.add(this.acceleration);
                    this.location.add(this.velocity);
                } else {
                    // 垂直运动停止，开始水平运动
                    this.velocity = createVector(0, 0); // 停止垂直运动
                    this.route = 2; // 切换到第二条路线
                }
                break;

            case 2:
                // 水平运动
                this.location.x += this.horizontalSpeed * this.horizontalDirection;

                // 达到屏幕边界时反向移动
                if (this.location.x <= 420 || this.location.x >= 1080) {
                    this.horizontalDirection *= -1;
                }

                // 到达指定位置停止水平运动，开始垂直运动
                if (this.location.x === 880 && this.horizontalDirection === 1) {
                    this.route = 3; // 切换到第三条路线
                    this.velocity.set(0, 6); // 设置向下移动的速度
                }
                break;

            case 3:
                // 垂直运动
                if (this.location.y < 570) {
                    this.location.add(this.velocity);
                } else {
                    this.route = 4; // 切换到第四条路线，即停止
                    this.velocity = createVector(0, 0); // 停止运动
                }
                break;

            case 4:
                if (!isAnimationStarted) {
                    isAnimationStarted = true;
                } // 开始播放 Logo 

                break;
        }
    } 
}

class TriangleUpLeft {
    constructor() {
        this.v1 = createVector(350, 60);
        this.v2 = createVector(350, 200);
        this.v3 = createVector(450, 120);
        this.originalV3X = this.v3.x; // Store original v3 x position
        this.startTime = millis();
        this.shrinkDuration = 1000; // 收缩阶段的持续时间
        this.shrinkAmount = 7.5; // 每帧缩小v3的x坐标的量
        this.isShrinking = false; // Flag to check if shrinking
        this.isGrowing = false; // Flag to check if growing back to original
    }

    drawTriangle() {
        fill(57, 245, 163);
        triangle(this.v1.x, this.v1.y, this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    }

    adjustSize() {
        let elapsedTime = millis() - this.startTime;

        if (elapsedTime > 2700 && !this.isShrinking && !this.isGrowing) {
            this.isShrinking = true;
        }

        if (this.isShrinking && this.v3.x > 350) {
            this.v3.x -= this.shrinkAmount;
        } else if (this.isShrinking && this.v3.x <= 350) {
            // growing back to original position
            this.isShrinking = false;
            this.isGrowing = true;
        }

        if (this.isGrowing && this.v3.x < this.originalV3X) {
            this.v3.x += this.shrinkAmount;
        } else if (this.isGrowing && this.v3.x >= this.originalV3X) {
            // restore to original state and reset
            this.v3.x = this.originalV3X;
            this.startTime = millis();
            this.isGrowing = false;
        }
    }
}

class TriangleDownRight {
    constructor() {
        this.v1 = createVector(880, 660); 
        this.v2 = createVector(810, 660);
        this.v3 = createVector(950, 660);
        this.targetY = 567; // Final y-coordinate
        this.originalY = this.v1.y; // Store original v1 y position
        this.startTime = millis();
        this.moveAmount = 7; // Amount to move v1's y coordinate per frame
        this.isMovingDown = false; 
        this.isMovingUp = false; 
    }

    drawTriangle() {
        fill(57, 245, 163);
        triangle(this.v1.x, this.v1.y, this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    }

    adjustPosition() {
        let elapsedTime = millis() - this.startTime;

        if (elapsedTime > 0 && !this.isMovingUp && !this.isMovingDown) {
            // moving up
            this.isMovingUp = true;
        }

        if (this.isMovingUp && this.v1.y > this.targetY) {
            this.v1.y -= this.moveAmount;
        } else if (this.isMovingUp && this.v1.y <= this.targetY) {
            this.isMovingUp = false;
        }

        if (elapsedTime > 5300 && !this.isMovingDown) {
            this.isMovingDown = true;
        }

        if (this.isMovingDown && this.v1.y < this.originalY) {
            this.v1.y += this.moveAmount;
        } else if (this.isMovingDown && this.v1.y >= this.originalY) {
            // restore to original state and reset
            this.v1.y = this.originalY;
            this.startTime = millis();
            this.isMovingDown = false;
        }
    }
}

class Square1 {
    constructor() {
        this.position = createVector(350, 200);
        this.size = 230;
        this.vertices = [  // pentagon
            createVector(350, 200),
            createVector(580, 430),
            createVector(280, 730),
            createVector(50, 730),
            createVector(50, 480)
        ];
        this.speed = 3;  // Speed of pentagon

        // triangle 1
        this.v1 = createVector(350, 200);
        this.v2 = createVector(580, 200);
        this.v3 = createVector(460, 300);

        // triangle 2
        this.v11 = createVector(580, 430);
        this.v12 = createVector(580, 430);
        this.v13 = createVector(580, 430);

        // Original and target positions
        this.originalV11 = createVector(580, 430);
        this.originalV13 = createVector(580, 430);
        this.targetV11 = createVector(580, 200);
        this.targetV13 = createVector(350, 430);

        this.shrinkAmount = 3; // Amount to move per frame
        this.startTime = millis(); // Record the start time
        this.state = 'waiting'; // Initial state
    }

    drawSquare() {
        fill(57, 245, 163);
        square(this.position.x, this.position.y, this.size);
    }

    drawPentagon() {
        fill(107, 171, 255);
        beginShape();
        for (let v of this.vertices) {
            vertex(v.x, v.y);
            // Move each vertex up-right by 'this.speed' pixels (45-degree angle)
            v.x += this.speed;
            v.y -= this.speed;
        }
        endShape(CLOSE);
    }

    drawSkinTriangle1(){
        fill(250, 250, 210);
        triangle(this.v1.x, this.v1.y, this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    }

    move1() {
        this.v1.y -= 1.5;
        this.v2.y -= 1.5;
        this.v3.y -= 1.5;
    }

    drawSkinTriangleScale() {
        fill(250, 250, 210);
        triangle(this.v11.x, this.v11.y, this.v12.x, this.v12.y, this.v13.x, this.v13.y);
    }

    adjustSize() {
        let elapsedTime = millis() - this.startTime;

        if (this.state === 'waiting' && elapsedTime > 100) {
            this.state = 'growing';
        }

        if (this.state === 'growing') {
            // Growing phase: move v11 and v13 to target positions
            if (this.v11.y > this.targetV11.y) {
                this.v11.y -= this.shrinkAmount; 
            }
            if (this.v13.x > this.targetV13.x) {
                this.v13.x -= this.shrinkAmount;
            }
            if (this.v11.y <= this.targetV11.y && this.v13.x <= this.targetV13.x) {
                // When growing is done, switch to shrinking after 5 seconds
                this.state = 'shrinkWait';
                this.startTime = millis(); // Reset timer for shrinking phase
            }
        }

        if (this.state === 'shrinkWait' && elapsedTime > 2000) {
            this.state = 'shrinking';
        }

        if (this.state === 'shrinking') {
            // Shrinking phase: move v11 and v13 back to initial positions
            if (this.v11.y < this.originalV11.y) {
                this.v11.y += this.shrinkAmount; 
            }
            if (this.v13.x < this.originalV13.x) {
                this.v13.x += this.shrinkAmount; 
            }
            if (this.v11.y >= this.originalV11.y && this.v13.x >= this.originalV13.x) {
                // When shrinking is done, reset to original state and start again
                this.state = 'shrinkWaitDone';
                this.startTime = millis(); // Reset timer for next cycle
            }
        }

        if (this.state === 'shrinkWaitDone' && elapsedTime > 4000) {
            this.state = 'waiting';
            this.startTime = millis(); // Reset timer for next cycle
        }
        
    }
}

class Square2 {
    constructor() {
        this.position = createVector(580, 200);
        this.size = 230;

        this.v1 = createVector(810, 200);
        this.v2 = createVector(580, 200);
        this.v3 = createVector(580, 430);

        this.originalV1 = this.v1.copy();
        this.originalV3 = this.v3.copy();
        this.startTime = millis();
        this.shrinkAmount = 3; 
        this.isShrinking = false; 
        this.isGrowing = false;
        this.targetV1 = createVector(580, 200); 
        this.targetV3 = createVector(580, 200); 
    }

    drawSquare() {
        fill(57, 245, 163);
        square(this.position.x, this.position.y, this.size);
    }

    drawTriangleSkin() {
        fill(250, 250, 210);
        triangle(this.v1.x, this.v1.y, this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    }

    adjustSize() {
        let elapsedTime = millis() - this.startTime;

        if (elapsedTime > 1600 && !this.isShrinking && !this.isGrowing) {
            this.isShrinking = true;
        }

        if (this.isShrinking) {
            // Shrinking phase: gradually move v1 and v3 to target positions
            if (this.v1.x > this.targetV1.x) {
                this.v1.x -= this.shrinkAmount;
            }
            if (this.v3.y > this.targetV3.y) {
                this.v3.y -= this.shrinkAmount;
            }
            if (this.v1.x <= this.targetV1.x && this.v3.y <= this.targetV3.y) {
                // When shrinking is done, reset startTime to prepare for the growing phase
                this.isShrinking = false;
                this.startTime = millis();
            }
        }

        if (elapsedTime > 3000 && !this.isShrinking && !this.isGrowing) {
            // Start growing
            this.isGrowing = true;
        }

        if (this.isGrowing) {
            // Growing phase: gradually move v1 and v3 back to original positions
            if (this.v1.x < this.originalV1.x) {
                this.v1.x += this.shrinkAmount;
            }
            if (this.v3.y < this.originalV3.y) {
                this.v3.y += this.shrinkAmount;
            }
            if (this.v1.x >= this.originalV1.x && this.v3.y >= this.originalV3.y) {
                // When growing is done, reset to original state
                this.isGrowing = false;
                this.startTime = millis();
            }
        }
    }
}

class Square3 {
    constructor() {
        this.position = createVector(350, 430);
        this.size = 230;
    }

    drawSquare() {
        fill(250,250,210);
        square(this.position.x, this.position.y, this.size);
    }
}

class Square4 {
    constructor() {
        this.position = createVector(580, 430);
        this.size = 230;

        this.vertices = [  // pentagon
            createVector(580, 430),
            createVector(810, 660),
            createVector(1110, 360),
            createVector(1110, 130),
            createVector(880, 130)
        ];
        this.speed = 3;  // speed of pentagon

        // triangle 1
        this.v1 = createVector(665, 520);
        this.v2 = createVector(480, 760);
        this.v3 = createVector(910, 760);

        // triangle 2
        this.v11 = createVector(580, 430);
        this.v12 = createVector(580, 430);
        this.v13 = createVector(580, 430);

        this.originalV11 = createVector(580, 430); 
        this.originalV13 = createVector(580, 430); 
        this.targetV11 = createVector(810, 430);
        this.targetV13 = createVector(580, 660);

        this.shrinkAmount = 3; 

        this.startTime = millis(); // Record the start time
        this.state = 'waiting'; // Initial state
    }

    drawSquare() {
        fill(57, 245, 163);
        square(this.position.x, this.position.y, this.size);
    }

    drawPentagon() {
        fill(107, 171, 255);
        beginShape();
        for (let v of this.vertices) {
            vertex(v.x, v.y);
            // Move each vertex up-right by 'this.speed' pixels (45-degree angle)
            v.x -= this.speed;
            v.y += this.speed;
        }
        endShape(CLOSE);
    }

    drawSkinTriangle1(){
        fill(250, 250, 210);
        triangle(this.v1.x, this.v1.y, this.v2.x, this.v2.y, this.v3.x, this.v3.y);
    }

    move1() {
        this.v1.y += 1.5;
        this.v2.y += 1.5;
        this.v3.y += 1.5;
    }

    drawSkinTriangleScale() {
        fill(250, 250, 210);
        triangle(this.v11.x, this.v11.y, this.v12.x, this.v12.y, this.v13.x, this.v13.y);
    }

    adjustSize() {
        let elapsedTime = millis() - this.startTime;

        if (this.state === 'waiting' && elapsedTime > 100) {
            this.state = 'growing';
        }

        if (this.state === 'growing') {
            // Growing phase: move v11 and v13 to target positions
            if (this.v11.x < this.targetV11.x) {
                this.v11.x += this.shrinkAmount;
            }
            if (this.v13.y < this.targetV13.y) {
                this.v13.y += this.shrinkAmount;
            }
            if (this.v11.x >= this.targetV11.x && this.v13.y >= this.targetV13.y) {
                // When growing is done, switch to shrinking after 2 seconds
                this.state = 'shrinkWait';
                this.startTime = millis(); // Reset timer for shrinking phase
            }
        }

        if (this.state === 'shrinkWait' && elapsedTime > 2000) {
            this.state = 'shrinking';
        }

        if (this.state === 'shrinking') {
            // Shrinking phase: move v11 and v13 back to initial positions
            if (this.v11.x > this.originalV11.x) {
                this.v11.x -= this.shrinkAmount;
            }
            if (this.v13.y > this.originalV13.y) {
                this.v13.y -= this.shrinkAmount;
            }
            if (this.v11.x <= this.originalV11.x && this.v13.y <= this.originalV13.y) {
                // When shrinking is done, switch to wait state before next grow
                this.state = 'shrinkWaitDone';
                this.startTime = millis(); // Reset timer for next cycle
            }
        }

        if (this.state === 'shrinkWaitDone' && elapsedTime > 4000) {
            this.state = 'waiting';
            this.startTime = millis(); // Reset timer for next cycle
        }
    }
}

class SemiCircle {
    constructor() {
        this.radius = 100;
        this.x = 465;
        this.y = 545;

        this.rotationAngle = 0;  // Initial rotation angle in degrees
        this.rotationSpeed = 1;  // Rotation speed in degrees per frame
        this.clockwise = true;  
    }

    updateRotation() {
        if (this.clockwise) {
            // Clockwise rotation, angle between -90 and 90 degrees
            this.rotationAngle += this.rotationSpeed;
            if (this.rotationAngle > 90) {
                this.clockwise = false;  // Switch to counterclockwise after reaching 90 degrees
            }
        } else {
            // Counterclockwise rotation, angle between 90 and -90 degrees
            this.rotationAngle -= this.rotationSpeed;
            if (this.rotationAngle < -90) {
                this.clockwise = true;  // Switch to clockwise after reaching -90 degrees
            }
        }
    }

    drawSemiCircle() {
        // Draw left semi-circle
        fill(57, 245, 163);
        arc(this.x, this.y, this.radius * 2, this.radius * 2, 90 + this.rotationAngle, 270 + this.rotationAngle); // Left semi-circle -> 90° to 270°
        
        // Draw right semi-circle
        fill(107, 171, 255);
        arc(this.x, this.y, this.radius * 2, this.radius * 2, 270 + this.rotationAngle, 90 + this.rotationAngle); // Right semi-circle -> 270° to 90°
    }
}
