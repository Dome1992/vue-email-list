//Descrizione:Attraverso l apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all interno di una lista.

const { createApp } = Vue;
createApp({
    data() {
        return {
            indirizziEmail: [], //  Array vuoto per gli indirizzi email

        };
    },
    methods: {
       


    },
    mounted() {
        console.log("l'applicazione è caricata");

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                // Pusha indirizzo email
                this.indirizziEmail.push(response.data.response);
                console.log(this.indirizziEmail);
            })

    }
}).mount('#app');

