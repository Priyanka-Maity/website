document.addEventListener('DOMContentLoaded', () => {
    const countContainer = document.getElementById('countContainer');
    let count = 1;
  
    const interval = setInterval(() => {
      countContainer.textContent = count;
      if (count === 15) {
        clearInterval(interval);
      } else {
        count++;
      }
    }, 200); // Change 1000 to a smaller number if you want it to count faster
  });
  document.addEventListener('DOMContentLoaded', () => {
    const countContainer = document.getElementById('count');
    let count = 1;
  
    const interval = setInterval(() => {
      countContainer.textContent = count;
      if (count === 50) {
        clearInterval(interval);
      } else {
        count++;
      }
    }, 200); // Change 1000 to a smaller number if you want it to count faster
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('nav');

    menuBtn.addEventListener('click', () => {
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
      }
    });
  });
