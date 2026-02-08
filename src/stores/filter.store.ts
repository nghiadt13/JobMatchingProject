import { create } from "zustand";

interface FilterState {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
}));
