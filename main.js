const toggle = document.getElementById('darkmode-toggle');

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.transition = 'background-color 0.3s ease';
    }
});





  const buttons = document.querySelectorAll('.Read-more');

buttons.forEach((btn, index) => {
  const card = btn.closest('.for-more-text');
  const moreText = card.querySelector('.more-text');

  const saved = sessionStorage.getItem(`moreText-${index}`);
  if (saved === 'open') {
    moreText.style.display = 'block';
    btn.textContent = 'Show less';
  } else {
    moreText.style.display = 'none';
    btn.textContent = 'Read more';
  }

  btn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      btn.textContent = 'Show less';
      sessionStorage.setItem(`moreText-${index}`, 'open');
    } else {
      moreText.style.display = 'none';
      btn.textContent = 'Read more';
      sessionStorage.setItem(`moreText-${index}`, 'closed');
    }
  });
});



document.querySelector('.home-link')?.addEventListener('click', () => {
  sessionStorage.clear();
});


document.querySelector(".circle:nth-child(1)").onclick = function () {
  const facebookMsg = document.getElementById('facebook-msg');
  
  facebookMsg.classList.add("active");
  
  setTimeout(() => {
    facebookMsg.classList.remove("active"); 
  }, 2200);
};


document.querySelector(".circle:nth-child(2)").onclick = function () {
  const twitterMsg = document.getElementById('twitter-msg');
  
  twitterMsg.classList.add("active");
  
  setTimeout(() => {
    twitterMsg.classList.remove("active"); 
  }, 2200);
};



document.querySelector(".circle:nth-child(3)").onclick = function () {
  const instMsg = document.getElementById('inst-msg');
  
  instMsg.classList.add("active");
  
  setTimeout(() => {
    instMsg.classList.remove("active"); 
  }, 2200);
};

  
document.querySelector(".circle:nth-child(4)").onclick = function () {
  const LinkedInMsg = document.getElementById('LinkedIn-msg');
  
  LinkedInMsg.classList.add("active");
  
  setTimeout(() => {
    LinkedInMsg.classList.remove("active"); 
  }, 2200);
};


const hamburger = document.getElementById('hamburger');
function toggleMenu() {
  hamburger.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);


const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
});