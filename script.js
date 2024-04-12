const app = Vue.createApp({
  data() {
    return {
      // inizializzo un oggetto vuoto
      consiglio:{}
    };
  },
  methods: {
     async generaConsiglio() {
      // variabile che userò per generare un consiglio casuale
      const random = Math.floor(Math.random() * 1000);
      
        await axios.get(`https://api.adviceslip.com/advice?random=${random}`)
        .then((response) => {
          // aggiorno l'oggetto 'consiglio' quando la richiesta ha successo
            this.consiglio = response.data.slip;
            
        })
        .catch((error) => {
          console.error("Si è verificato un errore:", error);
        });
        
    },
  },
});

app.mount("#app");