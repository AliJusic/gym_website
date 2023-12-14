const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name :${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;
  Email.send({
    
    Host: "smtp.elasticemail.com",
    Username: "",
    Password: "",
    To: "",
    From: "",
    Subject: "New Contact Form Enquiry",
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[2].value != "") {
      checkEmail();
    }

    items[2].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const errorTxtEmail = document.querySelector(".error-txt.email");
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email adress";
    } else {
      errorTxtEmail.innerText = "Email adress can`t be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function checkCharCount() {
  const errorTxtName = document.querySelector(".error-txt.name");
  // console.log(fullName.value.length);

  if (fullName.value.length > 60) {
    fullName.classList.add("error");
    fullName.parentElement.classList.add("error");
    errorTxtName.innerText = "Name can`t be longer than 60 characters";
  } else if (fullName.value.length == 0) {
    fullName.classList.add("error");
    fullName.parentElement.classList.add("error");
    errorTxtName.innerText = "Name can`t be blank";
  } else {
    fullName.classList.remove("error");
    fullName.parentElement.classList.remove("error");
  }
}

function checkMessage() {
  const errorTxtMessage = document.querySelector(".error-txt.message");
  // console.log(fullName.value.length);

  if (message.value.length > 200) {
    message.classList.add("error");
    message.parentElement.classList.add("error");
    errorTxtMessage.innerText = "Message can`t be longer than 200 characters";
  } else if (message.value.length == 0) {
    message.classList.add("error");
    message.parentElement.classList.add("error");
    errorTxtMessage.innerText = "Message can`t be blank";
  } else {
    message.classList.remove("error");
    message.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  checkCharCount();
  checkMessage();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();
    console.log("OK");
  }
});
