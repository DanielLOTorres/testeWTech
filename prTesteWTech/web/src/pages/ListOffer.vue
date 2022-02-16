<template>
  <div class="box">
    <div class="table-div">
      <Tabela
        style="width: 100%"
        v-bind:headers="[
          'Id',
          'Id do Cliente',
          'De',
          'Para',
          'Valor inicial',
          'Quantidade',
          'Unidade',
        ]"
        v-bind:rows="offers"
      ></Tabela>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import Tabela from "../components/Table.vue";

export default {
  name: "ListOffer",
  components: { Tabela },
  data() {
    return {
      offers: [],
      id: "",
      id_customer: "",
      from: "",
      to: "",
      initial_value: "",
      amount: "",
      amount_type: "",
    };
  },
  mounted() {
    api.get("/offer").then((res) => {
      let moddedData = [];
      const data = res.data.offers;
      data.forEach((el) => {
        el = {
          id: el.id,
          id_customer: el.id_customer,
          from: el.from,
          to: el.to,
          initial_value: el.initial_value,
          amount: el.amount,
          amount_type: el.amount_type,
        };
        moddedData.push(el);
      });
      this.offers = moddedData;
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
