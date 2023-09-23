let overlaypopup = document.querySelector(".overlay-popup");
let cancelpopup = document.querySelector(".back-btn");
const Loader = document.getElementById("loader");
function showSuccesMessage() {
  overlaypopup.classList.toggle("active-popup");
}
cancelpopup.addEventListener("click", function () {
  overlaypopup.classList.remove("active-popup");
});

const registrationForm = document.getElementById("registrationForm");
const teamName = document.getElementById("teamName");
const userEmail = document.getElementById("userEmail");
const phoneNumber = document.getElementById("phoneNumber");
const projectTopic = document.getElementById("projectTopic");
const projectCategory = document.getElementById("projectCategory");
const termsAndConditions = document.getElementById("termsAndConditions");
const groupSize = document.getElementById("groupSize");

async function registerUser() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: `${userEmail.value}`,
    phone_number: `${phoneNumber.value}`,
    team_name: `${teamName.value}`,
    group_size: `${groupSize.value}`,
    project_topic: `${projectTopic.value}`,
    category: `${projectCategory.value}`,
    privacy_poclicy_accepted: `${termsAndConditions.checked}`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  Loader.classList.add("visible");

  const res = await fetch(
    "https://backend.getlinked.ai/hackathon/registration",
    requestOptions
  );
  if (!res.ok) {
    alert("Oops! An Applicant with this Email already exists");
  } else {
    const result = await res.text();
    showSuccesMessage();
    console.log(result);
    Loader.classList.remove("visible");
    teamName.value = "";
    userEmail.value = "";
    phoneNumber.value = "";
    projectTopic.value = "";
    groupSize.value = "";
    termsAndConditions.checked = false;
  }
}

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser();
});
