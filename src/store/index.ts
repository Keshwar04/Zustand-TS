import { create } from 'zustand';
import { stateType, storeType } from '../type';

export const useZustandStore = create<storeType>((set) => ({
    count: 1,
    setCount: () => {
        set((state: stateType) => (
            { count: state.count + 1 }
        ))
    }
}))

