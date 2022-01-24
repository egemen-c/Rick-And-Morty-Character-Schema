<template>
    <div class="nav">
        <div class="brand">
            <img src="../assets/logo.png" alt="">
            <span>© 2022 Rick F*ck*ng Sanchez, All rights reserved.</span>
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
    }

    .brand {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
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


    @media only screen and (max-width: 481px) {
        .nav {
            font-size: 0.4rem;
        }
    }

    @media only screen and (max-width: 769px) {
        .nav {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;

        }
    }

    @media only screen and (min-width: 1201) {}
</style>