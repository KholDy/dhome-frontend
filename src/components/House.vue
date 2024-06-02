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
            },

            getTitle() {
                return this.title.toUpperCase()
            }
        },

        created() {
            this.getRooms()
        }
    }
</script>

<template>
    <div class="container-md  text-center">
        <div class="m-2">
            <h3>{{ getTitle }}</h3>
        </div>
        <div v-if="isRoomAvailable">
            <div v-for="r in room" class="border row p-2 m-4">
                <Room :title="r.name" :roomId="r.id"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
