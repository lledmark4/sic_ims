// Event Delegation: Listen for clicks on the document
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Toggle sidebar and save state to local storage
    if (event.target.closest('.menu_Button')) {
        const isExpanded = sidebar.classList.toggle('expand');
        body.classList.toggle('menu_expand');
        localStorage.setItem("menuExpand", isExpanded ? "expanded" : "collapsed");
    }

    // Collapse sidebar when clicking on a sidebar item (mobile view)
    if (body.classList.contains("mobile") && event.target.closest(".sb_item")) {
        sidebar.classList.remove('expand');
        body.classList.remove('menu_expand');
        localStorage.setItem("menuExpand", "collapsed");
    }

    // Toggle Dark Mode
    if (event.target.closest('#darkModeToggle')) {
        toggleDarkMode();
    }

    // Toggle submenu and save state
    const subMenu = event.target.closest('.sub_menu');
    if (subMenu) {
        subMenu.classList.toggle('active');
        const submenuKey = `submenu-${[...document.querySelectorAll('.sub_menu')].indexOf(subMenu)}`;
        localStorage.setItem(submenuKey, subMenu.classList.contains('active'));
    }
});

// Restore sidebar, submenu, and dark mode state on page load
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Load sidebar state
    if (localStorage.getItem("menuExpand") === "expanded") {
        sidebar.classList.add('expand');
        body.classList.add('menu_expand');
    }

    // Dynamically add the transition after the page has loaded
    setTimeout(() => {
        body.style.transition = "all 0.2s ease";
        sidebar.classList.add('t_width');
    }, 50);

    // Load submenu state
    const subMenus = document.querySelectorAll('.sub_menu');
    subMenus.forEach((element, index) => {
        const submenuKey = `submenu-${index}`;
        if (localStorage.getItem(submenuKey) === "true") {
            element.classList.add('active');
        }
    });

    // Load Dark Mode state
    if (localStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Run responsive update on page load
    updateBodyClass();
});

// Dark Mode Functions
function enableDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const button = document.getElementById('darkModeToggle');

    body.classList.add("dark_mode");
    icon.textContent = '☀️';
    button.querySelector('span').textContent = 'Light Mode';
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const button = document.getElementById('darkModeToggle');

    body.classList.remove("dark_mode");
    icon.textContent = '🌙';
    button.querySelector('span').textContent = 'Dark Mode';
    localStorage.setItem("darkMode", "disabled");
}

function toggleDarkMode() {
    if (localStorage.getItem("darkMode") !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Responsive mobile and desktop layouts
function updateBodyClass() {
    if (window.innerWidth <= 678) {
        document.body.classList.add("mobile");
        document.body.classList.remove("desktop");
    } else {
        document.body.classList.add("desktop");
        document.body.classList.remove("mobile");
    }
}

// Run responsive update on window resize
window.addEventListener("resize", updateBodyClass);
