var _a, _b, _c;
// Function to generate resume URL
function generateResumeURL() {
    var username = document.getElementById('username').value;
    var baseURL = window.location.href.split('?')[0]; // Avoid query parameters in base URL
    return "".concat(baseURL, "?user=").concat(encodeURIComponent(username));
}
// Function to copy resume URL to clipboard
function copyResumeURL() {
    var url = generateResumeURL();
    navigator.clipboard.writeText(url)
        .then(function () {
        alert('Resume URL copied to clipboard!');
    })
        .catch(function (err) {
        console.error('Failed to copy URL: ', err);
    });
}
// Function to download resume as PDF
function downloadPDF() {
    var resumeElement = document.querySelector('.resume');
    if (!resumeElement)
        return;
    html2pdf().from(resumeElement).save('resume.pdf');
}
// Add event listeners for buttons
(_a = document.getElementById('generate-url')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    alert("Your resume URL: ".concat(generateResumeURL()));
});
(_b = document.getElementById('copy-link')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', copyResumeURL);
(_c = document.getElementById('download-pdf')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', downloadPDF);