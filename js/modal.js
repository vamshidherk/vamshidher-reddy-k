const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
    const modalToggle = e.target.closest('.featured .portfolio-link');
    if(!e.srcElement.classList.contains('git-link') && modalToggle) {

        e.preventDefault(); // to stop the link to act like one

        // const modalToggle = e.target.closest('.featured .portfolio-link');

        if(!modalToggle) return;
        const modal = modalToggle.parentNode.nextElementSibling;
        const closeButton = modal.querySelector('.modal-close');
        // console.log(modal);
        const modalOpen = _ => {
            modal.classList.add('is-open');
            modal.style.animation = 'modalIn 500ms forwards'
            document.body.style.overflowY = 'hidden';
        }

        const modalClose = _ => {
            modal.classList.remove('is-open');
            modal.removeEventListener('animationend', modalClose);
            
        }
        
        closeButton.addEventListener('click', _ => {
            modal.style.animation = 'modalOut 500ms forwards'
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';
        });

        document.addEventListener('keydown', e => {
            // console.log(e);
            if (e.keyCode === 27) {
                modal.style.animation = 'modalOut 500ms forwards'
                modal.addEventListener('animationend', modalClose);  
                document.body.style.overflowY = 'scroll';  
            }
        })

        modalOpen();
    }
})