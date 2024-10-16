


// Function to generate resume URL
function generateResumeURL() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const baseURL = window.location.href.split('?')[0]; // Avoid query parameters in base URL
    return `${baseURL}?user=${encodeURIComponent(username)}`;
}

// Function to copy resume URL to clipboard
function copyResumeURL() {
    const url = generateResumeURL();
    navigator.clipboard.writeText(url)
        .then(() => {
            alert('Resume URL copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy URL: ', err);
        });
}

// Function to download resume as PDF
function downloadPDF() {
    const resumeElement = document.querySelector('.resume');
    if (!resumeElement) return;

    html2pdf().from(resumeElement).save('resume.pdf');
}

// Add event listeners for buttons
document.getElementById('generate-url')?.addEventListener('click', () => {
    alert(`Your resume URL: ${generateResumeURL()}`);
});

document.getElementById('copy-link')?.addEventListener('click', copyResumeURL);

document.getElementById('download-pdf')?.addEventListener('click', downloadPDF);