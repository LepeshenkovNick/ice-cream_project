(() => {
    const refs = {
      openModalBtn: document.querySelector('.btn-open'),
      closeModalBtn: document.querySelector('.close-menu-btn'),
      modal: document.querySelector('.mob-menu'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();