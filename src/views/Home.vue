<template>
    <section class="home-wrapper">
        <div class="card-container">
            <div class="card" v-for="char in chars" :key="char.id">
                <div class="card-head">
                    <img :src="char.image" alt="">
                </div>
                <div class="card-body">
                    <span>name: {{char.name}}</span>
                    <span>status: {{char.status}}</span>
                    <span>origin: {{char.origin.name}}</span>
                    <span>species: {{char.species}}</span>
                    <span>locations: {{char.location.name}}</span>
                </div>
            </div>
        </div>
        <div class="btn">
            <button @click="getMore()" v-show="showCase">See More</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                showCase: true
            }
        },
        computed: {
            chars() {
                return this.$store.state.chars
            },

        },
        methods: {
            getMore() {
                if (this.$store.state.id == 42) {
                    this.showCase = false
                } else {
                    this.$store.dispatch('getMore')
                    this.$store.state.id++
                }
            }
        }
    }
</script>
<style scoped>
    .home-wrapper {
        height: hidden;
        padding: 5%;
    }

    .card-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
    }

    .card-container .card {
        background: var(--black-900);
        color: var(--grey);
        font: var(-font);
    }

    .card .card-head img {
        width: 100%;
    }

    .card-body {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 5%;
    }

    .card-body span {
        padding: 5px;
    }

    .btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px;
    }

    .btn button {
        text-align: center;
        background: var(--teal);
        color: var(--black-900);
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        padding: 10px;
        transition: all 0.3s linear;
    }

    .btn button:hover {
        -webkit-box-shadow: 0px 8px 6px 1px rgba(0, 0, 0, 0.59);
        box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.59);
    }

    @media only screen and (min-width: 320px) and (max-width:499px) {
        .card-container{
            grid-template-columns: repeat(1, 1fr);
        }
     }

    @media only screen and (min-width: 500px) and (max-width:769px) { 
        .card-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>