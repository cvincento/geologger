const stationCoords = {
    "堅尼地城": [22.2811, 114.1264], "香港大學": [22.2842, 114.1362], "西營盤": [22.2863, 114.1415],
    "上環": [22.2874, 114.1517], "中環": [22.2819, 114.1582], "金鐘": [22.2794, 114.1645],
    "灣仔": [22.2782, 114.1736], "銅鑼灣": [22.2804, 114.1852], "天后": [22.2825, 114.1914],
    "炮台山": [22.2878, 114.1936], "北角": [22.2913, 114.2005], "鰂魚涌": [22.2882, 114.2124],
    "太古": [22.2846, 114.2166], "西灣河": [22.2822, 114.2223], "筲箕灣": [22.2796, 114.2274],
    "杏花邨": [22.2754, 114.2405], "柴灣": [22.2646, 114.2366],
    "尖沙咀": [22.2976, 114.1722], "佐敦": [22.3049, 114.1717], "油麻地": [22.3130, 114.1706],
    "旺角": [22.3193, 114.1694], "太子": [22.3245, 114.1685], "深水埗": [22.3307, 114.1616],
    "長沙灣": [22.3355, 114.1566], "荔枝角": [22.3371, 114.1484], "美孚": [22.3366, 114.1385],
    "荔景": [22.3496, 114.1264], "葵芳": [22.3557, 114.1269], "葵興": [22.3634, 114.1309],
    "大窩口": [22.3708, 114.1232], "荃灣": [22.3734, 114.1176],
    "九龍塘": [22.3367, 114.1761], "樂富": [22.3378, 114.1873], "黃大仙": [22.3420, 114.1932],
    "鑽石山": [22.3400, 114.2016], "彩虹": [22.3340, 114.2093], "九龍灣": [22.3234, 114.2141],
    "牛頭角": [22.3153, 114.2191], "觀塘": [22.3120, 114.2255], "藍田": [22.3073, 114.2319],
    "油塘": [22.2974, 114.2422], "調景嶺": [22.3023, 114.2526], "將軍澳": [22.3074, 114.2600],
    "康城": [22.2954, 114.2686], "坑口": [22.3155, 114.2647], "寶琳": [22.3228, 114.2580],
    "紅磡": [22.3031, 114.1818], "大圍": [22.3725, 114.1783], "沙田": [22.3831, 114.1876],
    "火炭": [22.3962, 114.1963], "大學": [22.4131, 114.2097], "大埔墟": [22.4447, 114.1695],
    "太和": [22.4510, 114.1641], "粉嶺": [22.4918, 114.1388], "上水": [22.5013, 114.1278],
    "羅湖": [22.5279, 114.1132], "落馬洲": [22.5152, 114.0666],
    "柯士甸": [22.3043, 114.1664], "南昌": [22.3265, 114.1536], "荃灣西": [22.3683, 114.1105],
    "錦上路": [22.4361, 114.0656], "元朗": [22.4452, 114.0348], "朗屏": [22.4497, 114.0254],
    "天水圍": [22.4495, 114.0040], "兆康": [22.4116, 109.9806], "屯門": [22.3953, 109.9734],
    "香港": [22.2849, 114.1583], "九龍": [22.3045, 114.1614], "奧運": [22.3188, 114.1587],
    "青衣": [22.3585, 114.1068], "東涌": [22.2892, 113.9413], "欣澳": [22.3242, 114.0279]
};

const mtrLines = {
    "港島綫": { en: "Island Line", zh: "港島綫" },
    "荃灣綫": { en: "Tsuen Wan Line", zh: "荃灣綫" },
    "觀塘綫": { en: "Kwun Tong Line", zh: "觀塘綫" },
    "東鐵綫": { en: "East Rail Line", zh: "東鐵綫" },
    "屯馬綫": { en: "Tuen Ma Line", zh: "屯馬綫" },
    "東涌綫": { en: "Tung Chung Line", zh: "東涌綫" }
};

const mtrStations = {
    "港島綫": {
        "堅尼地城": { en: "Kennedy Town", zh: "堅尼地城" },
        "香港大學": { en: "HKU", zh: "香港大學" },
        "西營盤": { en: "Sai Ying Pun", zh: "西營盤" },
        "上環": { en: "Sheung Wan", zh: "上環" },
        "中環": { en: "Central", zh: "中環" },
        "金鐘": { en: "Admiralty", zh: "金鐘" },
        "灣仔": { en: "Wan Chai", zh: "灣仔" },
        "銅鑼灣": { en: "Causeway Bay", zh: "銅鑼灣" },
        "天后": { en: "Tin Hau", zh: "天后" },
        "炮台山": { en: "Fortress Hill", zh: "炮台山" },
        "北角": { en: "North Point", zh: "北角" },
        "鰂魚涌": { en: "Quarry Bay", zh: "鰂魚涌" },
        "太古": { en: "Tai Koo", zh: "太古" },
        "西灣河": { en: "Sai Wan Ho", zh: "西灣河" },
        "筲箕灣": { en: "Shau Kei Wan", zh: "筲箕灣" },
        "杏花邨": { en: "Heng Fa Chuen", zh: "杏花邨" },
        "柴灣": { en: "Chai Wan", zh: "柴灣" }
    },
    "荃灣綫": {
        "中環": { en: "Central", zh: "中環" },
        "金鐘": { en: "Admiralty", zh: "金鐘" },
        "尖沙咀": { en: "Tsim Sha Tsui", zh: "尖沙咀" },
        "佐敦": { en: "Jordan", zh: "佐敦" },
        "油麻地": { en: "Yau Ma Tei", zh: "油麻地" },
        "旺角": { en: "Mong Kok", zh: "旺角" },
        "太子": { en: "Prince Edward", zh: "太子" },
        "深水埗": { en: "Sham Shui Po", zh: "深水埗" },
        "長沙灣": { en: "Cheung Sha Wan", zh: "長沙灣" },
        "荔枝角": { en: "Lai Chi Kok", zh: "荔枝角" },
        "美孚": { en: "Mei Foo", zh: "美孚" },
        "荔景": { en: "Lai King", zh: "荔景" },
        "葵芳": { en: "Kwai Fong", zh: "葵芳" },
        "葵興": { en: "Kwai Hing", zh: "葵興" },
        "大窩口": { en: "Tai Wo Hau", zh: "大窩口" },
        "荃灣": { en: "Tsuen Wan", zh: "荃灣" }
    },
    "觀塘綫": {
        "黃埔": { en: "Whampoa", zh: "黃埔" },
        "何文田": { en: "Ho Man Tin", zh: "何文田" },
        "油麻地": { en: "Yau Ma Tei", zh: "油麻地" },
        "旺角": { en: "Mong Kok", zh: "旺角" },
        "太子": { en: "Prince Edward", zh: "太子" },
        "石硤尾": { en: "Shek Kip Mei", zh: "石硤尾" },
        "九龍塘": { en: "Kowloon Tong", zh: "九龍塘" },
        "樂富": { en: "Lok Fu", zh: "樂富" },
        "黃大仙": { en: "Wong Tai Sin", zh: "黃大仙" },
        "鑽石山": { en: "Diamond Hill", zh: "鑽石山" },
        "彩虹": { en: "Choi Hung", zh: "彩虹" },
        "九龍灣": { en: "Kowloon Bay", zh: "九龍灣" },
        "牛頭角": { en: "Ngau Tau Kok", zh: "牛頭角" },
        "觀塘": { en: "Kwun Tong", zh: "觀塘" },
        "藍田": { en: "Lam Tin", zh: "藍田" },
        "油塘": { en: "Yau Tong", zh: "油塘" },
        "調景嶺": { en: "Tiu Keng Leng", zh: "調景嶺" }
    },
    "東鐵綫": {
        "金鐘": { en: "Admiralty", zh: "金鐘" },
        "會展": { en: "Exhibition Centre", zh: "會展" },
        "紅磡": { en: "Hung Hom", zh: "紅磡" },
        "旺角東": { en: "Mong Kok East", zh: "旺角東" },
        "九龍塘": { en: "Kowloon Tong", zh: "九龍塘" },
        "大圍": { en: "Tai Wai", zh: "大圍" },
        "沙田": { en: "Sha Tin", zh: "沙田" },
        "火炭": { en: "Fo Tan", zh: "火炭" },
        "馬場": { en: "Racecourse", zh: "馬場" },
        "大學": { en: "University", zh: "大學" },
        "大埔墟": { en: "Tai Po Market", zh: "大埔墟" },
        "太和": { en: "Tai Wo", zh: "太和" },
        "粉嶺": { en: "Fanling", zh: "粉嶺" },
        "上水": { en: "Sheung Shui", zh: "上水" },
        "羅湖": { en: "Lo Wu", zh: "羅湖" },
        "落馬洲": { en: "Lok Ma Chau", zh: "落馬洲" }
    },
    "屯馬綫": {
        "屯門": { en: "Tuen Mun", zh: "屯門" },
        "兆康": { en: "Siu Hong", zh: "兆康" },
        "天水圍": { en: "Tin Shui Wai", zh: "天水圍" },
        "朗屏": { en: "Long Ping", zh: "朗屏" },
        "元朗": { en: "Yuen Long", zh: "元朗" },
        "錦上路": { en: "Kam Sheung Road", zh: "錦上路" },
        "荃灣西": { en: "Tsuen Wan West", zh: "荃灣西" },
        "美孚": { en: "Mei Foo", zh: "美孚" },
        "南昌": { en: "Nam Cheong", zh: "南昌" },
        "柯士甸": { en: "Austin", zh: "柯士甸" },
        "尖東": { en: "East Tsim Sha Tsui", zh: "尖東" },
        "紅磡": { en: "Hung Hom", zh: "紅磡" },
        "何文田": { en: "Ho Man Tin", zh: "何文田" },
        "土瓜灣": { en: "To Kwa Wan", zh: "土瓜灣" },
        "宋皇臺": { en: "Sung Wong Toi", zh: "宋皇臺" },
        "啟德": { en: "Kai Tak", zh: "啟德" },
        "鑽石山": { en: "Diamond Hill", zh: "鑽石山" },
        "顯徑": { en: "Hin Keng", zh: "顯徑" },
        "大圍": { en: "Tai Wai", zh: "大圍" },
        "車公廟": { en: "Che Kung Temple", zh: "車公廟" },
        "沙田圍": { en: "Sha Tin Wai", zh: "沙田圍" },
        "第一城": { en: "City One", zh: "第一城" },
        "石門": { en: "Shek Mun", zh: "石門" },
        "大水坑": { en: "Tai Shui Hang", zh: "大水坑" },
        "恆安": { en: "Heng On", zh: "恆安" },
        "馬鞍山": { en: "Ma On Shan", zh: "馬鞍山" },
        "烏溪沙": { en: "Wu Kai Sha", zh: "烏溪沙" }
    },
    "東涌綫": {
        "香港": { en: "Hong Kong", zh: "香港" },
        "九龍": { en: "Kowloon", zh: "九龍" },
        "奧運": { en: "Olympic", zh: "奧運" },
        "南昌": { en: "Nam Cheong", zh: "南昌" },
        "荔景": { en: "Lai King", zh: "荔景" },
        "青衣": { en: "Tsing Yi", zh: "青衣" },
        "欣澳": { en: "Sunny Bay", zh: "欣澳" },
        "東涌": { en: "Tung Chung", zh: "東涌" }
    }
};

const stationSelect = document.getElementById('station-select');
const doorOpenBtn = document.getElementById('door-open');
const doorCloseBtn = document.getElementById('door-close');
const concourseWalkBtn = document.getElementById('concourse-walk');
const historyList = document.getElementById('history-list');
const gpsStatus = document.getElementById('gps-status');
const langSelect = document.getElementById('lang-select');

let history = JSON.parse(localStorage.getItem('mtr_history')) || [];
let currentLang = 'en';

window.onload = function() {
    initStationSelect();
    renderHistory();
    detectLocation();
    setLanguage(currentLang);
};

langSelect.addEventListener('change', (event) => {
    currentLang = event.target.value;
    setLanguage(currentLang);
});

function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
    initStationSelect();
}

function initStationSelect() {
    const selectedValue = stationSelect.value;
    stationSelect.innerHTML = '';
    for (const [line, stations] of Object.entries(mtrStations)) {
        const group = document.createElement('optgroup');
        group.label = mtrLines[line][currentLang];
        for (const [station, names] of Object.entries(stations)) {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = names[currentLang];
            group.appendChild(option);
        }
        stationSelect.appendChild(group);
    }
    stationSelect.value = selectedValue;
}

// --- GPS ---
function detectLocation() {
    if (!navigator.geolocation) {
        gpsStatus.textContent = "GPS Not Supported";
        gpsStatus.classList.add('bg-red-600');
        return;
    }
    gpsStatus.textContent = "Locating...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            const nearest = findNearestStation(userLat, userLng);
            
            if (nearest) {
                stationSelect.value = nearest.name;
                gpsStatus.textContent = "GPS Locked";
                gpsStatus.classList.replace('bg-blue-800', 'bg-green-600');
            } else {
                gpsStatus.textContent = "No Station Nearby";
                gpsStatus.classList.add('bg-orange-500');
            }
        },
        (error) => {
            console.error(error);
            gpsStatus.textContent = "GPS Error";
            gpsStatus.classList.add('bg-red-600');
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
}

function findNearestStation(lat, lng) {
    let minDistance = Infinity;
    let nearestStation = null;
    for (const [name, coords] of Object.entries(stationCoords)) {
        const dist = getDistanceFromLatLonInKm(lat, lng, coords[0], coords[1]);
        if (dist < minDistance) {
            minDistance = dist;
            nearestStation = name;
        }
    }
    if (minDistance > 50) return null;
    return { name: nearestStation, distance: minDistance };
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; 
    var dLat = deg2rad(lat2-lat1);  
    var dLon = deg2rad(lon2-lon1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return d;
}

function deg2rad(deg) { return deg * (Math.PI/180) }

// --- Event Logging ---
function logEvent(event) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('en-US');
    const selectedStation = stationSelect.value;

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude.toFixed(6);
        const lon = position.coords.longitude.toFixed(6);

        const logEntry = {
            date: dateString,
            time: timeString,
            station: mtrStations[stationSelect.options[stationSelect.selectedIndex].parentNode.label.split(' ')[0]][selectedStation],
            event: event,
            location: `${lat}, ${lon}`
        };

        history.unshift(logEntry);
        localStorage.setItem('mtr_history', JSON.stringify(history));
        renderHistory();
    }, () => {
        const logEntry = {
            date: dateString,
            time: timeString,
            station: selectedStation,
            event: event,
            location: 'Not available'
        };

        history.unshift(logEntry);
        localStorage.setItem('mtr_history', JSON.stringify(history));
        renderHistory();
    });
}

doorOpenBtn.addEventListener('click', () => logEvent('Door Open'));
doorCloseBtn.addEventListener('click', () => logEvent('Door Close'));
concourseWalkBtn.addEventListener('click', () => logEvent('Concourse Walk'));

function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-center text-gray-400 text-sm py-4">No records</p>';
        return;
    }
    historyList.innerHTML = history.map(log => `
        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 flex justify-between items-center mr-1">
            <div class="flex-1">
                <div class="text-xs text-gray-400 mb-1">${log.date} ${log.time}</div>
                <div class="font-bold text-gray-800 text-lg">
                    ${log.station[currentLang]} - ${log.event}
                </div>
                <div class="text-sm text-gray-600">
                    Location: ${log.location}
                </div>
            </div>
        </div>
    `).join('');
}

function clearHistory() {
    if(confirm("Are you sure you want to clear all history?")) {
        history = [];
        localStorage.removeItem('mtr_history');
        renderHistory();
    }
}

// --- CSV Export ---
function downloadCSV() {
    if (history.length === 0) {
        alert("No history to export!");
        return;
    }

    let csvContent = "\uFEFF";
    csvContent += "Date,Time,Station,Event,Location\n";

    history.forEach(log => {
        let row = [
            log.date,
            log.time,
            log.station[currentLang],
            log.event,
            `"${log.location}"`
        ].join(",");
        csvContent += row + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    const today = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", `mtr_log_${today}.csv`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
