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
        justify-content: center;
        align-items: center; 
        background: var(--black-900);
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


    @media only screen and (min-width: 320px) and (max-width:499px) {
        .brand > span {
            font-size: 7px;
        }
        .brand > img {
            width: 2rem;
            height: 2rem;
        }
     }

    @media only screen and (min-width: 500px) and (max-width:769px) { 
        .brand > span {
            font-size: 13px;
        }
    }
</style>