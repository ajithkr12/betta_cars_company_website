const url =
  "https://script.google.com/macros/s/AKfycbxaa_3ZQtDPUT7WNMTdPIliuwjHABd7yONB_yun-gHxSklPEMg4AnpyOYwQ-d16Lz1-/exec";
const myForm = document.querySelector("#myForm");
const companyName = document.querySelector("#companyName");
const companyAddress = document.querySelector("#companyAddress");
const customerName = document.querySelector("#customerName");

const companyLocation = document.querySelector("#companyLocation");
const emailAddress = document.querySelector("#emailAddress");
const contactNumber = document.querySelector("#contactNumber");

const subBtn = document.querySelector('input[type="submit"]');
const main = document.querySelector(".myForm");
myForm.addEventListener("submit", submitter);

function submitter(e) {
  console.log("submitted");
  e.preventDefault();

  const myObj = {
    companyName: companyName.value,
    companyAddress: companyAddress.value,
    customerName: customerName.value,
    companyLocation: companyLocation.value,
    emailAddress: emailAddress.value,
    contactNumber: contactNumber.value,
  };
  addSendMail(myObj);
}

function addSendMail(data) {
  // Show the popup modal
  const popupModal = document.getElementById("popupModal");
  const popupModalSucces = document.getElementById("popupModalSucces");
  const businessAccountPopup = document.getElementById("businessAccountPopup");
  popupModal.style.display = "flex";
  businessAccountPopup.style.display = "none";

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
