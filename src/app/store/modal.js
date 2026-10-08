import { create } from "zustand";

const useModal = create((set) => ({
    isModalOpen: false,

    openModal: () =>
        set({
            isModalOpen: true,
        }),

    closeModal: () =>
        set({
            isModalOpen: false,
        })
}));

export default useModal;