
const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove o destaque dos outros botões
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        // Filtra os jogos
        gameCards.forEach(card => {

            if (
                category === "todos" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});
