<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, minLength, ipAddress } from '@vuelidate/validators'
    import { Modal } from 'bootstrap'
    import Light from '@/components/Light.vue'
    import ClimateSensor from '@/components/ClimateSensor.vue'

    export default {
        components: { Light, ClimateSensor },

        props: ['title'],

        setup () {
            return { v$: useVuelidate() }
        },

        data() {
            return {
                modal: null,
                lights: [],
                sensors: [],

                light: {
                    typeOfLight: '',
                    description: '',
                    ip: '',
                    room: 'livingroom'
                },

                rooms: [
                    {
                        label: 'living room',
                        value: 'livingroom'
                    },
                    {
                        label: 'bedroom',
                        value: 'bedroom'
                    },
                    {
                        label: 'kitchen',
                        value: 'kitchen'
                    },
                    {
                        label: 'hallway',
                        value: 'hallway'
                    }
                ]
            }
        },

        mounted() {
            this.modal = new Modal(document.getElementById('lightModal'))
        },

        methods: {
            submitHandler() {
                this.v$.light.$touch()
                if (!this.v$.light.$error) {
                    this.modal.hide()
                }
            },

            getLights() {
                fetch('http://localhost:8080/light')
                    .then(response => response.json())
                        .then(data => this.lights = data)
            },

            getSensors() {
                fetch('http://localhost:8080/climate-sensor')
                    .then(response => response.json())
                        .then(data => this.sensors = data)
            }
        },

        computed: {
            isLightsAvailable() {
                return this.lights && this.lights.length;
            },

            isSensorsAvailable() {
                return this.sensors && this.sensors.length;
            }
        },

        created() {
            this.getLights()
            this.getSensors()
        },

        validations () {
            return {
                light: {
                    typeOfLight:  { required, minLength: minLength(6) },
                    description: { required, minLength: minLength(12) },
                    ip: { required, ipAddress}
                }
            }
        }

    }
</script>

<template>
    <div class="m-2">
        <h4>{{ title }}</h4>
        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#lightModal">
            add smart device
        </button>
    </div>
    
    <div v-if="isLightsAvailable && isSensorsAvailable" class="row mx-auto h-100">
        <template v-for="l in lights" class="col">
            <Light class="p-2 m-2" v-show="title === l.room" :lightId="l.id"/>
        </template>
        <template v-for="s in sensors" class="col">
            <ClimateSensor class="p-2 m-2" v-show="title === s.room.name" :sensorId="s.id"/>
        </template>
    </div>

    
    

    <!-- Modal -->
    <div class="modal" ref="modal" id="lightModal" tabindex="-1" aria-labelledby="lightModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Add smart device</h1>
                    <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitHandler">
                        <div class="mb-3 form-group">
                            <label class="col-form-label">Type of light:</label>
                            <input type="text" class="form-control" :class="v$.light.typeOfLight.$error ? 'is-invalid' : ''" v-model.trim="light.typeOfLight">
                            <p v-if="v$.light.typeOfLight.$dirty && v$.light.typeOfLight.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.light.typeOfLight.$dirty && v$.light.typeOfLight.minLength" class="invalid-feedback">
                                Field type of light must be more 6 simbols
                            </p>
                        </div>
                        <div class="mb-3 form-group">
                            <label class="col-form-label">Description:</label>
                            <input type="text" class="form-control" :class="v$.light.description.$error ? 'is-invalid' : ''" v-model.trim="light.description">
                            <p v-if="v$.light.description.$dirty && v$.light.description.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.light.description.$dirty && v$.light.description.minLength" class="invalid-feedback">
                                Field type of light must be more 12 simbols
                            </p>
                        </div>
                        <div class="mb-3 form-group">
                            <label class="col-form-label" >Ip:</label>
                            <input type="text" class="form-control":class="v$.light.ip.$error ? 'is-invalid' : ''" v-model.trim="light.ip">
                            <p v-if="v$.light.ip.$dirty && v$.light.ip.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.light.ip.$dirty && v$.light.ip.ipAddress" class="invalid-feedback">
                                Ip address incorrect
                            </p>
                        </div>

                        <div class="mb-3 form-group">
                            <label class="col-form-label">Room: </label>
                            <select class="form-control" v-model="light.room">
                                <option v-for="(room, index) in rooms" :key="index" :value="room.value">
                                    {{ room.label }}
                                </option>
                            </select>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
