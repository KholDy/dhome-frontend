<script>
    import Room from '@/components/Room.vue';

    export default {
        components: {Room},

        props: ['title'],

        data() {
            return {
                room: []
            }
        },

        methods: {
            getRooms() {
                fetch('http://localhost:8080/room')
                    .then(response => response.json())
                        .then(data => this.room = data)
            }
        },

        computed: {
            isRoomAvailable() {
                return this.room && this.room.length;
            }
        },

        created() {
            this.getRooms()
        }
    }
</script>

<template>
    <div class="container-md  text-center">
        <h3>{{ title }}</h3>
        <div v-if="isRoomAvailable">
            <div v-for="r in room" class="border row p-2 m-4">
                <Room :title="r.name"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
