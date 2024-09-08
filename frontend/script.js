document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const resumeOutput = document.getElementById('resume-output');
    const resumeDiv = document.getElementById('resume');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');
    const shareLink = document.getElementById('share-link');

    generateBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const location = document.getElementById('location').value;
        const contact = document.getElementById('contact').value;
        const objective = document.getElementById('objective').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;
        const awards = document.getElementById('awards').value;
        const activities = document.getElementById('activities').value;

        resumeDiv.innerHTML = `
            <h1>${name}</h1>
            <h2>Contact: ${email} | ${location} | ${contact}</h2>
            <h3>Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Awards</h3>
            <p>${awards}</p>
            <h3>Extra-Curricular Activities</h3>
            <p>${activities}</p>
        `;

        resumeOutput.classList.remove('hidden');

        // Handle Download PDF
        downloadBtn.addEventListener('click', () => {
            const options = {
                margin: 0.5,
                filename: `${username}_resume.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumeDiv).set(options).save();
        });

        // Handle Share Resume
        shareBtn.addEventListener('click', () => {
            const baseURL = window.location.origin;
            const resumeURL = `${baseURL}/resume/${username}`;
            shareLink.textContent = `Share your resume: ${resumeURL}`;
        });
    });
});

