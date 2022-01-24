<template>
    <div class="header">
        <span>Rick And Morty </span>
        <span>Character Schema</span>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        background: var(--black-900);
        color: var(--grey);
        font-family: var(--font-2);
        height: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: flex-start;
        flex-direction: column;

        font-size: 3.5rem;
        letter-spacing: 0.08rem;
        word-spacing: 0.2rem;
    }

    @media only screen and (min-width: 320px) and (max-width:499px) {

        .header {
            font-size: 1.5rem;
        }
    }

    @media only screen and (min-width: 500px) and (max-width:769px) {
        .header {
            font-size: 2.5rem;
        }
    }

</style>