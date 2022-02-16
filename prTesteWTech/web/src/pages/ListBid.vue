<template>
  <div class="box">
    <div class="table-div">
      <Tabela
        style="width: 100%"
        v-bind:headers="[
          'Id do Provedor',
          'Id da Oferta',
          'Valor',
          'Quantidade',
        ]"
        v-bind:rows="bids"
      ></Tabela>
    </div>
  </div>
</template>
<script>
import api from "@/services/api.js";
import Tabela from "../components/Table.vue";

export default {
  name: "ListBid",
  components: { Tabela },
  data() {
    return {
      bids: [],
      id_provider: "",
      id_offer: "",
      value: "",
      amount: "",
    };
  },
  mounted() {
    api.get("/bid").then((res) => {
      let moddedData = [];
      const data = res.data.bids;
      data.forEach((el) => {
        el = {
          id_provider: el.id_provider,
          id_offer: el.id_offer,
          value: el.value,
          amount: el.amount,
        };
        moddedData.push(el);
      });
      this.bids = moddedData;
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
