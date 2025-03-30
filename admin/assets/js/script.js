
// Event Delegation: Listen for clicks on the document
document.addEventListener('click', function (event) {
    // Check if the clicked element or its parent has the "menu_Button" class
    if (event.target.closest('.menu_Button')) {
        document.body.classList.toggle('menu_expand'); // Adjusts the grid layout
        document.querySelector('.sidebar').classList.toggle('expand');
    }
});

var subMenu = document.querySelectorAll('.sub_menu');
subMenu.forEach(element => {
    element.addEventListener('click', function () {
        element.classList.toggle('active');
    });
});


// Dark Mode

document.addEventListener("DOMContentLoaded", () => {
    // Check the saved preference on page load
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const button = document.getElementById('darkModeToggle');

    body.classList.add("dark-mode");
    icon.textContent = '☀️';
    button.querySelector('span').textContent = 'Light Mode';

    // Save the preference to local storage
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const button = document.getElementById('darkModeToggle');

    body.classList.remove("dark-mode");
    icon.textContent = '🌙';
    button.querySelector('span').textContent = 'Dark Mode';

    // Remove the preference from local storage
    localStorage.setItem("darkMode", "disabled");
}

function toggleDarkMode() {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

//Responsive mobile and desktop layouts
function updateBodyClass() {
    if (window.innerWidth <= 678) {
        document.body.classList.add("mobile");
        document.body.classList.remove("desktop");
    } else {
        document.body.classList.add("desktop");
        document.body.classList.remove("mobile");
    }
}

// Run on page load
updateBodyClass();

// Run on window resize
window.addEventListener("resize", updateBodyClass);
