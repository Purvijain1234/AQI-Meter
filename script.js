// Get today's date
let today = new Date();
let day = today.getDate(); 
let month = today.toLocaleString('en-US', { month: 'long' });
let year = today.getFullYear(); 

document.getElementById("date").textContent = `${day} ${month} ${year}`;

const apiKey = "5d915e6c1d73247435b87071456ae5014a9679eb"; // Replace with your actual API key

// Function to set AQI value and move the needle smoothly
function setAQIAndMoveNeedle(aqi) {
    // Calculate the needle position based on the AQI value (0 to 500)
    let position = (aqi / 500) * 100; // Scale the position to the width of the tube

    // Move the needle by changing the left position
    document.getElementById("needle").style.left = `${position}%`;

    // Update the AQI value
    document.getElementById("user-aqi").innerText = `${aqi}`;
}

async function fetchAQI(city, elementId) {
    try {
        let response = await fetch(`https://api.waqi.info/feed/${city}/?token=${apiKey}`);
        let data = await response.json();
        if (data.status === "ok") {
            setAQIAndMoveNeedle(data.data.aqi);
            document.getElementById(elementId).innerText = data.data.aqi;
        } else {
            document.getElementById(elementId).innerText = "Data not available";
        }
    } catch (error) {
        document.getElementById(elementId).innerText = "Error fetching data";
    }
}

// Automatically fetch AQI for New Delhi on page load
fetchAQI("New Delhi", "delhi-aqi");

// Fetch AQI for the user's location based on their IP address (without asking for geolocation)
async function fetchUserAQI() {
    try {
        let response = await fetch(`https://api.waqi.info/feed/here/?token=${apiKey}`);
        let data = await response.json();
        if (data.status === "ok") {
            document.getElementById("user-aqi").innerText = data.data.aqi;
        } else {
            document.getElementById("user-aqi").innerText = "Data not available";
        }
    } catch (error) {
        document.getElementById("user-aqi").innerText = "Error fetching data";
    }
}

// Automatically fetch AQI for the user's location without geolocation permission
fetchUserAQI();

function getLocationAQI() {
    const location = document.getElementById("location").value;
    if (location) {
        fetchAQI(location, "location-aqi");
    } else {
        alert("Please enter a location.");
    }
}


