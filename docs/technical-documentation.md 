# Technical Documentation — Assignment 2

## 1. Project Overview

This project is an interactive and responsive personal portfolio website developed for SWE 363 Assignment 2.

The website builds upon Assignment 1 by adding dynamic content, improved form feedback, and animations to enhance the user experience.

The portfolio introduces me as a Software Engineering student, showcases my previous projects, and provides visitors with ways to contact me.

## 2. Technologies Used

- **HTML5:** Website structure and content.
- **CSS3:** Styling, responsive layouts, and animations.
- **JavaScript:** Dynamic content, form handling, and user interactions.
- **Git and GitHub:** Version control and repository management.
- **IntelliJ IDEA:** Development environment.

## 3. Project Structure

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

## 4. Website Sections

### About Me

Introduces me as a Software Engineering student and provides information about my interests.

### Projects

Displays two university projects:

1. **Database Management System:** A relational database developed using SQL and integrated with Java.
2. **Interactive Star Game:** An interactive game developed entirely in Java.

Each project includes an image, title, and description.

### Contact

Provides contact information and a form containing Name, Email, and Message fields.

## 5. Dynamic Content — Live Project Search

A live search feature was added to the Projects section using JavaScript.

Visitors can type keywords into the search field to filter the displayed project cards.

The feature works by:

1. Detecting input using the JavaScript `input` event.
2. Converting the search text to lowercase.
3. Comparing the entered text with the project cards' content.
4. Showing matching projects and hiding nonmatching projects.
5. Displaying a message when no projects match the search.

For example:

- Searching for `SQL` displays the Database Management System project.
- Searching for `Star` displays the Interactive Star Game project.
- Searching for `Python` displays a message indicating that no projects were found.

This feature improves navigation and allows visitors to find relevant projects quickly.

## 6. Data Handling and Form Validation

The website uses a contact form to demonstrate basic data handling with JavaScript.

The form includes three required fields:

- Name
- Email
- Message

HTML validation prevents submission when required fields are empty or when the email format is invalid.

JavaScript listens for the form's `submit` event and prevents the default submission behavior using `event.preventDefault()`.

After valid submission:

1. A confirmation message appears on the webpage.
2. The form fields are cleared.

The website does not use a backend, so messages are not actually sent or stored.

## 7. Error Handling and User Feedback

The website provides feedback for different user actions.

**Project Search:**

When a search produces no matching projects, the website displays:

> No projects found. Try a different keyword.

**Contact Form:**

- Empty required fields trigger browser validation.
- Invalid email formats trigger browser validation.
- Valid submissions display a confirmation message explaining that the form is a demonstration and no message was sent.

These features help visitors understand the results of their actions.

## 8. Animations and Transitions

CSS transitions were added to the project cards to improve the user experience.

When a visitor hovers over a project card:

- The card moves slightly upward.
- A soft shadow appears.
- The card smoothly returns to its original position when the mouse moves away.

The animation uses CSS properties including:

- `transition`
- `transform`
- `box-shadow`

A `prefers-reduced-motion` media query is also included to reduce animation for visitors who prefer less motion.

## 9. Responsive Design

The website uses CSS Flexbox, CSS Grid, and media queries to adapt to different screen sizes.

On larger screens, project cards appear side by side. On smaller screens, they stack vertically.

The navigation layout and contact form also adapt to smaller screens.

Project images use `object-fit: contain` to remain fully visible when the screen size changes.

## 10. Testing

The website was tested in Safari and Google Chrome.

Responsive behavior was checked by resizing the browser window to represent desktop, tablet, and mobile screen sizes.

The following features were tested successfully:

- Navigation between website sections.
- Live project filtering using different keywords.
- Empty search results message.
- Restoring all projects when the search field is cleared.
- Required field validation.
- Invalid email validation.
- Contact form confirmation and reset.
- Project card hover animations.
- Responsive layouts and project images.
- Browser compatibility in Safari and Chrome.

All tested features worked as expected.

## 11. Code Organization and Quality

The project separates HTML, CSS, and JavaScript into different files.

The code uses meaningful element IDs, class names, and comments to improve readability.

The JavaScript functionality is organized around event listeners that respond to visitor actions.

The website uses lightweight front-end technologies without requiring additional frameworks or backend services.

## 12. Version Control

Git and GitHub were used to manage the project.

Assignment 1 was used as the foundation, and new features were added through separate development stages.

Meaningful commits document changes such as:

- Initializing Assignment 2 from Assignment 1.
- Adding live project search functionality.
- Improving contact form feedback.
- Adding project card animations.
- Updating project documentation.

AI assistance is credited in relevant commit messages.