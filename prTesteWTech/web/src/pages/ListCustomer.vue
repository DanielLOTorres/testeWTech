<template>
  <div class="box">
    <div class="table-div">
      <Tabela
        style="width: 100%"
        v-bind:headers="['Id', 'Nome', 'Doc', 'Sobre', 'Ativa', 'Site']"
        v-bind:rows="customers"
      ></Tabela>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import Tabela from "../components/Table.vue";

export default {
  name: "ListCustomer",
  components: { Tabela },
  data() {
    return {
      customers: [],
      id: "",
      nome: "",
      doc: "",
      descricao: "",
      atividade: "",
      site: "",
    };
  },
  mounted() {
    api.get("/customer").then((res) => {
      let moddedData = [];
      const data = res.data.customers;
      data.forEach((el) => {
        el = {
          id: el.id,
          name: el.name,
          doc: el.doc,
          about: el.about,
          active: el.active,
          site: el.site,
        };
        if (el.active == true) {
          el.active = "Sim";
        } else if (el.active == false) {
          el.active = "Não";
        }
        moddedData.push(el);
      });
      this.customers = moddedData;
    });
  },
};
</script>

<style scoped>
.box {
  width: 100vw;
  height: calc(100vh - 10vh);
  background: var(--color-background-home);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px;
}
</style>
