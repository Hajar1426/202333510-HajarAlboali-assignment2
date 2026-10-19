# Hajar Alboali — Interactive Personal Portfolio

## SWE 363 — Assignment 2: Interactive Features

### Project Description

This project is an interactive and responsive personal portfolio website developed for SWE 363 Assignment 2.

It builds upon Assignment 1 by adding dynamic project searching, improved contact form feedback, and interactive animations.

The website introduces me as a Software Engineering student, showcases my university projects, and provides visitors with ways to contact me.

## Features

### 1. About Me
A personal introduction describing my academic background and interests.

### 2. Projects
Displays two university projects:

- **Database Management System:** A relational database developed using SQL and integrated with Java.
- **Interactive Star Game:** A Java-based game where players match the ball with the corresponding color of a multicolored star.

Each project includes an image, title, and description.

### 3. Live Project Search
Visitors can search for projects by typing keywords.

- Matching projects appear automatically.
- Nonmatching projects are hidden.
- A message appears when no projects match the search.
- Clearing the search restores all projects.

### 4. Contact Form
Visitors can enter their name, email, and message.

The form includes:
- Required field validation.
- Email format validation.
- A confirmation message after valid submission.
- Automatic clearing of the form fields.

**Note:** The form is a demonstration only. No messages are sent or stored because the website does not have a backend.

### 5. Animations
Project cards include smooth hover transitions with a subtle movement and shadow.

### 6. Responsive Design
The website adapts to desktop, tablet, and mobile screen sizes using CSS Flexbox, Grid, and media queries.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- IntelliJ IDEA

## Project Structure

```text
202333510-HajarAlboali-assignment2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

## How to Run Locally

No additional software packages or dependencies are required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Hajar1426/202333510-HajarAlboali-assignment2.git
   ```

2. Open the downloaded project folder.

3. Open `index.html` in Safari, Google Chrome, or another modern web browser.

4. Explore the portfolio and try the interactive features.

## How to Test the Interactive Features

**Project Search**

1. Navigate to the Projects section.
2. Enter `SQL` to display the database project.
3. Enter `Star` to display the Java game.
4. Enter `Python` to display the no-results message.
5. Clear the search field to display both projects again.

**Contact Form**

1. Navigate to the Contact section.
2. Try submitting empty fields to observe the validation.
3. Enter an invalid email to test email validation.
4. Complete all fields with valid information.
5. Submit the form to display the confirmation message.

**Animations**

Move the mouse over a project card to observe its hover effect.

## Browser Compatibility and Testing

The website was tested successfully in:

- Safari
- Google Chrome

The responsive layout was also tested at different browser widths representing desktop, tablet, and mobile devices.

## AI Integration

ChatGPT (GPT-6) was used to assist with code suggestions, debugging, explanations, responsive design, and documentation.

AI-generated suggestions were reviewed, implemented, and tested during development.

Detailed AI usage documentation is available in [AI Usage Report](docs/ai-usage-report.md).

## Technical Documentation

Further implementation details are available in [Technical Documentation](docs/technical-documentation.md).

## Author

**Hajar Alboali**

Software Engineering Student

SWE 363 — Assignment 2