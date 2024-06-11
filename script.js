const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
    e.preventDefault();

    // Gathers number of images and the input from the users text
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    const imgCardMarkup = Array.from({length: userImgQuantity}, () =>
        `  <div class="img-card loading">
                 <img src="images/load.png" alt="image">
                <a href="#" class="download-btn">
                        <i class="ri-save-fill"></i>
                </a>
            </div>`
    ).join("");

    console.log(imgCardMarkup);
}

generateForm.addEventListener("submit", handleFormSubmission)