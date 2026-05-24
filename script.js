const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m";

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const times = data.hourly.time;
        const temperatures = data.hourly.temperature_2m;

        const tableBody = document.getElementById("weatherData");
        tableBody.innerHTML = "";

        for (let i = 0; i < times.length; i++) {
            const row = `
                <tr>
                    <td>${times[i]}</td>
                    <td>${temperatures[i]} °C</td>
                </tr>
            `;

            tableBody.innerHTML += row;
        }

    } catch (error) {
        console.error("Gagal mengambil data:", error);

        document.getElementById("weatherData").innerHTML = `
            <tr>
                <td colspan="2">Gagal memuat data cuaca.</td>
            </tr>
        `;
    }
}

getWeatherData();