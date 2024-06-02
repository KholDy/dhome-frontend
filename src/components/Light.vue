<script>
    import { getLightById } from '@/api/light';

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
            async switchLight() {
                fetch('http://localhost:8080/light/switch/' + this.lightId);
                this.light = await getLightById(this.lightId);
            }
        },

        computed: {
            isLightAvailable() {
                return this.light;
            },
        },

        async created() {
            this.light = await getLightById(this.lightId)

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
            {{ light.deviceName }}
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