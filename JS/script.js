const { createApp } = Vue
createApp({
    data() {
        return {
            list:[]
        }
    },
    methods:{
        getData(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then
                ((item)=>{
                    this.list.push(item.data.response)
                });
            }
        }
    },
    created(){
        this.getData()
    }
}).mount('#app')
