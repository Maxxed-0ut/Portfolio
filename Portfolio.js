
document.addEventListener ('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').replace('#', '');

      // Activate tab button (if you want to sync them)
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === targetId) {
          btn.classList.add('active');
        }
      });

      // Activate the tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
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
    }
})
    