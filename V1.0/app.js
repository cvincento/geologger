
const mtrStations = {
    "Tsuen Wan Line": ["Tsuen Wan", "Tai Wo Hau", "Kwai Hing", "Kwai Fong", "Lai King", "Mei Foo", "Lai Chi Kok", "Cheung Sha Wan", "Sham Shui Po", "Prince Edward", "Mong Kok", "Yau Ma Tei", "Jordan", "Tsim Sha Tsui", "Admiralty", "Central"],
    "Kwun Tong Line": ["Whampoa", "Ho Man Tin", "Yau Ma Tei", "Mong Kok", "Prince Edward", "Shek Kip Mei", "Kowloon Tong", "Lok Fu", "Wong Tai Sin", "Diamond Hill", "Choi Hung", "Kowloon Bay", "Ngau Tau Kok", "Kwun Tong", "Lam Tin", "Yau Tong", "Tiu Keng Leng"],
    "Island Line": ["Kennedy Town", "HKU", "Sai Ying Pun", "Sheung Wan", "Central", "Admiralty", "Wan Chai", "Causeway Bay", "Tin Hau", "Fortress Hill", "North Point", "Quarry Bay", "Tai Koo", "Sai Wan Ho", "Shau Kei Wan", "Heng Fa Chuen", "Chai Wan"],
    "South Island Line": ["Admiralty", "Ocean Park", "Wong Chuk Hang", "Lei Tung", "South Horizons"],
    "Tseung Kwan O Line": ["North Point", "Quarry Bay", "Yau Tong", "Tiu Keng Leng", "Tseung Kwan O", "Hang Hau", "Po Lam", "LOHAS Park"],
    "Tung Chung Line": ["Hong Kong", "Kowloon", "Olympic", "Nam Cheong", "Lai King", "Tsing Yi", "Sunny Bay", "Tung Chung"],
    "Disneyland Resort Line": ["Sunny Bay", "Disneyland Resort"],
    "East Rail Line": ["Admiralty", "Exhibition Centre", "Hung Hom", "Mong Kok East", "Kowloon Tong", "Tai Wai", "Sha Tin", "Fo Tan", "Racecourse", "University", "Science Park", "Tai Po Market", "Tai Wo", "Fanling", "Sheung Shui", "Lo Wu", "Lok Ma Chau"],
    "Tuen Ma Line": ["Wu Kai Sha", "Ma On Shan", "Heng On", "Tai Shui Hang", "Shek Mun", "City One", "Sha Tin Wai", "Che Kung Temple", "Tai Wai", "Hin Keng", "Diamond Hill", "Kai Tak", "Sung Wong Toi", "To Kwa Wan", "Ho Man Tin", "Hung Hom", "East Tsim Sha Tsui", "Austin", "Nam Cheong", "Mei Foo", "Tsuen Wan West", "Kam Sheung Road", "Yuen Long", "Long Ping", "Tin Shui Wai", "Siu Hong", "Tuen Mun"],
    "Airport Express": ["Hong Kong", "Kowloon", "Tsing Yi", "Airport", "AsiaWorld-Expo"]
};

document.addEventListener('DOMContentLoaded', () => {
    const lineSelect = document.getElementById('line-select');
    const stationSelect = document.getElementById('station-select');
    const doorOpenBtn = document.getElementById('door-open');
    const doorCloseBtn = document.getElementById('door-close');
    const concourseWalkBtn = document.getElementById('concourse-walk');
    const latSpan = document.getElementById('lat');
    const lonSpan = document.getElementById('lon');
    const logData = document.getElementById('log-data');

    // Populate line select
    for (const line in mtrStations) {
        const option = document.createElement('option');
        option.value = line;
        option.textContent = line;
        lineSelect.appendChild(option);
    }

    // Populate station select based on line
    function updateStationSelect() {
        const selectedLine = lineSelect.value;
        stationSelect.innerHTML = '';
        mtrStations[selectedLine].forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            stationSelect.appendChild(option);
        });
    }

    lineSelect.addEventListener('change', updateStationSelect);

    // Get current location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                latSpan.textContent = position.coords.latitude.toFixed(6);
                lonSpan.textContent = position.coords.longitude.toFixed(6);
            }, () => {
                alert('Unable to retrieve your location');
            });
        } else {
            alert('Geolocation is not supported by your browser');
        }
    }

    // Log event
    function logEvent(event) {
        const timestamp = new Date().toISOString();
        const line = lineSelect.value;
        const station = stationSelect.value;
        const lat = latSpan.textContent;
        const lon = lonSpan.textContent;

        const logEntry = `Time: ${timestamp}\nLine: ${line}\nStation: ${station}\nEvent: ${event}\nLocation: ${lat}, ${lon}\n\n`;

        logData.textContent += logEntry;

        // For now, we just log to the screen. Saving to a file will be implemented next.
        console.log(logEntry);

        // Add a save button if it doesn't exist
        if (!document.getElementById('save-log')) {
            const saveButton = document.createElement('button');
            saveButton.id = 'save-log';
            saveButton.textContent = 'Save Log';
            document.querySelector('.container').appendChild(saveButton);

            saveButton.addEventListener('click', () => {
                const blob = new Blob([logData.textContent], { type: 'text/plain' });
                const anchor = document.createElement('a');
                anchor.download = 'geologger.txt';
                anchor.href = window.URL.createObjectURL(blob);
                anchor.click();
                window.URL.revokeObjectURL(anchor.href);
            });
        }

    }

    doorOpenBtn.addEventListener('click', () => {
        getLocation();
        logEvent('Subway Door Open');
    });

    doorCloseBtn.addEventListener('click', () => {
        getLocation();
        logEvent('Subway Door Close');
    });

    concourseWalkBtn.addEventListener('click', () => {
        getLocation();
        logEvent('Station Concourse Walk');
    });

    // Initial population
    updateStationSelect();
    getLocation();
});
