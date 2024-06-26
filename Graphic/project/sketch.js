let currentPage = 1;
console.log(`Page: ${currentPage}`);
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
let waterCopy;
let isWaterCleared = false;
let soapClicked = false;
let soapX = 1010;
let soapY = 360;
let soapWidth = 100;
let soapHeight = 200;
let showSoapBubble = false;
let soapbackgroundMusicoveEnabled = true;
let soapHandX = 1010;
let soapHandY = 400;
let soapHandWidth = 100;
let soapHandHeight = 150;
let soapHandClicked = false;
let soapCatX = 300;
let soapCatY = 100;
let soapCatWidth = 590;
let soapCatHeight = 570;
let soapCatVisible = false;
let soapHandMoveEnabled = true;
let showerX = 990;
let showerY = 420;
let showerWidth = 130;
let showerHeight = 130;
let showerClicked = false;
let dryerX = 1000;
let dryerY = 430;
let dryerWidth = 140;
let dryerHeight = 140;
let dryerClicked = false;
let combX = 1000;
let combY = 430;
let combWidth = 150;
let combHeight = 150;
let combClicked = false;
let cutterX = 1020;
let cutterY = 450;
let cutterWidth = 120;
let cutterHeight = 150;
let cutterClicked = false;
let cutNailBg = false;
let cutterMoveClicked = false;
let cutterMoveX = 245;
let cutterMoveY = 445;
let cutterMoveWidth = 100;
let cutterMoveHeight = 130;
let cutterMoveSpeed = 2;
let cutterMoveMinX = 180;
let cutterMoveMaxX = 1120;
let cutterMovingHorizontally = true;
let cutterTargetY = 0;
let nail1Visible = true;
let nail2Visible = true;
let nail3Visible = true;
let nail4Visible = true;
let nail5Visible = true;
let nail6Visible = true;
let nail7Visible = true;
let nail8Visible = true;
let nail9Visible = true;
let nail10Visible = true;
let sectionEnd1 = false;
let objects = [
    { image: null, x: 535, y: 65, clicked: false },
    { image: null, x: 300, y: 59, clicked: false },
    { image: null, x: 800, y: 510, clicked: false }
];
let dish = { x: 990, y: 460, width: 180, height: 130 };
let defaultPositions = {
    clip: { x: 1000, y: 410 },
    basin: { x: 980, y: 450 },
    rag: { x: 970, y: 380 },
    soap: { x: 1010, y: 360 },
    soapHand: { x: 1010, y: 400 },
    shower: { x: 990, y: 420},
    dryer: { x: 1000, y: 430 },
    comb: { x: 1000, y: 430 },
    cutter: { x: 1020, y: 450 },
    cutterMove: { x: 245, y: 445},
    dish: { x: 990, y: 460 },
    objects: [
        { x: 535, y: 65 },
        { x: 300, y: 59 },
        { x: 800, y: 510 }
    ]
};

// section 2
let showHat = false;
let catReset = false;
let chooseClothesPage1 = false;
let chooseClothesPage2 = false;
let chooseClothesPage3 = false;
let chooseClothesPage4 = false;
let chooseHatPage1 = false;
let chooseHatPage2 = false;
let chooseHatPage3 = false;
let currentClothesImage = null;
let currentHatImage = null;
let sectionEnd2 = false;
let gameEnd = false;

const backgroundMusic = document.getElementById('backgroundMusic');
let muteSound = false;

function preload() {
    mute = loadImage('img/mute.png');
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

    soap = loadImage('img/soap.png');
    soapBubble = loadImage('img/section1_wash_soap_bg1.png')
    soapHand = loadImage('img/soap_hand.png');
    soapCat = loadImage('img/soap_cat.png');
    shower = loadImage('img/shower.png');

    section1Bg8 = loadImage('img/section1_wet_bg1.png');
    section1Bg9 = loadImage('img/section1_wet_bg2.png');
    section1Bg10 = loadImage('img/section1_wet_bg3.png');

    section1Bg11 = loadImage('img/section1_blow_bg1.png');
    section1Bg12 = loadImage('img/section1_blow_bg2.png');
    dryer = loadImage('img/dryer.png');

    section1Bg13 = loadImage('img/section1_comb_bg1.png');
    section1Bg14 = loadImage('img/section1_comb_bg2.png');
    comb = loadImage('img/comb.png');

    section1Bg15 = loadImage('img/section1_cut_bg1.png');
    section1Bg16 = loadImage('img/section1_cut_bg2.png');
    cutter = loadImage('img/cutter.png');
    cutNail = loadImage('img/cut_nail_bg.png');

    nail1 = loadImage('img/nail1.png');
    nail2 = loadImage('img/nail2.png');
    nail3 = loadImage('img/nail3.png');
    nail4 = loadImage('img/nail4.png');
    nail5 = loadImage('img/nail5.png');
    nail6 = loadImage('img/nail6.png');
    nail7 = loadImage('img/nail7.png');
    nail8 = loadImage('img/nail8.png');
    nail9 = loadImage('img/nail9.png');
    nail10 = loadImage('img/nail10.png');

    section1End = loadImage('img/section1_end.png');

    // deco
    cat1_done = loadImage('img/cat1_done.png');
    cat2_start = loadImage('img/cat2_start.png');
    cat2_done = loadImage('img/cat2_done.png');
    resetClothes = loadImage('img/section2_resetClothes.png');

    section2Bg1 = loadImage('img/section2_bg1.png');
    chooseHat = loadImage('img/hat.png');

    chooseClothes1 = loadImage('img/chooseClothes1.png');
    chooseClothes2 = loadImage('img/chooseClothes2.png');
    chooseClothes3 = loadImage('img/chooseClothes3.png');
    chooseClothes4 = loadImage('img/chooseClothes4.png');
    chooseHat1 = loadImage('img/chooseHat1.png');
    chooseHat2 = loadImage('img/chooseHat2.png');
    chooseHat3 = loadImage('img/chooseHat3.png');

    clothe1 = loadImage('img/clothe1.png');
    clothe2 = loadImage('img/clothe2.png');
    clothe3 = loadImage('img/clothe3.png');
    clothe4 = loadImage('img/clothe4.png');
    clothe5 = loadImage('img/clothe5.png');
    clothe6 = loadImage('img/clothe6.png');
    clothe7 = loadImage('img/clothe7.png');
    clothe8 = loadImage('img/clothe8.png');

    hat1 = loadImage('img/hat1.png');
    hat2 = loadImage('img/hat2.png');
    hat3 = loadImage('img/hat3.png');
    hat4 = loadImage('img/hat4.png');
    hat5 = loadImage('img/hat5.png');
    hat6 = loadImage('img/hat6.png');
    hat7 = loadImage('img/hat7.png');
    hat8 = loadImage('img/hat8.png');

    section2End = loadImage('img/section2_end.png');

    endGame = loadImage('img/endgame_restart.png');
}

// 自动播放音乐
function playMusic() {
    backgroundMusic.play();
}

// 监听用户的首次交互事件
function enableMusicOnInteraction() {
    window.addEventListener('click', playMusicOnInteraction, { once: true });
    window.addEventListener('keydown', playMusicOnInteraction, { once: true });
}

function playMusicOnInteraction() {
    playMusic();
}

// 页面加载完成后启用用户交互检测
window.addEventListener('load', () => {
    enableMusicOnInteraction();
    // 自动播放音乐
    playMusic();
});

function setup() {
    createCanvas(1280, 720);
    firstPage = new FirstPage();
    clean = new Clean();
    deco = new Deco();

    soapHandTimer = new Timer();
    showerTimer = new Timer();
    combTimer = new Timer();
    ragTimer = new Timer();
    dryerTimer = new Timer();

    enableMusicOnInteraction();
    playMusic();
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
        if (showSoapBubble) { 
            image(soapBubble, 0, 320, 892, 400);
            if (soapHandMoveEnabled) {
                image(soapHand, soapHandX, soapHandY, soapHandWidth, soapHandHeight);
            }
        }

        if (soapCatVisible) {
            image(soapCat, soapCatX, soapCatY, soapCatWidth, soapCatHeight);
            image(shower, showerX, showerY, showerWidth, showerHeight);
        } 
    } else if (currentPage === 6) {
        clean.wet1();
    } else if (currentPage === 7) {
        clean.wet2();
    } else if (currentPage === 8) {
        clean.blow();
    } else if (currentPage === 9) {
        clean.comb();
    } else if (currentPage === 10) {
        clean.cut();

        if (cutNailBg) {
            image(cutNail, 0, 0, 1280, 720);

            // 绘制nail1到nail10
            if (nail1Visible) {
                image(nail1, 225, 280, 100, 120);
            }
            if (nail2Visible) {
                image(nail2, 320, 300, 80, 120);
            }
            if (nail3Visible) {
                image(nail3, 400, 325, 90, 95);
            }
            if (nail4Visible) {
                image(nail4, 492, 315, 70, 85);
            }
            if (nail5Visible) {
                image(nail5, 542, 284, 80, 70);
            }
            if (nail6Visible) {
                image(nail6, 700, 280, 70, 75);
            }
            if (nail7Visible) {
                image(nail7, 740, 320, 70, 70);
            }
            if (nail8Visible) {
                image(nail8, 820, 320, 80, 105);
            }
            if (nail9Visible) {
                image(nail9, 920, 323, 65, 100);
            }
            if (nail10Visible) {
                image(nail10, 999, 270, 76, 107);
            }

            image(cutter, cutterMoveX, cutterMoveY, cutterMoveWidth, cutterMoveHeight);


            if (!nail1Visible && !nail2Visible && !nail3Visible && !nail4Visible && !nail5Visible &&
                !nail6Visible && !nail7Visible && !nail8Visible && !nail9Visible && !nail10Visible) {
                sectionEnd1 = true;
                setTimeout(() => {
                    currentPage = 11;
                    console.log(`Page: ${currentPage}`);
                }, 2000);
            }
        }

        if (sectionEnd1) {
            image(section1End, 0, 0, 1280, 720);
        }
    } else if (currentPage === 11) {
        deco.display();
    } else if (currentPage === 12) {
        deco.wear();
        if(showHat) {
            image(chooseHat, 780, 125, 500, 600);
        }

        if(chooseClothesPage1) {
            image(chooseClothes1, 960, 240, 220, 350);
        }
        if(chooseClothesPage2) {
            image(chooseClothes2, 960, 240, 220, 350);
        }
        if(chooseClothesPage3) {
            image(chooseClothes3, 960, 240, 220, 350);
        }
        if(chooseClothesPage4) {
            image(chooseClothes4, 960, 240, 320, 350);
        }

        if(chooseHatPage1) {
            image(chooseHat1, 960, 230, 220, 370);
        }
        if(chooseHatPage2) {
            image(chooseHat2, 960, 230, 220, 370);
        }
        if(chooseHatPage3) {
            image(chooseHat3, 960, 230, 220, 370);
        }

        if (currentClothesImage !== null) {
            if (currentClothesImage === clothe1) {
                image(currentClothesImage, 170, 460, 480, 212);
            } else if (currentClothesImage === clothe2) {
                image(currentClothesImage, 172, 452, 480, 215);
            } else if (currentClothesImage === clothe3) {
                image(currentClothesImage, 170, 449, 490, 215);
            } else if (currentClothesImage === clothe4) {
                image(currentClothesImage, 172, 453, 480, 215);
            } else if (currentClothesImage === clothe5) {
                image(currentClothesImage, 171, 453, 480, 215);
            } else if (currentClothesImage === clothe6) {
                image(currentClothesImage, 171, 452, 480, 215);
            } else if (currentClothesImage === clothe7) {
                image(currentClothesImage, 0, 402, 660, 270);
            } else if (currentClothesImage === clothe8) {
                image(currentClothesImage, 171, 449, 480, 215);
            }
        }

        if (currentHatImage !== null) {
            if (currentHatImage === hat1) {
                image(currentHatImage, 0, 0, 765, 375);
            } else if (currentHatImage === hat2) {
                image(currentHatImage, 0, 0, 780, 375);
            } else if (currentHatImage === hat3) {
                image(currentHatImage, 190, 0, 600, 480);
            } else if (currentHatImage === hat4) {
                image(currentHatImage, 0, 0, 780, 380);
            } else if (currentHatImage === hat5) {
                image(currentHatImage, 0, 0, 780, 377);
            } else if (currentHatImage === hat6) {
                image(currentHatImage, 0, 0, 775, 380);
            } else if (currentHatImage === hat7) {
                image(currentHatImage, 0, 0, 777, 375);
            } else if (currentHatImage === hat8) {
                image(currentHatImage, 0, 0, 785, 377);
            }
        }        

        if(catReset) {
            currentClothesImage = null;
            currentHatImage = null;
        }

        if(sectionEnd2) {
            image(section2End, 0, 0, 1280, 720)
        }

        if(gameEnd) {
            image(endGame, 0, 0, 1280, 720);
        }
    } else if (currentPage === 13) {
        deco.displayF();
    }

    if (muteSound) {
        image(mute, 1158, 12, 110, 100);
    }

    drawGrid();
}

function resetObjectsToDefaultPosition() {
    // Reset clip
    clipX = defaultPositions.clip.x;
    clipY = defaultPositions.clip.y;
    
    // Reset basin
    basinX = defaultPositions.basin.x;
    basinY = defaultPositions.basin.y;
    
    // Reset rag
    ragX = defaultPositions.rag.x;
    ragY = defaultPositions.rag.y;
    
    // Reset soap
    soapX = defaultPositions.soap.x;
    soapY = defaultPositions.soap.y;
    
    // Reset soapHand
    soapHandX = defaultPositions.soapHand.x;
    soapHandY = defaultPositions.soapHand.y;
    
    showerX = defaultPositions.shower.x;
    showerY = defaultPositions.shower.y;
    
    // Reset dryer
    dryerX = defaultPositions.dryer.x;
    dryerY = defaultPositions.dryer.y;
    
    // Reset comb
    combX = defaultPositions.comb.x;
    combY = defaultPositions.comb.y;
    
    // Reset cutter
    cutterX = defaultPositions.cutter.x;
    cutterY = defaultPositions.cutter.y;

    // Reset cutter
    cutterMoveX = defaultPositions.cutterMove.x;
    cutterMoveY = defaultPositions.cutterMove.y;
    
    // Reset dish
    dish.x = defaultPositions.dish.x;
    dish.y = defaultPositions.dish.y;
    
    // Reset objects
    for (let i = 0; i < objects.length; i++) {
        objects[i].x = defaultPositions.objects[i].x;
        objects[i].y = defaultPositions.objects[i].y;
    }
}

function mousePressed() {
    if (mouseX >= 1160 && mouseX <= 1260 && mouseY >= 20 && mouseY <= 100) {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            muteSound = false; // 反转静音状态
        } else {
            backgroundMusic.pause();
            muteSound = true; // 反转静音状态
        }
    }
    console.log(`Current Page: ${currentPage}`);
    console.log(`mouseX: ${mouseX}, mouseY: ${mouseY}`);

    if (currentPage === 1) {
        if (mouseX >= 840 && mouseX <= 1000 && mouseY >= 160 && mouseY <= 650) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
            clipClicked = false;
        } 
    } else if (currentPage === 2) {
        if (mouseX >= 280 && mouseX <= 520 && mouseY >= 280 && mouseY <= 560) {
            currentPage = 3;
            console.log(`Page: ${currentPage}`);

            resetObjectsToDefaultPosition();
            clipClicked = false;
            besinClicked = false;
            showWaterAndRag = false;
            ragClicked = false;
            soapClicked = false;
            showSoapBubble = false;
            // soapHandClicked = false;
            // soapHandMoveEnabled = false;
            soapCatVisible = false;
            dryerClicked = false;
            combClicked = false;
            
            cutterClicked = false;
            cutNailBg = false;
            cutterMoveClicked = false;
            nail1Visible = true;
            nail2Visible = true;
            nail3Visible = true;
            nail4Visible = true;
            nail5Visible = true;
            nail6Visible = true;
            nail7Visible = true;
            nail8Visible = true;
            nail9Visible = true;
            nail10Visible = true;
            sectionEnd1 = false;
        }
    } else if (currentPage === 3) {
        if (mouseX >= clipX && mouseX <= clipX + clip.width && mouseY >= clipY && mouseY <= clipY + clip.height) {
            clipClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }

        if (clipClicked) {
            for (let obj of objects) {
                if (mouseX >= obj.x && mouseX <= obj.x + obj.image.width && mouseY >= obj.y && mouseY <= obj.y + obj.image.height) {
                    obj.clicked = true;
                    obj.xOffset = mouseX - obj.x;
                    obj.yOffset = mouseY - obj.y;
                }
            }

            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }
    } else if (currentPage === 4) {
        if (basinClicked || ragClicked) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        if (mouseX >= basinX && mouseX <= basinX + basinWidth && mouseY >= basinY && mouseY <= basinY + basinHeight) {
            basinClicked = true;
            basinMoveEnabled = true;
            console.log("Basin clicked")
        } else if (mouseX >= ragX && mouseX <= ragX + ragWidth && mouseY >= ragY && mouseY <= ragY + ragHeight) {
            ragClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 5) {
        if (soapClicked || soapHandClicked || showerClicked) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        if (mouseX >= soapX && mouseX <= soapX + soapWidth && mouseY >= soapY && mouseY <= soapY + soapHeight) {
            soapClicked = true;
            soapbackgroundMusicoveEnabled = true;

        } else if (mouseX >= soapHandX && mouseX <= soapHandX + soapHandWidth && mouseY >= soapHandY && mouseY <= soapHandY + soapHandHeight) {
            soapHandClicked = true;
            soapHandMoveEnabled = true;

        } else if (mouseX >= showerX && mouseX <= showerX + showerWidth && mouseY >= showerY && mouseY <= soapHandY + showerHeight) {
            showerClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 6) {
        if (mouseX >= 420 && mouseX <= 890 && mouseY >= 420 && mouseY <= 660) {
            currentPage = 7;
            console.log(`Page: ${currentPage}`);
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 7) {
        if (ragClicked) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        if (mouseX >= ragX && mouseX <= ragX + ragWidth && mouseY >= ragY && mouseY <= ragY + ragHeight) {
            ragClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 8) {
        if (dryerClicked) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        if (mouseX >= dryerX && mouseX <= dryerX + dryerWidth && mouseY >= dryerY && mouseY <= dryerY + ragHeight) {
            dryerClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 9) {
        if (combClicked) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        if (mouseX >= combX && mouseX <= combX + combWidth && mouseY >= combY && mouseY <= combY + combHeight) {
            combClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 10) {
        if (cutterClicked || cutNailBg) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            }
        }

        // 检查是否点击了 cutter
        if (mouseX >= cutterX && mouseX <= cutterX + cutterWidth && mouseY >= cutterY && mouseY <= cutterY + cutterHeight) {
            cutterClicked = true;
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 2;
            console.log(`Page: ${currentPage}`);
        }

        if (cutNailBg) {
            if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
                currentPage = 2;
                console.log(`Page: ${currentPage}`);
            } else if (mouseX >= cutterMoveX && mouseX <= cutterMoveX + cutterMoveWidth && mouseY >= cutterMoveY && mouseY <= cutterMoveY + cutterMoveHeight) {
                cutterMoveClicked = true;
            }

            if (cutterMoveClicked) {
                // 检查是否点击了 nailVisible 图片，并设置对应的变量为 false
                if (nail1Visible && mouseX >= 225 && mouseX <= 225 + 100 && mouseY >= 280 && mouseY <= 280 + 120) {
                    nail1Visible = false;
                    console.log('Clicked nail1');
                } else if (nail2Visible && mouseX >= 320 && mouseX <= 320 + 80 && mouseY >= 300 && mouseY <= 300 + 120) {
                    nail2Visible = false;
                    console.log('Clicked nail2');
                } else if (nail3Visible && mouseX >= 400 && mouseX <= 400 + 90 && mouseY >= 325 && mouseY <= 325 + 95) {
                    nail3Visible = false;
                    console.log('Clicked nail3');
                } else if (nail4Visible && mouseX >= 492 && mouseX <= 492 + 70 && mouseY >= 315 && mouseY <= 315 + 85) {
                    nail4Visible = false;
                    console.log('Clicked nail4');
                } else if (nail5Visible && mouseX >= 542 && mouseX <= 542 + 80 && mouseY >= 284 && mouseY <= 284 + 70) {
                    nail5Visible = false;
                    console.log('Clicked nail5');
                } else if (nail6Visible && mouseX >= 700 && mouseX <= 700 + 70 && mouseY >= 280 && mouseY <= 280 + 75) {
                    nail6Visible = false;
                    console.log('Clicked nail6');
                } else if (nail7Visible && mouseX >= 740 && mouseX <= 740 + 70 && mouseY >= 320 && mouseY <= 320 + 70) {
                    nail7Visible = false;
                    console.log('Clicked nail7');
                } else if (nail8Visible && mouseX >= 820 && mouseX <= 820 + 80 && mouseY >= 320 && mouseY <= 320 + 105) {
                    nail8Visible = false;
                    console.log('Clicked nail8');
                } else if (nail9Visible && mouseX >= 920 && mouseX <= 920 + 65 && mouseY >= 323 && mouseY <= 323 + 100) {
                    nail9Visible = false;
                    console.log('Clicked nail9');
                } else if (nail10Visible && mouseX >= 999 && mouseX <= 999 + 76 && mouseY >= 270 && mouseY <= 270 + 107) {
                    nail10Visible = false;
                    console.log('Clicked nail10');
                }
            }
        }
    }

    else if (currentPage === 11) {
        if (mouseX >= 280 && mouseX <= 520 && mouseY >= 280 && mouseY <= 560) {
            currentPage = 3;
            console.log(`Page: ${currentPage}`);

            resetObjectsToDefaultPosition();
            clipClicked = false;
            besinClicked = false;
            showWaterAndRag = false;
            ragClicked = false;
            soapClicked = false;
            showSoapBubble = false;
            // soapHandClicked = false;
            // soapHandMoveEnabled = false;
            soapCatVisible = false;
            dryerClicked = false;
            combClicked = false;
            
            cutterClicked = false;
            cutNailBg = false;
            cutterMoveClicked = false;
            nail1Visible = true;
            nail2Visible = true;
            nail3Visible = true;
            nail4Visible = true;
            nail5Visible = true;
            nail6Visible = true;
            nail7Visible = true;
            nail8Visible = true;
            nail9Visible = true;
            nail10Visible = true;
            sectionEnd1 = false;
        } else if (mouseX >= 760 && mouseX <= 1000 && mouseY >= 280 && mouseY <= 660) {
            currentPage = 12;
            console.log(`Page: ${currentPage}`);
        }
    } else if (currentPage === 12) {
        if (mouseX >= 800 && mouseX <= 880 && mouseY >= 260 && mouseY <= 360) {
            showHat = true;
            chooseClothesPage1 = false;
            chooseClothesPage2 = false;
            chooseClothesPage3 = false;
            chooseClothesPage4 = false;
            console.log("Choose Hat");
        } else if (mouseX >= 800 && mouseX <= 880 && mouseY >= 160 && mouseY <= 260) {
            showHat = false;
            chooseClothesPage1 = true;
            chooseHatPage1 = false;
            chooseHatPage2 = false;
            chooseHatPage3 = false;
            console.log("Choose Clothes");
        } else if (mouseX >= 20 && mouseX <= 120 && mouseY >= 380 && mouseY <= 470) {
            catReset = true;
            console.log("Reset Clothes");
        } else if (mouseX >= 20 && mouseX <= 120 && mouseY >= 490 && mouseY <= 580) {
            const clothes = [clothe1, clothe2, clothe3, clothe4, clothe5, clothe6, clothe7, clothe8];
            const hats = [hat1, hat2, hat3, hat4, hat5, hat6, hat7, hat8];

            currentClothesImage = random(clothes);
            currentHatImage = random(hats);
            catReset = false;
            console.log("Displaying random clothe and hat");
        } else if (mouseX >= 20 && mouseX <= 120 && mouseY >= 605 && mouseY <= 695) {
            sectionEnd2 = true;
            setTimeout(() => {
                sectionEnd2 = false;
                gameEnd = true;
                console.log("gameEnd set to true");
            }, 2000); // 2000 毫秒等于 2 秒
        } else if (mouseX >= 1050 && mouseX <= 1150 && mouseY >= 20 && mouseY <= 100) {
            currentPage = 11;
            catReset = true;
            console.log(`Page: ${currentPage}`);
        }

        if (gameEnd) {
            if (mouseX >= 880 && mouseX <= 1040 && mouseY >= 53 && mouseY <= 670) {
                currentPage = 13;
                console.log(`Page: ${currentPage}`);
            }
        }

        // Randoom display hat and clothe
        if (currentClothesImage !== null) {
            image(currentClothesImage, 170, 460, 480, 212);
        }
        if (currentHatImage !== null) {
            image(currentHatImage, 960, 230, 220, 370);
        }

        if (!showHat) {
            if (mouseX >= 1140 && mouseX <= 1210 && mouseY >= 610 && mouseY <= 690) {
                if (chooseClothesPage2 === true) {
                    chooseClothesPage2 = false;
                    chooseClothesPage3 = true;
                    console.log("Choose Clothes Page 3");
                } else if (chooseClothesPage3 === true) {
                    chooseClothesPage3 = false;
                    chooseClothesPage4 = true;
                    console.log("Choose Clothes Page 4");
                } else if (chooseClothesPage4 === true) {
                    chooseClothesPage4 = false;
                    chooseClothesPage1 = true;
                    console.log("Choose Clothes Page 1");
                } else {
                    chooseClothesPage1 = false;
                    chooseClothesPage2 = true;
                    console.log("Choose Clothes Page 2");
                }
            } else if (mouseX >= 920 && mouseX <= 1005 && mouseY >= 610 && mouseY <= 690) {
                if (chooseClothesPage4 === true) {
                    chooseClothesPage4 = false;
                    chooseClothesPage3 = true;
                    console.log("Choose Clothes Page 3");
                } else if (chooseClothesPage3 === true) {
                    chooseClothesPage3 = false;
                    chooseClothesPage2 = true;
                    console.log("Choose Clothes Page 2");
                } else if (chooseClothesPage2 === true) {
                    chooseClothesPage2 = false;
                    chooseClothesPage1 = true;
                    console.log("Choose Clothes Page 1");
                } else {
                    chooseClothesPage4 = true;
                    console.log("Choose Clothes Page 4");
                }
            }
        }
        
        if (chooseClothesPage1 === true) {
            if (mouseX >= 970 && mouseX <= 1170 && mouseY >= 260 && mouseY <= 390) {
                currentClothesImage = clothe1;
                catReset = false;
                console.log("Displaying clothe1");
            } else if (mouseX >= 980 && mouseX <= 1160 && mouseY >= 430 && mouseY <= 560) {
                currentClothesImage = clothe2;
                catReset = false;
                console.log("Displaying clothe2");
            }
        } else if (chooseClothesPage2 === true) {
            if (mouseX >= 990 && mouseX <= 1155 && mouseY >= 270 && mouseY <= 395) {
                currentClothesImage = clothe3;
                catReset = false;
                console.log("Displaying clothe3");
            } else if (mouseX >= 975 && mouseX <= 1160 && mouseY >= 435 && mouseY <= 565) {
                currentClothesImage = clothe4;
                catReset = false;
                console.log("Displaying clothe4");
            }
        } else if (chooseClothesPage3 === true) {
            if (mouseX >= 980 && mouseX <= 1160 && mouseY >= 270 && mouseY <= 400) {
                currentClothesImage = clothe5;
                catReset = false;
                console.log("Displaying clothe5");
            } else if (mouseX >= 980 && mouseX <= 1160 && mouseY >= 430 && mouseY <= 560) {
                currentClothesImage = clothe6;
                catReset = false;
                console.log("Displaying clothe6");
            }
        } else if (chooseClothesPage4 === true) {
            if (mouseX >= 970 && mouseX <= 1235 && mouseY >= 270 && mouseY <= 400) {
                currentClothesImage = clothe7;
                catReset = false;
                console.log("Displaying clothe7");
            } else if (mouseX >= 970 && mouseX <= 1150 && mouseY >= 435 && mouseY <= 565) {
                currentClothesImage = clothe8;
                catReset = false;
                console.log("Displaying clothe8");
            }
        }
        
        if (showHat) {
            if (mouseX >= 1140 && mouseX <= 1210 && mouseY >= 610 && mouseY <= 690) {
                if (chooseHatPage2 === true) {
                    chooseHatPage2 = false;
                    chooseHatPage3 = true;
                    console.log("Choose Hat Page 3");
                } else if (chooseHatPage3 === true) {
                    chooseHatPage3 = false;
                    chooseHatPage1 = true;
                    console.log("Choose Hat Page 1");
                } else {
                    chooseHatPage2 = true;
                    console.log("Choose Hat Page 2");
                }
            } else if (mouseX >= 920 && mouseX <= 1005 && mouseY >= 610 && mouseY <= 690) {
                if (chooseHatPage3 === true) {
                    chooseHatPage3 = false;
                    chooseHatPage2 = true;
                    console.log("Choose Hat Page 2");
                } else if (chooseHatPage2 === true) {
                    chooseHatPage2 = false;
                    chooseHatPage1 = true;
                    console.log("Choose Hat Page 1");
                } else {
                    chooseHatPage3 = true;
                    console.log("Choose Hat Page 3");
                }
            }
        }

        if (chooseHatPage1 === true) {
            if (mouseX >= 960 && mouseX <= 1170 && mouseY >= 230 && mouseY <= 320) {
                currentHatImage = hat1;
                catReset = false;
                console.log("Displaying hat1");
            } else if (mouseX >= 960 && mouseX <= 1180 && mouseY >= 350 && mouseY <= 430) {
                currentHatImage = hat2;
                catReset = false;
                console.log("Displaying hat2");
            } else if (mouseX >= 980 && mouseX <= 1160 && mouseY >= 460 && mouseY <= 600) {
                currentHatImage = hat3;
                catReset = false;
                console.log("Displaying hat3");
            }
        } else if (chooseHatPage2 === true) {
            if (mouseX >= 1000 && mouseX <= 1140 && mouseY >= 250 && mouseY <= 330) {
                currentHatImage = hat4;
                catReset = false;
                console.log("Displaying hat4");
            } else if (mouseX >= 960 && mouseX <= 1170 && mouseY >= 370 && mouseY <= 440) {
                currentHatImage = hat5;
                catReset = false;
                console.log("Displaying hat5");
            } else if (mouseX >= 970 && mouseX <= 1160 && mouseY >= 490 && mouseY <= 580) {
                currentHatImage = hat6;
                catReset = false;
                console.log("Displaying hat6");
            }
        } else if (chooseHatPage3 === true) {
            if (mouseX >= 1010 && mouseX <= 1140 && mouseY >= 315 && mouseY <= 380) {
                currentHatImage = hat7;
                catReset = false;
                console.log("Displaying hat7");
            } else if (mouseX >= 980 && mouseX <= 1160 && mouseY >= 465 && mouseY <= 520) {
                currentHatImage = hat8;
                catReset = false;
                console.log("Displaying hat8");
            }
        }        
    } else if (currentPage === 13) {
        if (mouseX >= 280 && mouseX <= 520 && mouseY >= 280 && mouseY <= 560) {
            currentPage = 3;
            console.log(`Page: ${currentPage}`);

            resetObjectsToDefaultPosition();
            clipClicked = false;
            besinClicked = false;
            showWaterAndRag = false;
            ragClicked = false;
            soapClicked = false;
            showSoapBubble = false;
            soapHandClicked = false;
            soapCatVisible = false;
            dryerClicked = false;
            combClicked = false;

            cutterClicked = false;
            cutNailBg = false;
            cutterMoveClicked = false;
            nail1Visible = true;
            nail2Visible = true;
            nail3Visible = true;
            nail4Visible = true;
            nail5Visible = true;
            nail6Visible = true;
            nail7Visible = true;
            nail8Visible = true;
            nail9Visible = true;
            nail10Visible = true;
            sectionEnd1 = false;
        } else if (mouseX >= 760 && mouseX <= 1000 && mouseY >= 280 && mouseY <= 660) {
            currentPage = 12;
            catReset = true;
            gameEnd = false;
            console.log(`Page: ${currentPage}`);
        }
    } 
}

function mouseReleased() {
    for (let obj of objects) {
        obj.clicked = false;
    }
}

function mouseMoved() {
    if (currentPage === 3 ) {
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
            console.log(`Page: ${currentPage}`);
            // Create a copy of the water image for manipulation
            waterCopy = createImage(1000, 600);
            waterCopy.copy(water, 0, 0, water.width, water.height, 0, 0, water.width, water.height);
        }
    }

    else if (currentPage === 4) {
        if (basinClicked && basinMoveEnabled) {
            basinX = mouseX - basinWidth / 2; 
            basinY = mouseY - basinHeight / 2; 

            // Check if basin is in the specified area
            if (basinX >= 520 && basinX <= 680 && basinY >= 450 && basinY <= 630) {
                showWaterAndRag = true;
                basinMoveEnabled = false; // Disable further movement of the basin
            } else {
                showWaterAndRag = false;
                basinMoveEnabled = true; 
            }
        }

        if (ragClicked) {
            ragX = mouseX - ragWidth / 2; 
            ragY = mouseY - ragHeight / 2; 
          
            clearWaterUnderRag();
        }
    }

    else if (currentPage === 5) {
        if (soapClicked && soapbackgroundMusicoveEnabled) {
            soapX = mouseX - soapWidth / 2; 
            soapY = mouseY - soapHeight / 2; 
        }

        if (soapX >= 420 && soapX <= 790 && soapY >= 410 && soapY <= 660) {
            showSoapBubble = true;
            soapbackgroundMusicoveEnabled = false;
        } else {
            showSoapBubble = false;
            // soapbackgroundMusicoveEnabled = true;

        }

        if (soapHandClicked && soapHandMoveEnabled) {
            soapHandX = mouseX - soapHandWidth / 2;
            soapHandY = mouseY - soapHandHeight / 2;

            if (mouseX >= soapHandX && mouseX <= soapHandX + soapHandWidth && mouseY >= soapHandY && mouseY <= soapHandY + soapHandHeight) {
                if (!soapHandTimer.isRunning) {
                    soapHandTimer.start();
                }
                if (soapHandTimer.isTimeReached(3000)) {
                    soapCatVisible = true;
                    soapHandMoveEnabled = false;
                    soapHandTimer.stop();
                // } else {
                    // soapHandMoveEnabled = true;
                }
            } else {
                soapCatVisible = false;
                soapHandTimer.stop();
            }
        }

        if (showerClicked) {
            showerX = mouseX - showerWidth / 2; 
            showerY = mouseY - showerHeight / 2; 

            if (mouseX >= showerX && mouseX <= showerX + showerWidth && mouseY >= showerY && mouseY <= showerY + showerHeight) {
                if (!showerTimer.isRunning) {
                    showerTimer.start();
                }
                if (showerTimer.isTimeReached(3000)) {
                    soapCatVisible = false; 
                    currentPage = 6; // Replace W with the next page number after shower
                    console.log(`Page: ${currentPage}`);
                    showerTimer.stop();
                }
            } else {
                oapCatVisible = true;
                showerTimer.stop();
            }
        }
    }

    else if (currentPage === 7) {
        if (ragClicked) {
            ragX = mouseX - ragWidth / 2; 
            ragY = mouseY - ragHeight / 2; 
        }

        if (mouseX >= ragX && mouseX <= ragX + ragWidth && mouseY >= ragY && mouseY <= ragY + ragHeight) {
            if (!ragTimer.isRunning) {
                ragTimer.start();
            }
            if (ragTimer.isTimeReached(3000)) {
                currentPage = 8;
                console.log(`Page: ${currentPage}`);
                ragTimer.stop();
            }
        } else {
            ragTimer.stop();
        }
    }

    else if (currentPage === 8) {
        if (dryerClicked) {
            dryerX = mouseX - dryerWidth / 2; 
            dryerY = mouseY - dryerHeight / 2; 
        }

        if (mouseX >= dryerX && mouseX <= dryerX + dryerWidth && mouseY >= dryerY && mouseY <= dryerY + dryerHeight) {
            if (!dryerTimer.isRunning) {
                dryerTimer.start();
            }
            if (dryerTimer.isTimeReached(3000)) {
                currentPage = 9;
                console.log(`Page: ${currentPage}`);
                dryerTimer.stop();
            }
        } else {
            dryerTimer.stop();
        }
    }

    else if (currentPage === 9) {
        if (combClicked) {
            combX = mouseX - combWidth / 2; 
            combY = mouseY - combHeight / 2; 
        }

        if (mouseX >= combX && mouseX <= combX + combWidth && mouseY >= combY && mouseY <= combY + combHeight) {
            if (!combTimer.isRunning) {
                combTimer.start();
            }
            if (combTimer.isTimeReached(3000)) { // 3000 milliseconds = 3 seconds
                currentPage = 10;
                console.log(`Page: ${currentPage}`);
                combTimer.stop();
            }
        } else {
            combTimer.stop();
        }
    }

    else if (currentPage === 10) {
        if (cutterClicked) {
            cutterX = mouseX - cutterWidth / 2; 
            cutterY = mouseY - cutterHeight / 2; 
        }

        if (mouseX >= 495 && mouseX <= 610 && mouseY >= 600 && mouseY <= 640) {
            cutNailBg = true;
        }

        if (cutterMoveClicked) {
            cutterMoveX = mouseX - cutterMoveWidth / 2; 
            cutterMoveY = mouseY - cutterMoveHeight / 2; 
        }
    }
}

function mouseDragged() {
    if (currentPage === 3) {
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
    }

    if (currentPage === 4) {
        if (ragClicked && currentPage === 4) {
            ragX = mouseX - ragWidth / 2; 
            ragY = mouseY - ragHeight / 2; 
            clearWaterUnderRag();
        }
    }

    if(currentPage === 5) {
        if (soapHandClicked) {
            soapHandX = mouseX - soapHandWidth / 2;
            soapHandY = mouseY - soapHandHeight / 2;
        }

        if (mouseX >= soapHandX && mouseX <= soapHandX + soapHandWidth && mouseY >= soapHandY && mouseY <= soapHandY + soapHandHeight) {
            if (!soapHandTimer.isRunning) {
                soapHandTimer.start();
            }
            if (soapHandTimer.isTimeReached(3000)) {
                soapCatVisible = true;
                soapHandMoveEnabled = false;
                soapHandTimer.stop();
            }
        } else {
            soapCatVisible = false;
            soapHandTimer.stop();
        }

        if (showerClicked) {
            showerX = mouseX - showerWidth / 2;
            showerY = mouseY - showerHeight / 2;
        }

        if (mouseX >= showerX && mouseX <= showerX + showerWidth && mouseY >= showerY && mouseY <= showerY + showerHeight) {
            if (!showerTimer.isRunning) {
                showerTimer.start();
            }
            if (showerTimer.isTimeReached(3000)) {
                soapCatVisible = false; 
                currentPage = 6; // Replace W with the next page number after shower
                console.log(`Page: ${currentPage}`);
                showerTimer.stop();
            }
        } else {
            showerTimer.stop();
            oapCatVisible = true;
        }
    }

    if (currentPage === 7) {
        if (ragClicked) {
            ragX = mouseX - ragWidth / 2; 
            ragY = mouseY - ragHeight / 2; 
        }

        if (mouseX >= ragX && mouseX <= ragX + ragWidth && mouseY >= ragY && mouseY <= ragY + ragHeight) {
            if (!ragTimer.isRunning) {
                ragTimer.start();
            }
            if (ragTimer.isTimeReached(3000)) {
                currentPage = 8;
                console.log(`Page: ${currentPage}`);
                ragTimer.stop();
            }
        } else {
            ragTimer.stop();
        }
    }

    if (currentPage === 8) {
        if (dryerClicked) {
            dryerX = mouseX - dryerWidth / 2; 
            dryerY = mouseY - dryerHeight / 2; 
        }

        if (mouseX >= dryerX && mouseX <= dryerX + dryerWidth && mouseY >= dryerY && mouseY <= dryerY + dryerHeight) {
            if (!dryerTimer.isRunning) {
                dryerTimer.start();
            }
            if (dryerTimer.isTimeReached(3000)) {
                currentPage = 9;
                console.log(`Page: ${currentPage}`);
                dryerTimer.stop();
            }
        } else {
            dryerTimer.stop();
        }
    }

    if (currentPage === 9) {
        if (combClicked) {
            combX = mouseX - combWidth / 2; 
            combY = mouseY - combHeight / 2; 
        }
        
        if (mouseX >= combX && mouseX <= combX + combWidth && mouseY >= combY && mouseY <= combY + combHeight) {
            if (!combTimer.isRunning) {
                combTimer.start();
            }
            if (combTimer.isTimeReached(3000)) {
                currentPage = 10;
                console.log(`Page: ${currentPage}`);
                combTimer.stop();
            }
        } else {
            combTimer.stop();
        }
    }

    if (currentPage === 10) {
        if (cutterClicked) {
            cutterX = mouseX - cutterWidth / 2; 
            cutterY = mouseY - cutterHeight / 2; 
        }
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
            let px = Math.floor(startX + x);
            let py = Math.floor(startY + y);
            if (px >= 0 && px < waterCopy.width && py >= 0 && py < waterCopy.height) {
                let index = 4 * (py * waterCopy.width + px);
                if (waterCopy.pixels[index + 3] > 0) {
                    waterCleared = false; // Found non-transparent pixel, water not cleared
                }
                // Set the alpha channel to 0 to make the pixel fully transparent
                waterCopy.pixels[index + 3] = 0;
            }
        }
    }
    waterCopy.updatePixels();

    // Update the global state based on water clearing status
    if (waterCleared) {
        currentPage = 5;
    } else {
        isWaterCleared = false; // Reset the flag if water is not completely cleared
    }

    console.log(`Water cleared: ${waterCleared}`);
    console.log(`Is Water cleared: ${isWaterCleared}`);
}

class FirstPage {
    display() {
        image(firstPageBg, 0, 0, 1280, 720);
    }
}

class Clean {
    display() {
        image(chooseCatBg, 0, 0, 1280, 720);
        image(cat1, 250, 260, 300, 300);
        image(cat2, 720, 270, 300, 300);
    }

    clear() {
        image(section1Bg1, 0, 0, 1280, 720);
        image(section1Bg2, 0, 0, 895, 720);

        for (let obj of objects) {
            image(obj.image, obj.x, obj.y);
        }

        image(clip, clipX, clipY);
    }

    wash() {
        image(section1Bg3, 0, 0, 1280, 720);
        image(section1Bg4, 0, 0, 895, 720);

        image(basin, basinX, basinY, basinWidth, basinHeight);
    }

    soap() {
        image(section1Bg6, 0, 0, 1280, 720);
        image(section1Bg7, 0, 0, 895, 720);

        image(soap, soapX, soapY, soapWidth, soapHeight);

        ragClicked = false;
        ragX = 970;
        ragY = 380;
        ragWidth = 180;
        ragHeight = 180;
    }

    wet1() {
        image(section1Bg8, 0, 0, 1280, 720);
    }

    wet2() {
        image(section1Bg9, 0, 0, 1280, 720);
        image(section1Bg10, 0, 0, 895, 720);
        image(rag, ragX, ragY, ragWidth, ragHeight);
    }

    blow() {
        image(section1Bg11, 0, 0, 1280, 720);
        image(section1Bg12, 0, 0, 895, 720);

        image(dryer, dryerX, dryerY, dryerWidth, dryerHeight);
    }

    comb() {
        image(section1Bg13, 0, 0, 1280, 720);
        image(section1Bg14, 0, 0, 895, 720);

        image(comb, combX, combY, combWidth, combHeight);
    }

    cut() {
        image(section1Bg15, 0, 0, 1280, 720);
        image(section1Bg16, 0, 0, 895, 720);

        image(cutter, cutterX, cutterY, cutterWidth, cutterHeight);
    }
}

class Deco {
    display() {
        image(chooseCatBg, 0, 0, 1280, 720);
        image(cat1_done, 250, 260, 300, 300);
        image(cat2_start, 720, 270, 300, 300);
    }

    wear() {
        image(section2Bg1, 0, 0, 1280, 720);
    }

    displayF() {
        image(chooseCatBg, 0, 0, 1280, 720);
        image(cat1_done, 250, 260, 300, 300);
        image(cat2_done, 720, 270, 300, 300);
    }
}

class Timer {
    constructor() {
        this.startTime = 0;
        this.isRunning = false;
    }

    start() {
        this.startTime = millis();
        this.isRunning = true;
    }

    stop() {
        this.isRunning = false;
    }

    getElapsedTime() {
        if (this.isRunning) {
            return millis() - this.startTime;
        }
        return 0;
    }

    isTimeReached(targetTime) {
        return this.isRunning && this.getElapsedTime() >= targetTime;
    }
}
