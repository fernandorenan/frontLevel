<template>
  <div>
    <h1>Patient List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td>{{ patient.name }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
      // Use Axios ou outra biblioteca para fazer uma solicitação GET para a API do Rails
      axios.get('/patients').then((response) => {
        this.patients = response.data;
      });
    },
  },
};
</script>