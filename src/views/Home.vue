<template>
    <h1>home page</h1>
    <ul v-for="char in chars " :key="char.id">
        <li>name: {{char.name}}</li>
        <li>status: {{char.status}}</li>
        <li>oroginin name: {{char.origin.name}}</li>
        <li>location name:{{char.location.name}}</li>
        <li>image link:{{char.image}}</li>
    </ul>
    {{chars.lenght}}
        <button @click="getNew()">get new</button>
</template>

<script>
    export default {
        data(){
            return {
                chars: []
            }
        },
        created(){
            fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => this.chars = data.results);
        },
    }
</script>