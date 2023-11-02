import { routerLink } from 'vue-router';

<template>
  <div class="patient-list">
    <h1 class="page-title">Lista de Pacientes</h1>
    <router-link to="/patients/new" class="new-patient-button">Novo Paciente</router-link>
    <table class="patient-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id" class="patient-row">
          <td class="patient-name">{{ patient.name }}</td>
          <td class="patient-email">{{ patient.email }}</td>
          <td class="patient-phone">{{ patient.phone }}</td>
          <td>
            <router-link :to="{ name: 'EditPatient', params: { id: patient.id } }">Editar</router-link>
            <button @click="deletePatient(patient)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
      <router-link to="/" class="back-button">Voltar para o Início</router-link>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  data() {
    return {
      patients: [],
    };
  },
  created() {
    this.fetchPatients();
  },
  methods: {
    fetchPatients() {
      axios.get('http://localhost:3000/patients.json')
        .then(response => {
          this.patients = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar pacientes:', error);
        });
    },
    editPatient(patient) {
     this.$router.push(`/patients/${patient.id}/edit`);
    },
    deletePatient(patient) {
      // Implemente a lógica para excluir o paciente
      axios.delete(`http://localhost:3000/patients/${patient.id}.json`)
        .then(() => {
          this.fetchPatients();
        })
        .catch(error => {
          console.error('Erro ao excluir paciente:', error);
        });
    },
  },
};
/* eslint-enable */
</script>

<style scoped>
.patient-list {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.patient-row:nth-child(odd) {
  background-color: #f2f2f2;
}

.patient-name {
  color: #007BFF;
  font-weight: bold;
}

.patient-email {
  color: #17A2B8;
}

.patient-phone {
  color: #28A745;
}
</style>
