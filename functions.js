function goToHomePage() {
    window.location.href = "index.html";
}

function goToQualPage() {
    window.location.href = "qualifications.html";
}

function goToServPage() {
    window.location.href = "services.html";
}

function goToPortPage() {
    window.location.href = "portfolio.html";
}

function goToGPTPage() {
    window.location.href = "gpt.html";
}

function openPDF() {
    window.open("GonsalvesResume.pdf", "_blank");
}

function goToService1Page() {
    window.location.href = "service1.html";
}

function goToService2Page() {
    window.location.href = "service2.html";
}

// NEED TO GET REAL LINKS FOR THESE 6 PAGES EVENTUALLY
function goToProject1Page() {
    // TCP Server Threader
    window.open("https://github.com/mihir-gonsalves/TCPThreader", "_blank");
}

function goToProject2Page() {
    // Mock Linux Shell
    window.open("https://github.com/mihir-gonsalves/MockLinuxShell", "_blank");
}

function goToProject3Page() {
    // Sudoku Solver Z3
    window.open("https://github.com/mihir-gonsalves/SudokuSolverZ3", "_blank");
}

function goToProject4Page() {
    // Personal Website
    window.open("https://github.com/mihir-gonsalves/PersonalWebsite", "_blank");
}

function goToProject5Page() {
    // Image Seam Carver
    window.open("https://github.com/mihir-gonsalves/ImageSeamCarver", "_blank");
}

function goToProject6Page() {
    // Dungeon Crawler
    window.open("https://github.com/mihir-gonsalves/DungeonCrawler", "_blank");
}

function goToGithub() {
    window.open("https://github.com/mihir-gonsalves", "_blank"); // opens the link in a new tab
}

// The following code is copied from CSCE 331 Lab 2 (rewritten to fit my naming convetion), this should not count as plagiarism as this is a basic function.
function toggleStyle() {
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const fileName = element.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newFileName = "";
    if (fileName == "style1.css") newFileName = "style2.css";
    else newFileName = "style1.css";
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    element.setAttribute("href", newFileName);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newFileName);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const fileName = localStorage.getItem("stylesheet") || "style1.css";
    // 2 (b) get html style element by ID
    const element = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    element.setAttribute("href", fileName);
}
