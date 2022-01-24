<template>
    <div class="nav">
        <div class="brand">
            <img src="../assets/logo.png" alt="">
            <span>Rick F*ck*ng Sanchez</span>
        </div>
        <div class="nav-links">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/Characters">Characters</router-link>
                </li>
                <li>
                    <router-link to="/Locations">Locations</router-link>
                </li>
                <li><a href="https://github.com/egemen-c" target="_blank">Me</a></li>
            </ul>
        </div>
        <div class="icon">
            <Bars style="width:16px; height:16px" @click="openMenu()" />
        </div>
    </div>
    <div class="open-menu" :class="{ active: isActive}">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/Characters">Characters</router-link>
            </li>
            <li>
                <router-link to="/Locations">Locations</router-link>
            </li>
            <li><a href="https://github.com/egemen-c" target="_blank">Me</a></li>
        </ul>
    </div>
</template>
<script>
    import {
        Bars
    } from '@vicons/fa'
    export default {
        components: {
            Bars
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            openMenu() {
                this.isActive = !this.isActive
            }
        }
    }
</script>


<style scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        background: var(--black-800);
    }

    .brand {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .brand>img {
        width: 4rem;
        height: 4rem;
    }

    .brand>span {
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


    .nav .nav-links ul li a:hover {
        color: var(--teal);
    }

    .icon {
        display: none;
    }

    .open-menu {
        display: none;
    }

    .active {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        animation: myAnim 1s ease 0s 1 normal forwards;
        background: var(--black-800);

    }

    .active ul {
        list-style-type: none;
    }

    .active ul li {
        padding: 10px;
    }

    .active ul li a {
        text-decoration: none;
        color: var(--grey);
    }

    @keyframes myAnim {
        0% {
            opacity: 0;
            transform: translateY(-250px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media only screen and (min-width: 320px) and (max-width:499px) {
        .icon {
            display: block;
            cursor: pointer;
        }

        .nav-links {
            display: none;
        }
    }

    @media only screen and (min-width: 500px) and (max-width:769px) {
        .icon {
            display: block;
            cursor: pointer;
        }

        .nav-links {
            display: none;
        }
    }

    @media only screen and (min-width: 1201) {}
</style>