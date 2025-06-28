export const owlCarousel = () => {
  // DOM Element Selectors
  const cardList = document.getElementsByClassName("testimonial-card");
  const cardContainer = document.querySelector(".swiper-testimonials");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // card width including margin
  const cardWidth = cardList[0].offsetWidth + 32;
  let cardIndex = 0;

  // Next Button Click Handler
  nextBtn.addEventListener("click", () => {
    // calculation for clone
    const cloneIndex = cardIndex % cardList.length;

    if (cardIndex <= cardList.length - 1) {
      // Clone the card and append
      const lastCard = cardList[cloneIndex].cloneNode(true);
      cardContainer.appendChild(lastCard);

      // Scroll to next position
      cardContainer.scrollTo({
        left: cardWidth * (cardIndex + 1),
        behavior: "smooth",
      });
    }
    // Increment position counter
    cardIndex++;
  });

  // Previous Button Click Handler
  prevBtn.addEventListener("click", () => {
    // Only go back if not at first card
    if (cardIndex > 0) {
      // Decrement position counter
      cardIndex--;
      // Scroll to previous position
      cardContainer.scrollTo({
        left: cardWidth * cardIndex,
        behavior: "smooth",
      });
    }
  });
};
