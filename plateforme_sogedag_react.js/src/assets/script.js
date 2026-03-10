document.addEventListener("DOMContentLoaded", function () {
  initOtpInputs();
  initImagePreviews();
  initRichEditor();
});

function initOtpInputs() {
  const otpInputs = document.querySelectorAll(".otp-input");
  if (!otpInputs.length) return;

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 1);
      if (this.value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !this.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", function (e) {
      const pasted = (e.clipboardData || window.clipboardData)
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, 6);

      if (!pasted) return;
      e.preventDefault();

      pasted.split("").forEach((char, i) => {
        if (otpInputs[i]) otpInputs[i].value = char;
      });

      otpInputs[Math.min(pasted.length, otpInputs.length - 1)].focus();
    });
  });
}

function initImagePreviews() {
  const imageInputs = document.querySelectorAll("[data-preview-target]");
  imageInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const previewId = input.getAttribute("data-preview-target");
      const preview = document.getElementById(previewId);
      if (!preview || !input.files || !input.files[0]) return;

      const file = input.files[0];
      if (!file.type.startsWith("image/")) {
        preview.style.display = "none";
        preview.src = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    });
  });
}

function initRichEditor() {
  const form = document.getElementById("blogForm");
  const editor = document.getElementById("blogEditor");
  const hidden = document.getElementById("blogContent");

  if (!form || !editor || !hidden) return;

  form.addEventListener("submit", function () {
    hidden.value = editor.innerHTML;
  });
}

function formatEditor(command) {
  document.execCommand(command, false, null);
}

function addLinkToEditor() {
  const url = prompt("Entrez l'URL du lien :");
  if (!url) return;
  document.execCommand("createLink", false, url);
}

function logout() {
  window.location.href = "login.html";
}
const verifyInputs = document.querySelectorAll(".verify-code-input");

if (verifyInputs.length) {
  verifyInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 1);
      if (this.value && index < verifyInputs.length - 1) {
        verifyInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !this.value && index > 0) {
        verifyInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", function (e) {
      const pasted = (e.clipboardData || window.clipboardData)
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, 6);

      if (!pasted) return;
      e.preventDefault();

      pasted.split("").forEach((char, i) => {
        if (verifyInputs[i]) verifyInputs[i].value = char;
      });

      verifyInputs[Math.min(pasted.length, verifyInputs.length - 1)].focus();
    });
  });
}