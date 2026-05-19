const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxoGlhGuio9BLQm5oXMhVpPt-9nxgToA5bzDge-4XQgGSB6pXRLU3th1CGp5GF95Jgm/exec";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const mainContent = document.getElementById("mainContent");
const thankYouPage = document.getElementById("thankYouPage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Đang gửi...";
  message.textContent = "";

  const formData = new FormData(form);
  formData.set("chiPhi", "5000円");

  try {
    await fetch(GOOGLE_SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData });
    form.reset();
    mainContent.classList.add("hidden");
    thankYouPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    message.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
    message.className = "error";
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Gửi đăng ký";
});

function backToForm() {
  thankYouPage.classList.add("hidden");
  mainContent.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
