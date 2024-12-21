function updateCountdown () {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25);
      const music = new Audio ('jingle-bells-christmas-holidays-celebration-background-intro-theme-265841.mp3');

      if(now > christmas){
        christmas.setFullYear(christmas.getFullYear() ++);
      }


const divi = christmas - now;
const days = Math.floor(divi / (1000 * 60 * 60 * 24));
const hours = Math.floor((divi / (1000 * 60 * 60 )) % 24);
const minutes = Math.floor((divi / (1000 * 60 )) % 24);
const seconds = Math.floor((divi / 1000 ) % 60);

document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
     
    }
    setInterval(updateCountdown,1000);
    updateCountdown();


    
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Array to hold snowflake objects
    const snowflakes = [];
    
    // Create snowflake object
    class Snowflake {
        constructor() {
            this.x = Math.random() * canvas.width; // Random x position
            this.y = Math.random() * canvas.height; // Random y position
            this.radius = Math.random() * 4 + 1; // Random radius
            this.speed = Math.random() * 1 + 0.5; // Random speed
            this.wind = Math.random() * 1 - 0.5; // Wind effect
        }
    
        // Draw snowflake
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    
        // Update snowflake position
        update() {
            this.y += this.speed; // Move down
            this.x += this.wind; // Move sideways
    
            // Reset snowflake to top if it goes out of view
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
    
            if (this.x > canvas.width || this.x < 0) {
                this.x = Math.random() * canvas.width;
            }
        }
    }
    
    // Initialize snowflakes
    function initSnowflakes() {
        const totalSnowflakes = 200;
        for (let i = 0; i < totalSnowflakes; i++) {
            snowflakes.push(new Snowflake());
        }
    }
    
    // Animate snowflakes
    function animateSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach((snowflake) => {
            snowflake.update();
            snowflake.draw();
        });
        requestAnimationFrame(animateSnowflakes);
    }
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    initSnowflakes();
    animateSnowflakes();






    function displayGreeting (){
        const name = document.getElementById('name').value || 'Guest';

        const greetingDiv = document.querySelector('.greeting');
        greetingDiv.textContent = 'Merry Christmas, ${name}!';
        clearInterval(countdownTimer);
        music.play();
    }
    if(divi <= 0) displayGreeting();
    




    