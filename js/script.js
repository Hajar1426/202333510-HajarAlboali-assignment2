
// Handle contact form submission
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Display a confirmation message
    formFeedback.textContent =
        "Form submitted successfully! This is a demo, so no message was sent.";

    formFeedback.className = "success-message";

    // Clear the form fields
    contactForm.reset();
});


// Filter projects based on what the visitor types
const searchInput = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let matches = 0;

    projectCards.forEach(function (card) {
        const projectText = card.textContent.toLowerCase();
        const isMatch = projectText.includes(searchText);

        card.hidden = !isMatch;

        if (isMatch) {
            matches++;
        }
    });

    noResults.hidden = matches > 0;
});