document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const candidateId = document.getElementById('candidateId');
  const password = document.getElementById('password');
  const examCode = document.getElementById('examCode');
  const statusMessage = document.getElementById('statusMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const idVal = candidateId.value.trim();
    const passVal = password.value.trim();
    const codeVal = examCode.value.trim();

    if (!idVal || !passVal || !codeVal) {
      showStatus('All fields are required to begin the exam.', 'error');
      return;
    }

    if (codeVal.length < 5) {
      showStatus('Invalid exam passcode format. Minimum 5 characters.', 'error');
      return;
    }

    // Authentication success simulation
    showStatus('Authentication successful. Redirecting to exam session...', 'success');
  });

  function showStatus(msg, type) {
    statusMessage.textContent = msg;
    statusMessage.className = `status-box ${type}`;
    statusMessage.classList.remove('hidden');
  }
});
