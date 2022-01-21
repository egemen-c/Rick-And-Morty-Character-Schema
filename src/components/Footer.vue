<template>
    <div class="nav">
        <div class="brand">
            <img src="../assets/logo.png" alt="">
            <span>© 2022  Rick F*ck*ng Sanchez, All rights reserved.</span>
        </div>
        <div class="nav-links">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/Characters">Characters</router-link></li>
                <li><router-link to="/Locations">Locations</router-link></li>
                <li><a href="https://github.com/egemen-c" target="_blank">Me</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        background: var(--black-900);
        flex-direction: row-reverse;
        position: relative;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }
    .brand { 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
    }
    .brand > img {
        width: 4rem;
        height: 4rem;
    }
    .brand > span {
        padding: 7px;
        color: var(--grey);
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-decoration: none;
    }

    .nav .nav-links ul {
        display: flex;
        align-items: center;
        list-style-type: none;
        justify-content: center;
    }

    .nav .nav-links ul li a {
        padding: 7px;
        color: var(--grey);
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-decoration: none;
    }
    a {
        border-bottom: 1px solid  var(--teal);

    }
    .nav .nav-links ul li a:hover{
        color: var(--teal);
    }
</style>