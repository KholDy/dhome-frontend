export async function getLights() {
    let response = await fetch('http://localhost:8080/light');
    return response.json();
}

export async function getLightById(id) {
    let response = await fetch('http://localhost:8080/light/' + id);
    return response.json();
}

export async function addLight(light) {
    await fetch('http://localhost:8080/light', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(light)
    })
}