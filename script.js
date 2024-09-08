// Reference jsPDF from the CDN
var jsPDF = window.jspdf.jsPDF;
// Get form elements
var usernameInput = document.getElementById('username');
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var locationInput = document.getElementById('location');
var emailInput = document.getElementById('email');
var objectiveInput = document.getElementById('objective');
var skillsInput = document.getElementById('skills');
var educationInput = document.getElementById('education');
var awardsInput = document.getElementById('awards');
var languagesInput = document.getElementById('languages');
var generatePdfButton = document.getElementById('generate-pdf');
var shareableUrlElement = document.getElementById('shareable-url');
// Handle PDF generation
generatePdfButton.addEventListener('click', function () {
    var doc = new jsPDF();
    var username = usernameInput.value;
    // Add details to the PDF
    doc.text("Resume - ".concat(nameInput.value), 10, 10);
    doc.text("Username: ".concat(username), 10, 20);
    doc.text("Contact: ".concat(contactInput.value), 10, 30);
    doc.text("Location: ".concat(locationInput.value), 10, 40);
    doc.text("Email: ".concat(emailInput.value), 10, 50);
    doc.text("Objective: ".concat(objectiveInput.value), 10, 60);
    doc.text("Skills: ".concat(skillsInput.value), 10, 70);
    doc.text("Education: ".concat(educationInput.value), 10, 80);
    doc.text("Awards: ".concat(awardsInput.value), 10, 90);
    doc.text("Languages: ".concat(languagesInput.value), 10, 100);
    // Save the PDF
    doc.save("".concat(username, "-resume.pdf"));
    // Generate a shareable link (for now, just display in the UI)
    var shareableUrl = "".concat(window.location.origin, "/").concat(username, "-resume");
    shareableUrlElement.textContent = shareableUrl;
});
