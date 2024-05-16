<script>
    export default {
        name: 'ClimateSensor',

        data() {
            return {
                sensor: null
            }
        },

        props: {
            sensorId: ''
        },

        methods: {
            getData() {
                fetch('http://localhost:8080/climate-sensor/' + this.sensorId)
                    .then(response => response.json())
                        .then(data => this.sensor = data)
            }
        },

        computed: {
            isSensorAvailable() {
                return this.sensor;
            }
        },

        created() {
            this.getData(),

            setInterval(() => {
                this.getData();
            }, 600000)
        }
    }
</script>

<template>
    <div v-if="isSensorAvailable" class="card" style="width: 16rem;">
        <div class="m-2">
            <img src="@/assets/thermometer-half.svg" @click="switchLight" class="card-img-top" alt="...">
        </div>
        
        <div class="card-header">
            sensor
        </div>
        <div class="card-body">
            <p class="card-text">{{ sensor.temperature.substring(0, 4) }} C</p>
            <p class="card-text">{{ sensor.pressure.substring(0, 5) }} mmhg</p>
            <p class="card-text">{{ sensor.humidity.substring(0, 4) }} %</p>
            <button class="btn btn-primary">change sensor</button>
        </div>
        <div class="card-footer text-muted">
            {{ sensor.dateTime }}
        </div>
    </div>
</template>