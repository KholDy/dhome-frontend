<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, minLength, ipAddress } from '@vuelidate/validators'
    import { Modal } from 'bootstrap'
    import Light from '@/components/Light.vue'
    import ClimateSensor from '@/components/ClimateSensor.vue'
    import { getLights, addLight } from '@/api/light'
    import { getSensors, addSensor } from '@/api/sensor'

    export default {
        components: { Light, ClimateSensor },

        props: ['title', 'roomId'],

        setup () {
            return { v$: useVuelidate() }
        },

        data() {
            return {
                modal: null,
                lights: [],
                sensors: [],
                typeOfDevice: '',

                device: {
                    deviceName: '',
                    description: '',
                    ip: '',
                    room_id: this.roomId
                },

                typeOfDevices: [
                    {
                        label: 'light',
                        value: 'light'
                    },
                    {
                        label: 'sensor',
                        value: 'sensor'
                    }
                ]
            }
        },

        mounted() {
            this.modal = Modal.getOrCreateInstance(document.getElementById('addDeviceModal'))
        },

        methods: {

            submitHandler() {
                this.v$.device.$touch() 
                if (!this.v$.device.$error) {
                    this.modal.hide()
                    switch(this.typeOfDevice) {
                        case 'light': 
                            addLight(this.device)
                            break;
                        case 'sensor':
                            addSensor(this.device)
                            break;
                    }
                }
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

        async created() {
            this.lights = await getLights();
            this.sensors = await getSensors();
        },

        validations () {
            return {
                device: {
                    deviceName:  { required, minLength: minLength(6) },
                    description: { required, minLength: minLength(12) },
                    ip: { required, ipAddress}
                }
            }
        }

    }
</script>

<template>
    <div class="p-2">
        <h4>{{ title }}</h4>
        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addDeviceModal">
            Add smart device
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
    <div class="modal" ref="modal" id="addDeviceModal" tabindex="-1" aria-labelledby="addDeviceModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Add smart device</h1>
                    <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitHandler">
                        <div class="mb-3 form-group">
                            <label class="col-form-label">Type of device: </label>
                            <select class="form-control" v-model="typeOfDevice">
                                <option v-for="(device, index) in typeOfDevices" :key="index" :value="device.value">
                                    {{ device.label }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3 form-group">
                            <label class="col-form-label">Device name:</label>
                            <input type="text" class="form-control" :class="v$.device.deviceName.$error ? 'is-invalid' : ''" v-model.trim="device.deviceName">
                            <p v-if="v$.device.deviceName.$dirty && v$.device.deviceName.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.device.deviceName.$dirty && v$.device.deviceName.minLength" class="invalid-feedback">
                                Field type of light must be more 6 simbols
                            </p>
                        </div>
                        <div class="mb-3 form-group">
                            <label class="col-form-label">Description:</label>
                            <textarea class="form-control" :class="v$.device.description.$error ? 'is-invalid' : ''" v-model.trim="device.description" rows="3">
                            </textarea>
                            <p v-if="v$.device.description.$dirty && v$.device.description.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.device.description.$dirty && v$.device.description.minLength" class="invalid-feedback">
                                Field type of light must be more 12 simbols
                            </p>
                        </div>
                        <div class="mb-3 form-group">
                            <label class="col-form-label" >Ip:</label>
                            <input type="text" class="form-control":class="v$.device.ip.$error ? 'is-invalid' : ''" v-model.trim="device.ip">
                            <p v-if="v$.device.ip.$dirty && v$.device.ip.required" class="invalid-feedback">
                                Field type of light must not be empty
                            </p>
                            <p v-if="v$.device.ip.$dirty && v$.device.ip.ipAddress" class="invalid-feedback">
                                Ip address incorrect
                            </p>
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
