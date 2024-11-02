const faqs = document.querySelector(".faqs")

faqs.addEventListener("click", (event) => {
  const faq = event.target.closest(".faq")
  if (!faq) return

  const plusIcon = faq.querySelector(".question img")
  const answer = faq.querySelector(".answer")

  // Hide all visible answers except the one being clicked
  const allAnswers = faqs.querySelectorAll(".answer")
  allAnswers.forEach((item) => {
    if (item !== answer && item.classList.contains("visible")) {
      item.classList.remove("visible")
      item.style.maxHeight = 0
      item.closest(".faq").querySelector(".question img").src =
        "./assets/images/icon-plus.svg"
    }
  })

  // Toggle the clicked answer visibility
  answer.classList.toggle("visible")

  if (answer.classList.contains("visible")) {
    plusIcon.src = "./assets/images/icon-minus.svg"
    answer.style.maxHeight = answer.scrollHeight + "px"
  } else {
    plusIcon.src = "./assets/images/icon-plus.svg"
    answer.style.maxHeight = 0
  }
})
