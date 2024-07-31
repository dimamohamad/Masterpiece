const sitters = [
    {
        name: "Sidney T.",
        experience: 5,
        location: "Acworth, GA",
        distance: 20,
        description: "Hi there, My name is Sidney, 24 years old...",
        img: "https://img.freepik.com/free-photo/portrait-woman-with-curly-hair_23-2148728586.jpg?size=626&ext=jpg&ga=GA1.1.31750505.1715973735&semt=ais_user",
        hourlyRate: 15
    },
    {
        name: "Alise D.",
        experience: 5,
        location: "Lawrenceville, GA",
        distance: 20,
        description: "I've been babysitting since I was 14...",
        img: "https://img.freepik.com/free-photo/girl-with-long-hair-looking-camera_23-2148244848.jpg?size=626&ext=jpg&ga=GA1.1.31750505.1715973735&semt=ais_user",
        hourlyRate: 10
    },
    {
        name: "Lisa A.",
        experience: 10,
        location: "Doraville, GA",
        distance: 5,
        description: "I'm a 50-year-old mom of four...",
        img: "https://img.freepik.com/free-psd/close-up-kid-expression-portrait_23-2150193262.jpg?size=626&ext=jpg&ga=GA1.2.31750505.1715973735&semt=ais_user",
        hourlyRate: 20
    },
    {
        name: "Florimar N.",
        experience: 9,
        location: "Norcross, GA",
        distance: 7,
        description: "Well, I'm Florimar but people call me Flo...",
        img: "https://img.freepik.com/free-photo/portrait-cute-smiley-woman_23-2148728645.jpg?size=626&ext=jpg&ga=GA1.2.31750505.1715973735&semt=ais_user",
        hourlyRate: 25
    }
];

// Function to display sitters
function displaySitters(filteredSitters) {
    const container = document.getElementById('sittersContainer');
    container.innerHTML = '';

    filteredSitters.forEach(sitter => {
        const card = `
        <div class="sitter-card card mb-3">
            <div class="row g-0">
                <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <img src="${sitter.img}" class="img-fluid rounded-circle" alt="${sitter.name}">
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title">${sitter.name}</h5>
                        <p class="card-text">${sitter.experience} years paid experience<br>${sitter.location} - ${sitter.distance} miles</p>
                        <p class="card-text">${sitter.description}</p>
                        <button class="btn btn-outline-secondary float-end" onclick="bookSitter('${sitter.name}')">Book</button>
                    </div>
                </div>
            </div>
        </div>`;
        container.innerHTML += card;
    });
}

// Filter function
function filterSitters() {
    const find = document.getElementById('find').value.toLowerCase();
    const near = document.getElementById('near').value.toLowerCase();
    const radius = document.getElementById('radius').value;
    const hourlyRate = document.getElementById('hourlyRate').value;
    const backgroundChecks = document.getElementById('backgroundChecks').value;
    const lastLogin = document.getElementById('lastLogin').value;
    const yearsExperience = document.getElementById('yearsExperience').value;
    const language = document.getElementById('language').value;
    const mustHaveCar = document.getElementById('mustHaveCar').checked;

    const filteredSitters = sitters.filter(sitter => {
        let isValid = true;

        if (find && !sitter.name.toLowerCase().includes(find)) {
            isValid = false;
        }
        if (near && !sitter.location.toLowerCase().includes(near)) {
            isValid = false;
        }
        if (hourlyRate !== "Any" && sitter.hourlyRate < parseInt(hourlyRate.split(" ")[0].replace('$', ''))) {
            isValid = false;
        }
        // Add more conditions as needed

        return isValid;
    });

    displaySitters(filteredSitters);
}

// Function to handle booking
function bookSitter(sitterName) {
    // Redirect to another page with the sitter's name as a query parameter
    window.location.href = `../html/checkout.html?sitter=${encodeURIComponent(sitterName)}`;
}

// Event listener for the filter button
document.getElementById('filterButton').addEventListener('click', filterSitters);

// Initial display of sitters
displaySitters(sitters);

// Extract the service type from the URL parameters
function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Set the breadcrumb and count based on the service type
document.addEventListener("DOMContentLoaded", function () {
    const serviceType = getParameterByName('service');
    const serviceText = serviceType ? serviceType + ' Caregivers' : 'Special Needs Caregivers';
    document.getElementById('serviceType').textContent = serviceText;

    // Optionally, adjust the number of caregivers shown based on the service type
    const caregiversCount = serviceType === 'special' ? 3219 : 1500; // Example
    document.getElementById('caregiversCount').textContent = `Showing ${caregiversCount} caregivers`;
});
