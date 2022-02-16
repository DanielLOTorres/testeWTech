<template>
  <div class="box">
    <div class="form">
      <h1>Cadastrar Oferta</h1>
      <form @submit.prevent="cadastrar()">
        <input v-model="id" type="number" name="id" placeholder="ID" />
        <input
          v-model="id_customer"
          type="number"
          name="id_customer"
          placeholder="ID do cliente"
        />
        <input v-model="from" type="text" name="from" placeholder="De" />
        <input v-model="to" type="text" name="to" placeholder="Para" />
        <input
          v-model="initial_value"
          type="number"
          name="initial_value"
          placeholder="Valor inicial"
        />
        <input
          v-model="amount"
          type="number"
          name="amount"
          placeholder="Quantidade"
        />
        <input
          v-model="amount_type"
          type="text"
          name="amount_type"
          placeholder="Unidade"
        />
        <input type="submit" value="Cadastrar" />
        <input v-on:click="limparFormulario()" type="button" value="Cancelar" />
        <a href="/listarOfertas"
          ><input value="Ofertas registradas" type="button"
        /></a>
      </form>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";

export default {
  name: "Offers",
  components: {},
  data() {
    return {
      id: "",
      id_customer: "",
      from: "",
      to: "",
      initial_value: "",
      amount: "",
      amount_type: "",
    };
  },
  mounted() {},
  methods: {
    cadastrar() {
      const offer = {
        id: this.id,
        id_customer: this.id_customer,
        from: this.from,
        to: this.to,
        initial_value: this.initial_value,
        amount: this.amount,
        amount_type: this.amount_type,
      };
      try {
        api.post("/offer", offer).then((res) => {
          console.log(res);
          alert("Oferta registrada com sucesso");
        });
      } catch (error) {
        console.log("Erro ao cadastrar oferta" + error);
        alert("Não foi possível registrar essa oferta no momento");
      }
      this.limparFormulario();
    },
    limparFormulario() {
      this.id = "";
      this.id_customer = "";
      this.from = "";
      this.to = "";
      this.initial_value = "";
      this.amount = "";
      this.amount_type = "";
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
