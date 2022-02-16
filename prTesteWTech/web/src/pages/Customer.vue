<template>
  <div class="box">
    <div class="form">
      <h1>Cadastrar Cliente</h1>
      <form @submit.prevent="cadastrar()">
        <input v-model="id" type="number" name="id" placeholder="ID" />
        <input v-model="nome" type="text" name="nome" placeholder="Nome" />
        <input v-model="doc" type="number" name="doc" placeholder="CNPJ" />
        <input
          v-model="descricao"
          type="text"
          name="descricao"
          placeholder="Descrição"
        />

        <select v-model="atividade" name="atividade" id="atividade">
          <option disabled value="">Atividade</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
        <input v-model="site" type="text" name="site" placeholder="Site" />
        <input type="submit" value="Cadastrar" />
        <input v-on:click="limparFormulario()" type="button" value="Cancelar" />
        <a href="/listarClientes"
          ><input value="Clientes cadastrados" type="button"
        /></a>
      </form>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";

export default {
  name: "Customer",
  components: {},
  data() {
    return {
      id: "",
      nome: "",
      doc: "",
      descricao: "",
      atividade: "",
      site: "",
    };
  },
  mounted() {},
  methods: {
    cadastrar() {
      const customer = {
        id: this.id,
        name: this.nome,
        doc: this.doc,
        about: this.descricao,
        active: this.atividade,
        site: this.site,
      };
      try {
        api.post("/customer", customer).then((res) => {
          console.log(res);
          alert("Cliente cadastrado com sucesso");
        });
      } catch (error) {
        console.log("Erro ao cadastrar cliente" + error);
        alert("Não foi possível cadastrar esse cliente no momento");
      }
      this.limparFormulario();
    },
    limparFormulario() {
      this.id = "";
      this.nome = "";
      this.doc = "";
      this.descricao = "";
      this.atividade = "";
      this.site = "";
    },
  },
};
</script>

<style scoped>
.box {
  height: 95%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 10px auto;
  padding: 16px;
  background: #f7f7f7;
}
.form h1 {
  background: var(--color-background-nav);
  padding: 20px 0;
  font-size: 140%;
  font-weight: 300;
  text-align: center;
  color: #fff;
  margin: -16px -16px 16px -16px;
}
.form input[type="text"],
.form input[type="number"],
.form input[type="select"],
.form select {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
  font: 95% Arial, Helvetica, sans-serif;
}

.form input[type="text"]:focus,
.form input[type="number"]:focus,
.form input[type="select"]:focus,
.form select:focus {
  box-shadow: 0 0 5px var(--color-background-nav);
  padding: 3%;
  border: 1px solid var(--color-background-nav);
}

.form input[type="submit"],
.form input[type="button"] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background: var(--color-background-nav);
  border-bottom: 2px solid var(--color-background-nav);
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
  margin-bottom: 5px;
}
.form input[type="submit"]:hover,
.form input[type="button"]:hover {
  background: #292d31;
}

.content {
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  width: 100%;
  border: 1px solid #eeeeee;
}

.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: 0;
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: base-spacing-unit;
  padding-right: base-spacing-unit;
}
</style>
