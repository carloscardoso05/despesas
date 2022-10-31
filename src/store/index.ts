import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { userId } from "@/data/userData";

export const useDespesasStore = defineStore("DespesasStore", () => {
  const yearSelect = ref('')
  const monthSelect = ref('')
  const datePath = computed(() => `users/${userId}/${yearSelect.value}/${monthSelect.value}/`)

  function setYear(year: string) {
    yearSelect.value = year;
  }

  function setMonth(month: string) {
    monthSelect.value = month;
  }

  return {
    yearSelect,
    monthSelect,
    setYear,
    setMonth,
    datePath
  }
});