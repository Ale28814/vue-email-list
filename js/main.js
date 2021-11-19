//generazione lista di email tramite api
const app = new Vue({
    el: '#app',
    data: {
        mailList: [],
        desk: '',
    },
    computed: {
        listMails() {
            return this.mailList.length > 9 ? true : false;
        },
    },
    methods: {
        genTenMails() {
            for (let i = 1; i < 11; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                    console.log(response.data.response);
                    this.mailList.push(response.data.response);
                });
            }
        }
    },
});