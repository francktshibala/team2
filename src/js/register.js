document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("register-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  // Check if visitor has seen the modal before
  if (!localStorage.getItem("hasRegisteredModalShown")) {
    modal.classList.add("show");
  }

  // Close modal when close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    // Mark modal as shown so it won't appear again
    localStorage.setItem("hasRegisteredModalShown", "true");
  });
});
