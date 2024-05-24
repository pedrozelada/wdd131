const temperature = 4; 
const conditions = 'Partly Cloudy';
const windSpeed = 6; 

document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('temperature').textContent = `${temperature} °C`;
    document.getElementById('conditions').textContent = conditions;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;

    function calculateWindChill(temp, wind) {
        return (temp <= 10 && wind > 4.8) ? 
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + ' °C' 
            : 'N/A';
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});