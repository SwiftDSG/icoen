import { reactive, readonly } from "vue";

const state = reactive<{ viewMode: 'desktop' | 'mobile' | null }>({
  viewMode: null,
});

export const baseStore = {
  getState: () => readonly(state),
  setViewMode: (viewMode: 'desktop' | 'mobile') => { state.viewMode = viewMode; },
};