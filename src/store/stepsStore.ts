import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StepsStore {
  currentStep: number;
  completedStepIds: number[];
  setCurrentStep: (step: number) => void;
  toggleCompletedStep: (step: number) => void;
}

export const useStepsStore = create<StepsStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      completedStepIds: [],
      setCurrentStep: (step) => set({ currentStep: Math.min(Math.max(step, 1), 8) }),
      toggleCompletedStep: (step) =>
        set((state) => {
          const exists = state.completedStepIds.includes(step);
          return {
            completedStepIds: exists
              ? state.completedStepIds.filter((item) => item !== step)
              : [...state.completedStepIds, step].sort((a, b) => a - b),
          };
        }),
    }),
    {
      name: 'elected-steps-state',
      partialize: (state) => ({
        currentStep: state.currentStep,
        completedStepIds: state.completedStepIds,
      }),
    }
  )
);
