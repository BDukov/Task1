document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("container");
  let link = document.createElement("p");
  link.classList.add("link");
  link.textContent = "Click";
  container.appendChild(link);

  link.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    //MODAL CONTENT
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    //Head Container
    const headContainer = document.createElement("div");
    headContainer.classList.add("head-container");
    modalContent.appendChild(headContainer);

    const headLeft = document.createElement("div");
    headLeft.classList.add("head-left");
    headContainer.appendChild(headLeft);

    const headRight = document.createElement("div");
    headRight.classList.add("head-right");
    headContainer.appendChild(headRight);

    //LOGO
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "https://handymanhandy.co.uk/pub/logo.png";

    headLeft.appendChild(logo);

    //Phone Number

    const phoneImg = document.createElement("img");
    phoneImg.classList.add("phone-img");
    phoneImg.src = "https://handymanhandy.co.uk/images/call.png";

    headLeft.appendChild(phoneImg);

    const phone = document.createElement("p");
    phone.classList.add("phone");
    phone.textContent = "020 8434 7477";

    headLeft.appendChild(phone);

    //CLOSE BUTTON
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = `<img src="./public/close.png" alt="">`;
    headRight.appendChild(closeBtn);

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    //BANNER
    const banner = document.createElement("div");
    banner.classList.add("banner");
    modalContent.appendChild(banner);

    //TEXT CONTAINER
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    banner.appendChild(textContainer);

    const textLeft = document.createElement("div");
    textLeft.classList.add("text-left");
    textContainer.appendChild(textLeft);

    const textRight = document.createElement("div");
    textRight.classList.add("text-right");
    textContainer.appendChild(textRight);

    //Text
    const text = document.createElement("p");
    text.classList.add("text");
    text.innerHTML = `Book a handyman services <br> in three easy steps`;

    const off = document.createElement("p");
    off.classList.add("off");
    off.innerHTML = `<p> Take 10% off with <br> this promo code* <br> <strong>OBF10</strong></p>`;

    const checkbox = document.createElement("img");
    checkbox.classList.add("checkbox");
    checkbox.src = "./public/check.png";

    textRight.appendChild(checkbox);
    textRight.appendChild(off);

    textLeft.appendChild(text);

    //BOOK Container
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    banner.appendChild(bookContainer);

    //book select
    const bookSelect = document.createElement("select");
    bookSelect.classList.add("book-select");
    bookSelect.innerHTML = "Select a service";

    const option1 = document.createElement("option");
    // option1.textContent = "Odd jobs";
    option1.innerHTML = "<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOdd jobs</p>";
    option1.classList.add("option");

    // const imgOption1 = document.createElement("img");
    // imgOption1.src = "./public/drill.png";

    // option1.appendChild(imgOption1);

    bookSelect.appendChild(option1);
    bookContainer.appendChild(bookSelect);

    //INPUT
    const inputPostcode = document.createElement("input");
    inputPostcode.classList.add("input-postcode");
    inputPostcode.placeholder = "Enter your postcode";

    bookContainer.appendChild(inputPostcode);

    //BUTTON BOOK NOW

    const bookNowBtn = document.createElement("button");
    bookNowBtn.classList.add("book-now-btn");
    // bookNowBtn.textContent = "BOOK NOW >";
    bookNowBtn.innerHTML = `<span>BOOK NOW</span>&nbsp&nbsp&nbsp<i class="fa-solid fa-chevron-right"></i>`;

    bookContainer.appendChild(bookNowBtn);

    //FOOTER

    const footer = document.createElement("div");
    footer.classList.add("footer");
    modalContent.appendChild(footer);

    const stepOne = document.createElement("div");
    stepOne.classList.add("step-one");
    footer.appendChild(stepOne);

    const stepOneImg = document.createElement("img");
    stepOneImg.classList.add("step-one-img");
    stepOneImg.src = "./public/touch.png";

    const stepOneHeader = document.createElement("h3");
    stepOneHeader.classList.add("step-one-header");
    stepOneHeader.textContent = "STEP 1";

    const stepOneText = document.createElement("p");
    stepOneText.classList.add("step-one-text");
    stepOneText.innerHTML = `Choose the service <br> you need.`;

    stepOne.appendChild(stepOneImg);
    stepOne.appendChild(stepOneHeader);
    stepOne.appendChild(stepOneText);

    const shape = document.createElement("img");
    shape.classList.add("shape");
    shape.src = "./public/shape.png";

    footer.appendChild(shape);

    const stepTwo = document.createElement("div");
    stepTwo.classList.add("step-two");
    footer.appendChild(stepTwo);

    const stepTwoImg = document.createElement("img");
    stepTwoImg.classList.add("step-two-img");
    stepTwoImg.src = "./public/calendar.png";

    const stepTwoHeader = document.createElement("h3");
    stepTwoHeader.classList.add("step-two-header");
    stepTwoHeader.textContent = "STEP 2";

    const stepTwoText = document.createElement("p");
    stepTwoText.classList.add("step-two-text");
    stepTwoText.innerHTML = `Choose date and time that fit <br> your schedule best.`;

    stepTwo.appendChild(stepTwoImg);
    stepTwo.appendChild(stepTwoHeader);
    stepTwo.appendChild(stepTwoText);

    const shape2 = document.createElement("img");
    shape2.classList.add("shape2");
    shape2.src = "./public/shape.png";

    footer.appendChild(shape2);

    const stepThree = document.createElement("div");
    stepThree.classList.add("step-three");
    footer.appendChild(stepThree);

    const stepThreeImg = document.createElement("img");
    stepThreeImg.classList.add("step-three-img");
    stepThreeImg.src = "./public/player.png";

    const stepThreeHeader = document.createElement("h3");
    stepThreeHeader.classList.add("step-three-header");
    stepThreeHeader.textContent = "STEP 3";

    const stepThreeText = document.createElement("p");
    stepThreeText.classList.add("step-three-text");
    stepThreeText.innerHTML = `Make a secure online payment <br> or pay cash upon job completion.`;

    stepThree.appendChild(stepThreeImg);
    stepThree.appendChild(stepThreeHeader);
    stepThree.appendChild(stepThreeText);

    modal.appendChild(modalContent);

    container.appendChild(modal);

    modal.style.display = "flex";

    modal.addEventListener("click", function () {
      if (event.targer === modal) {
        modal.style.display = "none";
      }
    });
  });
});
