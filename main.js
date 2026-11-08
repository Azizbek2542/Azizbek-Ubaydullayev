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
    const textarea = document.querySelector("#message");
    const counter = document.querySelector("#counter");
    const submitMsg = document.getElementById("submit-msg");
    const submitButton = form2.querySelector('[type="submit"]');
    let isSending = false;

    textarea.addEventListener("input", () => {
      counter.textContent = `${textarea.value.length} / 500`;
    });

    form2.addEventListener("reset", () => {
      counter.textContent = "0 / 500";
    });

    form2.addEventListener('submit', async function(e) {
      e.preventDefault();

      if (isSending) return;
      isSending = true;
      submitButton.disabled = true;

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

      try {
        await sendToTelegram(message);
        form2.reset();
        submitMsg.classList.add("active");
        await new Promise(resolve => setTimeout(resolve, 1200));
        submitMsg.classList.remove("active");
      } catch (error) {
        console.error("Failed to send the contact form", error);
        window.alert("Не удалось отправить сообщение. Попробуйте ещё раз.");
      } finally {
        isSending = false;
        submitButton.disabled = false;
      }
    });
    async function sendToTelegram(message) {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
        });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.description || `Telegram request failed with status ${response.status}`);
      }
    }