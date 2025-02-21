const generateFrom = document.querySelector(".generate-form");
const imgGallery = document.querySelector(".image-gallery");
const handleFormSubmission = (e) =>{
  e.preventDefault();
  
  //Get user input and image quantity values from the form
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;

  //Creating Html Markup for the image cards with loading state
  const imgCardMarkup =Array.from({length: userImgQuantity}, ()=>
    `<div class="img-card loading">
  <img src="img/Loading.svg" alt="image">
  <a href="#" class="download-btn">
  <img src="img/download-button.svg" alt="download">
  </a>
  </div>`).join("");
  
   imgGallery.innerHTML = imgCardMarkup;
}
generateFrom.addEventListener("submit", handleFormSubmission);