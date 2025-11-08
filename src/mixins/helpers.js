import Vue from "vue";

Vue.mixin({
    methods:{
        _dateFormat(datetime){
            const date = new Date(datetime);
            return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
            });
        }
    }
})