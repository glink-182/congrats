let confetti = [];
    let font;

    function preload() {
      font = loadFont('Comic-Sans-MS.ttf');
    }

    function setup() {
      createCanvas(windowWidth, windowHeight);
      textFont(font);
      createConfetti();
    }

    function draw() {
      background(255);
      drawCongratulationsScreen();
    }

    function drawCongratulationsScreen() {
      fill(0);
      textSize(48);
      stroke(255,0,0);
      textAlign(CENTER, CENTER);
      text("Congratulations you made the right choice!!!", width / 2, height / 2);

      drawConfetti();
    }

    function createConfetti() {
      for (let i = 0; i < 200; i++) {
        confetti.push({
          x: random(width),
          y: random(height),
          length: random(10, 20),
          angle: random(TWO_PI),
          speed: random(1, 3),
          color: color(random(255), random(255), random(255))
        });
      }
    }

    function drawConfetti() {
      for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        stroke(c.color);
        strokeWeight(4);
        line(c.x, c.y, c.x + cos(c.angle) * c.length, c.y + sin(c.angle) * c.length);
        c.y += c.speed;
        if (c.y > height) {
          c.y = 0;
          c.x = random(width);
        }
      }
    }
