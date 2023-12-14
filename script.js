//Descrizione:Attraverso l apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all interno di una lista.

const { createApp } = Vue;
createApp({
    data() {
        return {
            indirizziEmail: [], // Array vuoto per gli indirizzi email
        };
    },
    methods: {
        // Eventuali altri metodi
    },
    mounted() {
        console.log("L'applicazione è caricata");

       /* axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                // Pusha indirizzo email
                this.indirizziEmail.push(response.data.response);
                console.log(this.indirizziEmail);
            });*/
            
            // ciclo for in js per ciclare 10 email all interno dell api di riferimento
        for (let index = 0; index < 10; index++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    
                    this.indirizziEmail.push(response.data.response);
                    console.log(this.indirizziEmail);
                });
        }
    }
}).mount('#app');


