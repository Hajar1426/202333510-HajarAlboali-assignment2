# AI Usage Report — Assignment 2

## 1. Introduction

This report documents how I used artificial intelligence tools while developing my interactive personal portfolio website for SWE 363 Assignment 2.

The website builds upon my Assignment 1 portfolio by adding dynamic project searching, improved contact form feedback, and CSS animations.

AI was used to assist with development, debugging, explanations, and documentation.

## 2. AI Tools Used

**Tool:** ChatGPT  
**Model:** GPT-6  
**Purpose:** Code suggestions, debugging, explanations, and documentation assistance.

I used ChatGPT for the following tasks:

- Understanding the Assignment 2 requirements and organizing the development process.
- Setting up the Assignment 2 GitHub repository using my Assignment 1 portfolio.
- Troubleshooting Git and GitHub authentication issues.
- Adding a live project search feature using JavaScript.
- Improving contact form feedback and validation.
- Adding CSS hover animations to project cards.
- Explaining JavaScript event listeners and dynamic content updates.
- Reviewing the website's functionality and responsive behavior.
- Preparing technical documentation and README content.
- Troubleshooting a GitHub documentation link that contained an extra space in the filename.

## 3. Benefits and Challenges

### Benefits

ChatGPT helped me break down a long assignment into smaller, manageable steps.

It provided explanations and code suggestions that helped me understand how to add new interactive features to my existing website.

The live project search was especially useful because it introduced me to dynamically filtering HTML elements based on user input.

AI also helped me troubleshoot GitHub issues and improve the user experience of the contact form.

### Challenges

One challenge was connecting my existing IntelliJ project to the new GitHub repository. I encountered Git authentication errors and needed to use IntelliJ's GitHub integration to push the project successfully.

Another challenge involved a broken link to the technical documentation on GitHub. The problem was caused by an extra space at the end of the filename, which appeared as `%20` in the URL.

These experiences showed me the importance of testing and verifying AI suggestions instead of assuming they will always work immediately.

## 4. Learning Outcomes

During this assignment, I learned how to:

- Use JavaScript event listeners to respond to user input.
- Filter project cards dynamically using JavaScript.
- Show an empty-state message when no projects match a search.
- Improve contact form feedback without a backend.
- Apply CSS transitions and hover effects.
- Support reduced-motion preferences.
- Use Git and GitHub to manage project changes.
- Debug Git authentication and file path issues.
- Test interactive features across different browsers and screen sizes.

## 5. Responsible AI Use and Modifications

I used ChatGPT as a development assistant and reviewed the suggested changes before incorporating them into my project.

I tested the live project search using different keywords, including searches that produced no results.

I also tested the contact form with empty fields, invalid email addresses, and valid inputs.

For the animation feature, I checked that the project cards moved smoothly when hovered over.

I tested the website in Safari and Google Chrome and checked its responsive layout at different screen sizes.

The AI-assisted changes were incorporated into my existing portfolio, and I verified their behavior before committing them to GitHub.

## 6. AI Usage Log

The following table documents my use of ChatGPT during Assignment 2. C01 refers to the complete ChatGPT conversation, while A01–A06 refer to the original AI-generated artifacts included in the evidence ZIP.

| ID | Tool (Model) | Date | Purpose | Files Affected | What I Changed and How I Verified It |
|---|---|---|---|---|---|
| C01 | ChatGPT (GPT-6) | 2026-10-19 | Step-by-step guidance for Assignment 2, including GitHub setup, coding, debugging, testing, and documentation | Multiple project files | Followed the guidance, implemented the features, and tested the website in Safari and Chrome. |
| A01 | ChatGPT (GPT-6) | 2026-10-19 | Generate live project search functionality | index.html, js/script.js, css/styles.css | Integrated the suggested code and tested matching keywords, nonmatching keywords, and clearing the search. |
| A02 | ChatGPT (GPT-6) | 2026-10-19 | Improve contact form feedback | index.html, js/script.js, css/styles.css | Replaced the alert with an inline confirmation and tested required fields, email validation, and successful submission. |
| A03 | ChatGPT (GPT-6) | 2026-10-19 | Add hover animations and reduced-motion support | css/styles.css | Added the CSS transitions and verified the hover effect in the browser. |
| A04 | ChatGPT (GPT-6) | 2026-10-19 | Generate technical documentation | docs/technical-documentation.md | Reviewed the document and corrected the filename issue before verifying the GitHub link. |
| A05 | ChatGPT (GPT-6) | 2026-10-19 | Generate Assignment 2 README | README.md | Added the README, reviewed its content, and verified the documentation links. |
| A06 | ChatGPT (GPT-6) | 2026-10-19 | Generate the AI usage report | docs/ai-usage-report.md | Reviewed the report and updated the usage log to match the evidence files. |
## 7. AI Usage Declaration

**Student Name:** Hajar Alboali  
**Student ID:** 202333510  
**Date:** 2026-10-19

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted.

## 8. AI Evidence

The AI evidence is organized for separate submission through Blackboard as:

`202333510-HajarAlboali-assignment2-ai-evidence.zip`

The ZIP must contain:

- `conversations/` — complete, unedited AI conversations.
- `artifacts/` — original AI-generated artifacts before my modifications.

The AI evidence ZIP and conversation logs will not be committed to the public GitHub repository.
