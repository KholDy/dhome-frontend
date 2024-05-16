<script>
    export default {
        name: 'Light',

        data() {
            return {
                light: null,
                datetime: null
            }
        },

        props: {
            lightId:''
        },

        methods: {
            async getLight() {
                await fetch('http://localhost:8080/light/' + this.lightId)
                        .then(response => response.json())
                            .then(data => this.light = data)
                
            },

            async switchLight() {
                await fetch('http://localhost:8080/light/switch/' + this.lightId);
                this.getLight();
            },
        },

        computed: {
            isLightAvailable() {
                return this.light;
            },
        },

        created() {
            this.getLight()

//            setInterval(() => {
//                this.datetime = Math.abs(new Date() - Date.parse(this.light.date_time)) / 1000;
//            }, 10000)
        }
    }

</script>

<template>
    <div v-if="isLightAvailable" class="card" style="width: 16rem;">
        <div v-if="light.state == 'on'">
            <img src="@/assets/lightbulb-fill.svg" @click="switchLight" class="card-img-top" alt="...">
        </div>
        <div v-else>
            <img src="@/assets/lightbulb-off-fill.svg" @click="switchLight" class="card-img-top" alt="...">
        </div>
        
        <div class="card-header">
            {{ light.typeOfLight }}
        </div>
        <div class="card-body w-100 p-3">
            <p class="card-text">{{ light.description }}</p>
        </div>
        <div class="d-grid gap-2 col-8 mx-auto p-2">
            <button type="button" class="btn btn-primary" @click="switchLight">turn on/off</button>
            <button type="button" class="btn btn-primary">change light</button>
        </div>
        <div class="card-footer text-muted">
            {{ light.date_time }}
        </div>
    </div>
</template>