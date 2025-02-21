// Function to calculate sustainability score and update chart
function calculateSustainability() {
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const water = parseFloat(document.getElementById('water').value) || 0;

    const sustainabilityScore = (energy * 0.5) + (water * 0.1); // Example calculation
    document.getElementById('result').innerText = `Your sustainability score: ${sustainabilityScore.toFixed(2)}`;

    // Update chart data dynamically
    sustainabilityChart.data.datasets[0].data = [energy, water, energy * 0.3, water * 0.2]; // Adjust calculations if needed
    sustainabilityChart.update();
}

// Back to Top Button Functionality
window.onscroll = function () {
    const backToTop = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Initialize Chart.js
const ctx = document.getElementById('sustainabilityChart')?.getContext('2d');
let sustainabilityChart;

if (ctx) {
    sustainabilityChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Energy', 'Water', 'Waste', 'Carbon'],
            datasets: [{
                label: 'Sustainability Metrics',
                data: [0, 0, 0, 0], // Default values, updated dynamically
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// ✅ Contact Form Submission & Success Popup
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            const successMessages = [
                "Thank you! We’ve received your message and will get back to you soon.",
                "Your message has been sent successfully! Expect a reply shortly.",
                "Great! Your inquiry has been submitted. We’ll respond as soon as possible.",
                "Thanks for reaching out! We'll review your message and get back to you.",
                "Message sent! We appreciate your contact and will be in touch soon."
            ];

            // Pick a random success message
            const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];

            // Create and show a success popup
            const popup = document.createElement("div");
            popup.className = "popup-message";
            popup.innerHTML = `<p>${randomMessage}</p><button onclick="this.parentElement.remove()">OK</button>`;

            document.body.appendChild(popup);

            // Clear the form fields after submission
            form.reset();
        });
    }
});
