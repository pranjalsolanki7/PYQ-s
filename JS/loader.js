// Load subject JS file dynamically
function loadSubject(subject) {

  // Hide cards
  document.getElementById("subjectSection").style.display = "none";

  // Show content
  document.getElementById("contentSection").style.display = "block";

  // Clear old content
  document.getElementById("questionArea").innerHTML = "";
  document.getElementById("subjectTitle").innerText =
    subject.toUpperCase() + " – Previous Year Questions";

  // Load subject file
  const script = document.createElement("script");
  script.src = "subjects/" + subject + ".js";
  document.body.appendChild(script);
}

// Go back to subject cards
function goBack() {
  location.reload(); // simplest & safest for non-tech
}
