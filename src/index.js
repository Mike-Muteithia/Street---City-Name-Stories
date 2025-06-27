const BASE_URL = 'https://street-and-city-name-stories.onrender.com';

// Entry point function: Invokes the three main feature once DOM is loaded
function invokeStoryProgram() {
    addNewStoryListener(); // Enables form submission for creating new stories
    searchGet(); // Loads existing stories and sets up search functionality
    createStoryModalContainer(); // Handles modal open/close logic for creating stories
}

// Runs the invokeStoryProgram function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", invokeStoryProgram);

// Adds an event listener to the form to handle the creation of new stories
function addNewStoryListener() {
    const form = document.getElementById('createNewStoryForm');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        const region = document.getElementById('region').value.trim();

        if (!title || !content || !region) {
            alert('Please fill in all fields.');
            return;
        }

        const newStory = { title, content, region };

        try {
            const res = await fetch(`${BASE_URL}/stories`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStory)
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const savedStory = await res.json();
            const storyList = document.getElementById('storyList');

            const storyItem = document.createElement('div');
            storyItem.classList.add('story-item');
            storyItem.innerHTML = `
                <h3>${savedStory.title}</h3>
                <p>${savedStory.content}</p>
                <p><strong>Region:</strong> ${savedStory.region}</p>
            `;
            storyList.appendChild(storyItem);
            form.reset();
        } catch (error) {
            console.error('Error saving story:', error);
            alert('There was an error saving your story. Please try again.');
        }
    });
}

// Fetches stories from the server and sets up search functionality
function searchGet() {
    const storyCardTemplete = document.querySelector("[data-story-card-template]");
    const storyCardContainer = document.querySelector("[data-story-cards-container]");
    const searchInput = document.querySelector("[data-search]");

    let stories = [];

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        stories.forEach(story => {
            const isVisible =
                story.title.toLowerCase().includes(value) ||
                story.content.toLowerCase().includes(value) ||
                story.region.toLowerCase().includes(value);
            story.element.classList.toggle("hide", !isVisible);
        });
    });

    fetch(`${BASE_URL}/stories`)
        .then(response => response.json())
        .then(data => {
            stories = data.map(story => {
                const card = storyCardTemplete.content.cloneNode(true).children[0];
                const title = card.querySelector("[data-story-title]");
                const content = card.querySelector("[data-story-content]");
                const region = card.querySelector("[data-story-region]");
                const category = card.querySelector("[data-story-category]");

                title.textContent = story.title;
                content.textContent = story.content;
                region.textContent = story.region;
                category.textContent = story.category || "N/A";

                storyCardContainer.append(card);
                return { title: story.title, content: story.content, region: story.region, category: story.category, element: card };
            });
        })
        .catch(error => {
            console.error('Error fetching stories:', error);
            alert('There was an error loading the stories. Please try again later.');
        });
}

// Handles the modal for creating new stories
function createStoryModalContainer() {
    const open = document.getElementById('createBtn');
    const createModalContainer = document.getElementById('create-modal-container');
    const close = document.getElementById('closeCreateStoryModal');

    open.addEventListener('click', () => {
        createModalContainer.classList.add('show');
    });

    close.addEventListener('click', () => {
        createModalContainer.classList.remove('show');
    });
}
