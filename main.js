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
    facebookMsg.style.pointerEvents = 'auto'; 
  }, 2200);
};


document.querySelector(".circle:nth-child(2)").onclick = function () {
  const twitterMsg = document.getElementById('twitter-msg');
  
  twitterMsg.classList.add("active");
  
  setTimeout(() => {
    twitterMsg.classList.remove("active");
    twitterMsg.style.pointerEvents = 'auto'; 
  }, 2200);
};



document.querySelector(".circle:nth-child(3)").onclick = function () {
  const instMsg = document.getElementById('inst-msg');
  
  instMsg.classList.add("active");
  
  setTimeout(() => {
    instMsg.classList.remove("active");
    instMsg.style.pointerEvents = 'auto'; 
  }, 2200);
};

  
document.querySelector(".circle:nth-child(4)").onclick = function () {
  const LinkedInMsg = document.getElementById('LinkedIn-msg');
  
  LinkedInMsg.classList.add("active");
  
  setTimeout(() => {
    LinkedInMsg.classList.remove("active");
    LinkedInMsg.style.pointerEvents = 'auto'; 
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

    const botToken = '7757408268:AAE4GYAscLH8VkS_CluxczCAnQWuWd_dLs8';
    const chatId = 840647463;

    const form2 = document.getElementById('Contact-form');

    form2.addEventListener('submit', function(e) {
      e.preventDefault();

      const username = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const UserMessagee = document.getElementById('message').value.trim();


      const message = `
🔔 Новая регистрация от пользователя из сайта https://azizbek2542.github.io/Azizbek-Ubaydullayev/:
👤 Username: ${username}
📧 Email: ${email}
📱 Phone: ${phone}
📨 Email Subject: ${subject}
✉️ User Message: ${UserMessagee}
      `;

      sendToTelegram(message);
    });
    function sendToTelegram(message) {
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
    }