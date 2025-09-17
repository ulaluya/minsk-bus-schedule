import { busData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const routeInput = document.getElementById('route-input');
    const searchButton = document.getElementById('search-button');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', () => {
        const routeNumber = routeInput.value.trim();

        if (routeNumber === '') {
            resultsDiv.innerHTML = '<p>Пожалуйста, введите номер маршрута.</p>';
            return;
        }

        const routeData = busData[routeNumber];

        if (routeData) {
            let scheduleHTML = `<div class="route-info"><h3>${routeData.name}</h3><p>${routeData.route}</p></div>`;
            
            routeData.schedule.forEach(item => {
                scheduleHTML += `<p><b>${item.time}</b>: ${item.stop}</p>`;
            });

            resultsDiv.innerHTML = scheduleHTML;
        } else {
            resultsDiv.innerHTML = `<p>Маршрут ${routeNumber} не найден.</p>`;
        }
    });
});
