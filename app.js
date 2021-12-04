const toggleButtons = document.querySelectorAll('.js-toggle-button');
toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        if(icon.classList.contains('fa-angle-double-up') ) {
            icon.classList.remove('fa-angle-double-up');
            icon.classList.add('fa-angle-double-down');
        } else {
            icon.classList.remove('fa-angle-double-down');
            icon.classList.add('fa-angle-double-up');
        }
        
        const newsContent = document.querySelector(`.js-news-content[data-index='${button.dataset.index}']`)
        newsContent.classList.toggle('hidden');
        if(newsContent.classList.contains('hidden')) {
            newsContent.style.maxHeight = 0;
        } else {
            newsContent.style.maxHeight = `${newsContent.scrollHeight}px`;
        }
    })
});

const submitButton = document.querySelector("button[type='submit']");
const checkboxes = document.querySelectorAll('input');
const checkGuide = document.querySelector('.js-check-guide');
checkboxes.forEach(checkbox => {
   checkbox.addEventListener('change', () => {
       checkedCount = getCheckedCount();
       if(checkedCount === 5) {
           submitButton.disabled = false;
           checkGuide.classList.add('hidden');
       } else {
           submitButton.disabled = true;
           checkGuide.classList.remove('hidden');
       }
   })
});
function getCheckedCount() {
    let result = 0;
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked === true) {result++;}
    })

    return result;
}