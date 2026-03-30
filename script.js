
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const chatToggle = document.getElementById('chatToggle');
const chatWidget = document.getElementById('chatWidget');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function appendMessage(text, type = 'bot') {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(message) {
  const m = message.toLowerCase();

  if (m.includes('revenue capture')) {
    return 'Revenue Capture AI helps businesses answer inbound calls, chat, SMS, and email, qualify leads, book appointments, and update CRM automatically.';
  }
  if (m.includes('dollar revival') || m.includes('old lead') || m.includes('dead lead')) {
    return 'Dollar Revival AI follows up with old leads using AI outbound calls, SMS, and email so businesses can reactivate pipeline and recover missed revenue.';
  }
  if (m.includes('autoflow') || m.includes('automation')) {
    return 'AutoFlow AI automates CRM updates, reminders, task routing, notifications, integrations, and internal workflows so teams can scale without adding more manual work.';
  }
  if (m.includes('crm')) {
    return 'Yes. We can integrate with existing CRM systems, and we can also provide a tailored version depending on the business workflow and industry needs.';
  }
  if (m.includes('price') || m.includes('pricing') || m.includes('cost')) {
    return 'Pricing depends on volume and setup, but the main systems start from $997 to $1,500 per month, plus setup depending on complexity. The best next step is to book a demo.';
  }
  if (m.includes('demo') || m.includes('book')) {
    return 'You can book a demo by using the demo form on the page or by contacting sales@ROIPredictions.com or 800-980-9941.';
  }
  if (m.includes('legal') || m.includes('law')) {
    return 'We also have a separate Law Firm AI page with CaseIntake AI, LegalFlow AI, and LexiCRM AI built specifically for legal teams.';
  }
  return 'We help businesses capture new leads, recover old revenue, and automate manual work with AI voice, chat, reminders, CRM updates, and workflows. Want to ask about a specific system?';
}

function CaptureAI() {
    window.open('revenue-capture-demo.html');
}

if (chatToggle && chatWidget) {
  chatToggle.addEventListener('click', () => {
    chatWidget.classList.toggle('open');
    chatWidget.setAttribute('aria-hidden', chatWidget.classList.contains('open') ? 'false' : 'true');
  });
}

if (chatClose && chatWidget) {
  chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('open');
    chatWidget.setAttribute('aria-hidden', 'true');
  });
}

if (chatForm) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = chatInput.value.trim();
    if (!value) return;
    appendMessage(value, 'user');
    chatInput.value = '';
    setTimeout(() => appendMessage(getBotReply(value), 'bot'), 300);
  });
}

document.querySelectorAll('.suggestion, .question-chip').forEach(btn => {
  btn.addEventListener('click', () => {
    const q = btn.dataset.question;
    if (!q) return;
    if (!chatWidget.classList.contains('open')) {
      chatWidget.classList.add('open');
      chatWidget.setAttribute('aria-hidden', 'false');
    }
    appendMessage(q, 'user');
    setTimeout(() => appendMessage(getBotReply(q), 'bot'), 250);
  });
});
