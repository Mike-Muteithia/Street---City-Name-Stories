# Streets & Stories

### Author: Mike Muteithia

## 🌍 Description

**Streets & Stories** is an interactive Single Page Application (SPA) that lets users explore, share, and celebrate the cultural and historical stories behind cities and streets around the world—starting with Canada. Whether you're passionate about urban heritage or just curious about the names behind the places you walk, this project brings those narratives to life. This application is not only limited to Canada since users can share stories on and from any street or city in the world.

Users can search, filter, and contribute their own stories categorized by city or street, with all data managed through a local `json-server` backend.

---

## 🧠 Sample Use Case

You're visiting **Robson Street** in Vancouver and wonder about its origins. On **Streets & Stories**, you search for "Robson" and instantly get a rich, descriptive story about its transformation from a quiet neighborhood into a vibrant, cosmopolitan district.

---

## 📦 Features

- 🔍 **Search** by city or street name
- 📚 **Read** rich, descriptive entries
- ➕ **Add** your own stories via a user-friendly form
- 🗂️ **Filter** by `region` and `category` (`city` or `street`)
- ⚡ Real-time updates using JSON Server API
- 📱 Responsive design for all device sizes

---

## 🚀 Getting Started
### 🔧 Prerequisites
- Node.js and npm installed

- ```json-server``` installed globally or locally

### 📥 Installation
1. Clone the repository
```git clone https://github.com/your-github-username/streets-and-stories.git```
```cd streets-and-stories```
2. Install json-server if you haven't already:
```npm install json-server```
3. Create a db.json in the root folder and paste the sample data.

4. Run the backend server:
```npx json-server --watch db.json```
5. Open index.html in your browser or deploy via GitHub Pages.

## 🧱 Built With
- HTML5 & CSS3 — for structure and styling

- Vanilla JavaScript — for DOM manipulation and API calls

- json-server — to simulate a RESTful backend

- GitHub Pages — for live deployment

## 📁 File Structure
p1-project/
│
├── index.html           # Main HTML page
├── style.css            # Styling for the app
├── script.js            # Core JavaScript logic
├── db.json              # Mock backend data
└── README.md            # Project documentation

## 🧾 License
This project is licensed under the MIT License.

## 🤝 Contributing
Pull requests and story submissions are welcome!
To suggest a new story:

1. Fork the repo

2. Add a new entry in db.json

3. Submit a pull request

Or simply open an issue with your suggestion.
