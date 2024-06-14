let currentPage = 1;
let clipClicked = false;
let clipX = 1000;
let clipY = 410;
let clipWidth = 180; 
let clipHeight = 180; 
let basinClicked = false;
let basinX = 980;
let basinY = 450;
let basinWidth = 220;
let basinHeight = 140;
let showWaterAndRag = false;
let basinMoveEnabled = true;
let ragClicked = false;
let ragX = 970;
let ragY = 380;
let ragWidth = 180;
let ragHeight = 180;

let objects = [
    { image: null, x: 535, y: 65, clicked: false },
    { image: null, x: 300, y: 59, clicked: false },
    { image: null, x: 800, y: 510, clicked: false }
];

let dish = { x: 990, y: 460, width: 180, height: 130 };

let waterCopy;
let isWaterCleared = false;

function preload() {
    firstPageBg = loadImage('img/start.png'); 
    chooseCatBg = loadImage('img/chooseCatBg.png');
    cat1 = loadImage('img/cat1.png');
    cat2 = loadImage('img/cat2.png');

    section1Bg1 = loadImage('img/section1_clear_bg1.png');
    section1Bg2 = loadImage('img/section1_clear_bg2.png');

    clip = loadImage('img/clip.png');
    objects[0].image = loadImage('img/banana.png');
    objects[1].image = loadImage('img/bone.png');
    objects[2].image = loadImage('img/straw.png');

    section1Bg3 = loadImage('img/section1_wash_bg1.png');
    section1Bg4 = loadImage('img/section1_wash_bg2.png');
    section1Bg5 = loadImage('img/section1_wash_bg3.png');

    basin = loadImage('img/basin.png');
    water = loadImage('img/water.png', () => { water.resize(1000, 600); });
    rag = loadImage('img/rag.png');

    section1Bg6 = loadImage('img/section1_soap_bg1.png');
    section1Bg7 = loadImage('img/section1_soap_bg2.png');
}

function setup() {
    createCanvas(1280, 720);
    firstPage = new FirstPage();
    clean = new Clean();
}

function drawGrid() {
    stroke(200);
    fill(120);
    textSize(20);

    for(let x = 0; x < width; x += 40) {
        line(x, 0, x, height);
        text(x, x + 1, 12);
    }

    for(let y = 0; y < width; y += 40) {
        line(0, y, width, y);
        text(y, 1, y + 12);
    }
}

function draw() {
    background(0);

    if (currentPage === 1) {
        firstPage.display();
    } else if (currentPage === 2) {
        clean.display();
    } else if (currentPage === 3) {
        clean.clear();
    } else if (currentPage === 4) {
        clean.wash();
        if (showWaterAndRag) {
            image(section1Bg5, 0, 0, 895, 720);
            image(waterCopy, 160, 40, 1000, 600);
            image(rag, ragX, ragY, ragWidth, ragHeight);
        }
    } else if (currentPage === 5) {
        clean.soap();
    }

    drawGrid();
}

function mousePressed() {
    if (currentPage === 1) {
        if (mouseX >= 840 && mouseX <= 1000 && mouseY >= 160 && mouseY <= 650) {
            currentPage = 2;
        }
    } else if (currentPage === 2) {
        if (mouseX >= 280 && mouseX <= 560 && mouseY >= 280 && mouseY <= 570) {
            currentPage = 3;
        }
    } else if (currentPage === 3) {
        if (mouseX >= clipX && mouseX <= clipX + clip.width && mouseY >= clipY && mouseY <= clipY + clip.height) {
            clipClicked = true; // Toggle the state of clipClicked
        }

        if (clipClicked) {
            for (let obj of objects) {
                if (mouseX >= obj.x && mouseX <= obj.x + obj.image.width && mouseY >= obj.y && mouseY <= obj.y + obj.image.height) {
                    obj.clicked = true;
                    // Calculate the offset from the top-left corner of the object
                    obj.xOffset = mouseX - obj.x;
                    obj.yOffset = mouseY - obj.y;
                }
            }
        } 
    } else if (currentPage === 4) {
        if (mouseX >= basinX && mouseX <= basinX + basinWidth && mouseY >= basinY && mouseY <= basinY + basinHeight) {
            basinClicked = true;
        }
        else if (mouseX >= ragX && mouseX <= ragX + ragWidth && mouseY >= ragY && mouseY <= ragY + ragHeight) {
            ragClicked = true;
        }
    }
}

function mouseReleased() {
    for (let obj of objects) {
        obj.clicked = false;
    }
}

function mouseMoved() {
    if (clipClicked) {
        clipX = mouseX - clipWidth / 2; 
        clipY = mouseY - clipHeight / 2; 
    }

    // Check if all objects are in dish
    let allObjectsInDish = objects.every(obj => {
        return obj.x + obj.image.width >= dish.x && obj.x <= dish.x + dish.width &&
               obj.y + obj.image.height >= dish.y && obj.y <= dish.y + dish.height;
    });

    // If all objects are in dish, transition to the next page
    if (allObjectsInDish) {
        currentPage = 4; 
        // Create a copy of the water image for manipulation
        waterCopy = createImage(1000, 600);
        waterCopy.copy(water, 0, 0, water.width, water.height, 0, 0, water.width, water.height);
    }

    if (basinClicked && basinMoveEnabled) {
        basinX = mouseX - basinWidth / 2; 
        basinY = mouseY - basinHeight / 2; 
    }

    // Check if basin is in the specified area
    if (basinX >= 520 && basinX <= 680 && basinY >= 450 && basinY <= 630) {
        showWaterAndRag = true;
        basinMoveEnabled = false; // Disable further movement of the basin
    } else {
        showWaterAndRag = false;
    }

    if (ragClicked) {
        ragX = mouseX - ragWidth / 2; 
        ragY = mouseY - ragHeight / 2; 
        clearWaterUnderRag();
    }
}

function mouseDragged() {
    if (clipClicked) {
        clipX = mouseX - clipWidth / 2; 
        clipY = mouseY - clipHeight / 2; 
    }

    for (let obj of objects) {
        if (obj.clicked) {
            obj.x = mouseX - obj.xOffset;
            obj.y = mouseY - obj.yOffset;
        }
    }

    if (ragClicked) {
        ragX = mouseX - ragWidth / 2; 
        ragY = mouseY - ragHeight / 2; 
        clearWaterUnderRag();
    }
}

function clearWaterUnderRag() {
    if (!waterCopy) return;

    let startX = (ragX - 160) * (water.width / waterCopy.width); // Convert to water's coordinate system
    let startY = (ragY - 40) * (water.height / waterCopy.height); // Convert to water's coordinate system
    let ragWidthInWater = ragWidth * (water.width / waterCopy.width);
    let ragHeightInWater = ragHeight * (water.height / waterCopy.height);

    waterCopy.loadPixels();
    let waterCleared = true; // Assume water is cleared until proven otherwise

    for (let y = 0; y < ragHeightInWater; y++) {
        for (let x = 0; x < ragWidthInWater; x++) {
            let px = startX + x;
            let py = startY + y;
            if (px >= 0 && px < waterCopy.width && py >= 0 && py < waterCopy.height) {
                let index = 4 * (py * waterCopy.width + px);
                if (waterCopy.pixels[index + 3] > 0) {
                    waterCleared = false; // Found non-transparent pixel, water not cleared
                    break;
                }
            }
        }
        if (!waterCleared) break;
    }
    waterCopy.updatePixels();

    if (waterCleared) {
        isWaterCleared = true; // Set the flag indicating water is completely cleared
    } else {
        isWaterCleared = false; // Reset the flag if water is not completely cleared
    }
}

class FirstPage {
    display() {
        image(firstPageBg, 0, 0, 1280, 720);
    }
}

class Clean {
    display() {
        image(chooseCatBg, 0, 0, 1280, 720);
        image(cat1, 250, 260);
        image(cat2, 720, 290);
    }

    clear() {
        image(section1Bg1, 0, 0, 1280, 720);
        image(section1Bg2, 0, 0, 895, 720);

        image(clip, clipX, clipY);

        for (let obj of objects) {
            image(obj.image, obj.x, obj.y);
        }
    }

    wash() {
        image(section1Bg3, 0, 0, 1280, 720);
        image(section1Bg4, 0, 0, 895, 720);

        image(basin, basinX, basinY, basinWidth, basinHeight);
    }

    soap() {
        image(section1Bg5, 0, 0, 1280, 720);
        image(section1Bg6, 0, 0, 895, 720);

        // image(basin, basinX, basinY, basinWidth, basinHeight);
    }
}
