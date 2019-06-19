document.addEventListener("DOMContentLoaded", function() {

    const requestButton = document.getElementById('run_request');

    requestButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/')
        .then((response) => {
            console.log('requestButton response: ', response);
        });
    });

    const pingPongButton = document.getElementById('pingpong_request');
    const section3456 = document.getElementById('step3456');

    pingPongButton.addEventListener('click', () => {
        // axios.get('http://intro-ajax-api.herokuapp.com/ping')
        axios.get('http://intro-ajax-api.herokuapp.com/pong')
        .then((response) => {
            console.log("We did it!");
            console.log('pingPongButton response: ', response.data);
            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;
            section3456.appendChild(dataElem);
        })
        .catch((error) => {
            console.log("Oops we had an error!");
            console.log('pingPongButton error: ', error.response.data);
            const dataElem = document.createElement('p');
            dataElem.innerHTML = "Sorry, I'll try harder next time!";
            section3456.appendChild(dataElem);
        })
        .then((response) => {
            console.log("Hey the request finished!");
        })
    });

    const countButton = document.getElementById('count_request');
    const section7 = document.getElementById('step7');

    countButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/count')
        .then((response) => {
            console.log('We got the count!');
            console.log('countButton response: ', response.data);
            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;
            section7.appendChild(dataElem);
        })
    });

    const timeButton = document.getElementById('time_request');
    const section8 = document.getElementById('step8');

    timeButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/time', {
            // params: {timezone: 'Europe/Sofia'},
            // params: {timezone: 'America/Mexico_City'},
            // params: {timezone: 'Pacific/Honolulu'},
            params: {timezone: 'Asia/Kolkata'},
        })
        .then((response) => {
            console.log('We got the time!');
            console.log('timeButton response: ', response.data);
            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;
            section8.appendChild(dataElem);

        })
    });

    const carButton = document.getElementById('car_request');
    const section9 = document.getElementById('step9');
    
    const carList = document.createElement('ul');
    carList.id = 'carlist';
    section9.appendChild(carList);

    carButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/a_car')
        .then((response) => {
            console.log('We got the car!');
            console.log('carButton response: ', response.data);
            var carInfo = document.createElement('li');
            carInfo.innerHTML = response.data;
            carList.appendChild(carInfo);
        })
    });
    
});