// Reference jsPDF from the CDN
const { jsPDF } = window.jspdf as any;

// Get form elements
const usernameInput = document.getElementById('username') as HTMLInputElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const locationInput = document.getElementById('location') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const objectiveInput = document.getElementById('objective') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const awardsInput = document.getElementById('awards') as HTMLTextAreaElement;
const languagesInput = document.getElementById('languages') as HTMLTextAreaElement;
const generatePdfButton = document.getElementById('generate-pdf') as HTMLButtonElement;
const shareableUrlElement = document.getElementById('shareable-url') as HTMLSpanElement;

// Handle PDF generation
generatePdfButton.addEventListener('click', () => {
  const doc = new jsPDF();
  const username = usernameInput.value;

  // Add details to the PDF
  doc.text(`Resume - ${nameInput.value}`, 10, 10);
  doc.text(`Username: ${username}`, 10, 20);
  doc.text(`Contact: ${contactInput.value}`, 10, 30);
  doc.text(`Location: ${locationInput.value}`, 10, 40);
  doc.text(`Email: ${emailInput.value}`, 10, 50);
  doc.text(`Objective: ${objectiveInput.value}`, 10, 60);
  doc.text(`Skills: ${skillsInput.value}`, 10, 70);
  doc.text(`Education: ${educationInput.value}`, 10, 80);
  doc.text(`Awards: ${awardsInput.value}`, 10, 90);
  doc.text(`Languages: ${languagesInput.value}`, 10, 100);

  // Save the PDF
  doc.save(`${username}-resume.pdf`);

  // Generate a shareable link (for now, just display in the UI)
  const shareableUrl = `${window.location.origin}/${username}-resume`;
  shareableUrlElement.textContent = shareableUrl;
});
