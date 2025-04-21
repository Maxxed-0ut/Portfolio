// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Load your pixel art image
  const bgImage = new Image();
  bgImage.src = 'pixilart-drawing.png'; // <-- Replace with your image path
  bgImage.onload = () => {
    // Tile the image to fill the canvas (you can change this if you want it centered or stretched)
    const pattern = ctx.createPattern(bgImage, 'repeat');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
    