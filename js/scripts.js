// Business Logic
let flavor;
function renderFlava(flavor) {
  return flavor.split(" ");
  
}

// UI Logic
 

  
function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("ice-cream").value;
  const testArr = renderFlava(passage);
  const ul = document.querySelector("ul#cream")
  const li = document.createElement("li")
  const appendLi = ul.append(li);
  for (let i =0; i < testArr.length; i++) {
      appendLi(testArr.split())
      console.log(passage);
  }
}

window.addEventListener("load", function() {
   document.querySelector("form").addEventListener("submit", handleFormSubmission);
});




