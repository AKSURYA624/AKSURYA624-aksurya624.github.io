/**
 * Switches the active viewport tab panel structure smoothly
 * @param {Event} evt - The triggering element tab interaction event source
 * @param {String} pageName - The ID attribute reference matching target page section container
 */
function openPage(evt, pageName) {
    // Hide all existing tab modules
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Reset current active states across selector menu items
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Showcase selected node point container map configuration dynamically
    document.getElementById(pageName).classList.add("active");
    evt.currentTarget.classList.add("active");
}