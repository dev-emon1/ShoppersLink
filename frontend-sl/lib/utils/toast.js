export const showToast = (message, type = "success") => {
  if (typeof window === "undefined") return;

  const toast = document.createElement("div");
  toast.textContent = message;
  toast.className = `
    fixed bottom-6 right-6 z-[9999]
    px-4 py-2 rounded-lg shadow-lg text-white font-medium text-sm
    animate-fadeIn
    ${type === "error" ? "bg-red-500" : "bg-main"}
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("animate-fadeOut");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
};
