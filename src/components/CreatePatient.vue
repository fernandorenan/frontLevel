<template>
  <form @submit.prevent="createPatient" class="patient-form">
  <h1>Cadastre um novo Paciente</h1>
    <div class="form-group">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="newPatient.name" required>
    </div>

    <div class="form-group">
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="newPatient.email" required>
    </div>

    <div class="form-group">
      <label for="phone">Telefone:</label>
      <input type="text" id="phone" v-model="newPatient.phone" required>
    </div>

    <button type="submit" class="submit-button">Criar Paciente</button>

  </form>
      <router-link to="/patients" class="back-button">Voltar para Lista de Pacientes</router-link>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  data() {
    return {
      newPatient: {
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    createPatient() {
      axios.post('http://localhost:3000/patients.json', this.newPatient)
        .then(response => {
          // O paciente foi criado com sucesso, você pode navegar para a página de lista de pacientes
          this.$router.push({ name: 'PatientList' });
        })
        .catch(error => {
          console.error('Erro ao criar paciente:', error);
        });
    },
  },
};
/* eslint-enable */
</script>

<style scoped>
.patient-form {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>