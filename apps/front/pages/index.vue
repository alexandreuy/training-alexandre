<template>
    <div class="container">
        <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
            </b-form-group>
        </b-form>
        <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>

    </div>
</template>

<script>
export default {
    data() {    
        return {
            form: {
                name: '',
                response: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            // alert(JSON.stringify(this.form))
            let info = new FormData();
            info.set("name", this.form.name);
            this.$axios.post('http://localhost:3000/reverso', info).then(reponse => this.form.response = reponse.data.reverse);
            this.$router.push({ name: 'user', params: { userId: '123' } });
        },
    }
}
</script>