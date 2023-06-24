export const hideModal = (modalId: string) => {
  window[modalId].close();
};

export const showModal = (modalId: string) => {
  window[modalId].showModal();
};
