<template>
  <div v-if="yearsList.length == 0" class="container w-75">
    <h3 class="alert alert-danger text-center">
      Você ainda não tem nem uma informação adicionada ainda
    </h3>
  </div>

  <div v-else class="btn-group" role="group">
    <div v-for="year in yearsList" :key="year">
      <input
        type="radio"
        class="btn-check"
        name="year-option"
        :id="year"
        autocomplete="off"
        checked
        @click="setYear(year)"
      />
      <label class="btn btn-outline-primary" :for="year">
        {{ year }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent, ref, watch } from "vue";
import { useDespesasStore } from "../store/index";

export default defineComponent({
  name: "YearSelection",

  setup() {
    const yearsList = ref([] as string[]);
    const store = useDespesasStore();
    const userData = computed(() => store.userData);
    let exec = false

    watch([userData], () => {
      yearsList.value = [];
      Object.keys(userData.value).forEach((year) => yearsList.value.push(year))
      yearsList.value.sort();
      if (exec === false) {setYear(yearsList.value[0])}
      exec = true
    });

    function setYear(year: string): void {
      store.yearSelect = year;
    }

    return {
      yearsList,
      setYear,
    };
  },
});
</script>

<style scoped></style>
