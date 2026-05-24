import { create } from "zustand";

type DashboardStore = {
  selectedRange: string;
  setSelectedRange: (range: string) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  selectedRange: "Last 30 Days",

  setSelectedRange: (range) =>
    set({
      selectedRange: range,
    }),
}));
