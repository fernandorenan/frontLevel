<template>
  <div class="edit-patient">
    <h1>Editar Paciente</h1>
    <form @submit.prevent="updatePatient">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="editedPatient.name" required>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="editedPatient.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefone:</label>
        <input type="text" id="phone" v-model="editedPatient.phone" required>
      </div>
      <button type="submit">Atualizar Paciente</button>
    </form>
    <router-link to="/patients" class="back-to-patients">Voltar para Lista de Pacientes</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedPatient: {
        name: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    updatePatient() {
      // Implemente a lógica para atualizar o paciente aqui
    },
  },
};
</script>

<style scoped>
.edit-patient {
  background-color: #F5F5F5;
  padding: 20px;
  text-align: center;
}

.edit-patient h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007BFF;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.back-to-patients {
  display: block;
  margin-top: 20px;
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
  font-size: 18px;
}

.back-to-patients:hover {
  color: #0056b3;
}
</style>
