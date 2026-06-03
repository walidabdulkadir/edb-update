<<<<<<< HEAD
# Employee Database Management

Employee Database Management is a clean, browser-based employee directory for viewing, adding, and removing employee records. It uses plain HTML, CSS, and JavaScript, making it easy to run, understand, and extend without any build tools or framework setup.

## Overview

The application loads employee data from `data.json`, displays a searchable-style list layout, and lets users inspect full employee details in a dedicated information panel. Users can also add new employees through a modal form, including an optional profile image.

## Features

- View a list of employees in a responsive two-panel layout
- Open full employee details by selecting a record from the list
- Add new employees through an in-page form
- Upload an optional employee image from local storage
- Remove employees from the current session with a single click
- Works with a simple static file setup

## Project Structure

- `index.html` - Main application markup
- `style.css` - Responsive UI styling
- `script.js` - Employee loading, rendering, add, and delete logic
- `data.json` - Seed employee data loaded on startup

## Getting Started

### Prerequisites

- A modern web browser
- A local static server recommended for the best experience

### Run Locally

Because the app fetches `data.json`, it is best served through a local web server rather than opened directly from the file system.

#### Option 1: VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension if needed.
3. Right-click `index.html` and choose **Open with Live Server**.

#### Option 2: Simple Local Server

If you already have a local server available, serve the project root and open `index.html` in your browser.

## How To Use

1. Open the application in your browser.
2. Review the employee list on the left.
3. Select an employee to view their details on the right.
4. Click **Add Employee** to open the form.
5. Fill in the employee information and optionally upload an image.
6. Submit the form to add the employee to the current list.
7. Use **Delete** to remove an employee from the list.

## Data Format

`data.json` contains an array of employee objects. Each record uses the following fields:

- `first name`
- `last name`
- `address`
- `email`
- `phone`
- `DOB`
- `image`

`
`
``

## Notes

- Added employees exist in memory for the current browser session only.
- Refreshing the page restores the original list from `data.json`.
- Uploaded images are previewed locally using object URLs and are not persisted to disk.

## Customization Ideas

- Connect the app to a real backend or database for persistence
- Add form validation for required fields and email format
- Introduce edit/update functionality for employee records
- Add sorting or filtering for larger employee lists
- Replace the static data source with an API

## License

No license has been specified for this project yet. Add one if you plan to share or distribute the application.
=======
# Employee Directory Dashboard

An interactive Employee Directory Dashboard built using HTML, CSS, and JavaScript. The application allows users to browse employee records, view detailed employee information, and navigate through employee profiles using a clean and responsive interface.

## 🚀 Live Features

* Display employee records from a JSON data source
* View detailed employee information
* Employee profile images
* Dynamic rendering using JavaScript
* Responsive user interface
* Organized employee directory layout
* Fast client-side data handling

## 📸 Preview

Add screenshots of the application here.

```text
screenshots/
├── dashboard.png
├── employee-list.png
└── employee-details.png
```

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript (ES6)
* JSON

## 📂 Project Structure

```text
edb-update/
│
├── index.html      # Main application page
├── style.css       # Application styling
├── script.js       # Application logic
├── data.json       # Employee dataset
└── README.md
```

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/walidabdulkadir/edb-update.git
```

### Open the Project

Simply open `index.html` in your browser.

Or use VS Code Live Server:

```bash
Right Click → Open with Live Server
```

## 📋 Employee Data Structure

Example employee object:

```json
{
  "id": 1,
  "name": "John Doe",
  "position": "Software Engineer",
  "department": "Engineering",
  "email": "john@example.com",
  "image": "employee-photo.jpg"
}
```

## 🎯 Learning Objectives

This project demonstrates:

* DOM Manipulation
* JSON Data Handling
* Dynamic UI Rendering
* Responsive Web Design
* JavaScript Event Handling
* Frontend Application Architecture

## 🔮 Future Improvements

* Search functionality
* Employee filtering
* Employee sorting
* Dark mode
* Backend integration
* Database support
* Authentication system
* Employee CRUD operations

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

## 👨‍💻 Author

**Walid Abdulkadir**

Software Engineering Student | Frontend Developer

GitHub: https://github.com/walidabdulkadir

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, consider giving it a star on GitHub.
>>>>>>> 844936ca55c9137229acd5353f727a189afb4d2a
