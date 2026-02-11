// --- 1. 車站座標資料庫 ---
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
    "常用": ["旺角", "中環", "金鐘", "銅鑼灣", "尖沙咀", "九龍塘"],
    "港島綫": ["堅尼地城", "香港大學", "西營盤", "上環", "中環", "金鐘", "灣仔", "銅鑼灣", "天后", "炮台山", "北角", "鰂魚涌", "太古", "西灣河", "筲箕灣", "杏花邨", "柴灣"],
    "荃灣綫": ["中環", "金鐘", "尖沙咀", "佐敦", "油麻地", "旺角", "太子", "深水埗", "長沙灣", "荔枝角", "美孚", "荔景", "葵芳", "葵興", "大窩口", "荃灣"],
    "觀塘綫": ["黃埔", "何文田", "油麻地", "旺角", "太子", "石硤尾", "九龍塘", "樂富", "黃大仙", "鑽石山", "彩虹", "九龍灣", "牛頭角", "觀塘", "藍田", "油塘", "調景嶺"],
    "東鐵綫": ["金鐘", "會展", "紅磡", "旺角東", "九龍塘", "大圍", "沙田", "火炭", "馬場", "大學", "大埔墟", "太和", "粉嶺", "上水", "羅湖", "落馬洲"],
    "屯馬綫": ["屯門", "兆康", "天水圍", "朗屏", "元朗", "錦上路", "荃灣西", "美孚", "南昌", "柯士甸", "尖東", "紅磡", "何文田", "土瓜灣", "宋皇臺", "啟德", "鑽石山", "顯徑", "大圍", "車公廟", "沙田圍", "第一城", "石門", "大水坑", "恆安", "馬鞍山", "烏溪沙"],
    "東涌綫": ["香港", "九龍", "奧運", "南昌", "荔景", "青衣", "欣澳", "東涌"]
};

const stationSelect = document.getElementById('station-select');
const doorOpenBtn = document.getElementById('door-open');
const doorCloseBtn = document.getElementById('door-close');
const concourseWalkBtn = document.getElementById('concourse-walk');
const historyList = document.getElementById('history-list');
const gpsStatus = document.getElementById('gps-status');

let history = JSON.parse(localStorage.getItem('mtr_history')) || [];

window.onload = function() {
    initStationSelect();
    renderHistory();
    detectLocation();
};

function initStationSelect() {
    stationSelect.innerHTML = '';
    for (const [line, stations] of Object.entries(mtrLines)) {
        const group = document.createElement('optgroup');
        group.label = line;
        stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            group.appendChild(option);
        });
        stationSelect.appendChild(group);
    }
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
    const timeString = now.toLocaleTimeString('zh-HK', { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString('zh-HK');
    const selectedStation = stationSelect.value;

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude.toFixed(6);
        const lon = position.coords.longitude.toFixed(6);

        const logEntry = {
            date: dateString,
            time: timeString,
            station: selectedStation,
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

doorOpenBtn.addEventListener('click', () => logEvent('Subway Door Open'));
doorCloseBtn.addEventListener('click', () => logEvent('Subway Door Close'));
concourseWalkBtn.addEventListener('click', () => logEvent('Station Concourse Walk'));

function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="text-center text-gray-400 text-sm py-4">暫無紀錄</p>';
        return;
    }
    historyList.innerHTML = history.map(log => `
        <div class="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500 flex justify-between items-center mr-1">
            <div class="flex-1">
                <div class="text-xs text-gray-400 mb-1">${log.date} ${log.time}</div>
                <div class="font-bold text-gray-800 text-lg">
                    ${log.station} - ${log.event}
                </div>
                <div class="text-sm text-gray-600">
                    Location: ${log.location}
                </div>
            </div>
        </div>
    `).join('');
}

function clearHistory() {
    if(confirm("確定要刪除所有歷史紀錄嗎？")) {
        history = [];
        localStorage.removeItem('mtr_history');
        renderHistory();
    }
}

// --- CSV 匯出功能 ---
function downloadCSV() {
    if (history.length === 0) {
        alert("暫時沒有歷史紀錄可以匯出！");
        return;
    }

    let csvContent = "\uFEFF";
    csvContent += "Date,Time,Station,Event,Location\n";

    history.forEach(log => {
        let row = [
            log.date,
            log.time,
            log.station,
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
