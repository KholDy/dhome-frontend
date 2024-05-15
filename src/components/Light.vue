<script>
    export default {
        name: 'Light',

        data() {
            return {
                light: null
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
                console.log(this.light)
            }
        },

        computed: {
            isLightAvailable() {
                return this.light;
            }
        },

        created() {
            this.getLight()
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
            turn on 2 minutes ago
        </div>
    </div>
</template>