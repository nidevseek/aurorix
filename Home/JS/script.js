function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
  
    stats.forEach(stat => {
      const isFloat = stat.dataset.max.includes('.');
      const max = parseFloat(stat.dataset.max);
      const duration = 1500;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;
  
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = max * progress;
  
        stat.textContent = isFloat ? current.toFixed(1) : Math.floor(current);
  
        if (frame >= totalFrames) {
          stat.textContent = isFloat ? max.toFixed(1) : max;
          clearInterval(counter);
        }
      }, 1000 / frameRate);
    });
  }
  
  window.addEventListener('load', animateNumbers);
  

  document.addEventListener('DOMContentLoaded', () => {
    const cpuSlider = document.getElementById('cpuSlider');
    const cpuValue = document.getElementById('cpuValue');
    const ramSlider = document.getElementById('ramSlider');
    const ramValue = document.getElementById('ramValue');
    const diskSlider = document.getElementById('diskSlider');
    const diskValue = document.getElementById('diskValue');

    cpuSlider.addEventListener('input', () => {
        cpuValue.textContent = cpuSlider.value;
    });

    ramSlider.addEventListener('input', () => {
        ramValue.textContent = ramSlider.value;
    });

    diskSlider.addEventListener('input', () => {
        diskValue.textContent = diskSlider.value;
    });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});