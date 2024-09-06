const url =
  "https://script.google.com/macros/s/AKfycbxKPrn74wc0VYabNv-WBqCTpmYMLJHkzh_7l7kbbJl188ip0a3xYUlebbgb8gX30n6t/exec";
const myForm = document.querySelector("#myForm");
const myName = document.querySelector("#name");
const myEmail = document.querySelector("#email");
const myMessage = document.querySelector("#message");
const mySubject = document.querySelector("#subject");
const subBtn = document.querySelector('input[type="submit"]');
const main = document.querySelector(".myForm");
myForm.addEventListener("submit", submitter);

function submitter(e) {
  console.log("submitted");
  e.preventDefault();
  subBtn.disabled = true;
  let message = "";
  if (myName.value.length < 1) {
    myName.style.borderColor = "red";
  }
  if (myEmail.value.length < 5) {
    myEmail.style.borderColor = "red";
  }
  if (message) {
    const div = document.createElement("div");
    div.innerHTML = message;
    div.style.color = "red";
    myForm.append(div);
    setTimeout(() => {
      div.remove();
      myName.style.borderColor = "";
      myEmail.style.borderColor = "";
    }, 5000);
    subBtn.disabled = false;
  } else {
    const myObj = {
      name: myName.value,
      email: myEmail.value,
      message: myMessage.value,
      subject: mySubject.value,
    };
    addSendMail(myObj);
  }
}

function addSendMail(data) {
  // Show the popup modal
  const popupModal = document.getElementById("popupModal");
  const popupMessage = document.getElementById("popupMessage");
  const closePopup = document.getElementById("closePopup");

  const popupModalSucces = document.getElementById("popupModalSucces");

  popupModal.style.display = "flex";

  //   console.log(data);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (json.rowval) {
        popupModal.style.display = "none";
        popupModalSucces.style.display = "flex";

        setTimeout(() => {
          popupModal.style.display = "none";
          popupModalSucces.style.display = "none";
        }, 2000);
      } else {
        popupModal.style.display = "none"; // Hide the modal if there is an error
        popupModalSucces.style.display = "none";
        subBtn.disabled = false;
      }
    });
}
