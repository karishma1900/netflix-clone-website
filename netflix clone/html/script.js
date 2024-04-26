document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const answer = this.parentElement.nextElementSibling;
            const allTabs = document.querySelectorAll('.tab');

            allTabs.forEach(function (tab) {
                if (tab !== this.parentElement) {
                    const otherAnswer = tab.querySelector('.answer');
                    const otherButton = tab.querySelector('.toggle-btn');
                    otherAnswer.classList.remove('show');
                    otherButton.textContent = '+';
                }
            }, this);

            answer.classList.toggle('show');
            this.textContent = answer.classList.contains('show') ? '−' : '+';
        });
    });
});