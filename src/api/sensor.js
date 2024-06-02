export async function getSensors() {
    let response = await fetch('http://localhost:8080/climate-sensor');
    return response.json();
}

export async function addSensor(sensor) {
    await fetch('http://localhost:8080/climate-sensor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sensor)
    })
}