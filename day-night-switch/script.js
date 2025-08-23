// seleciona o body
let corpo = document.querySelector("body");
// seleciona o container principal
let mainBox = document.getElementById("main");
// seleciona todos os elementos com a class .text que devem mudar de cor
let text = document.querySelectorAll(".text");

// controle de estado (false = dia, true = noite)
let isNight = false;

// flag de cooldown para evitar spam
let canToggle = true;

// função que alterna entre dia e noite
function active() {
    if (!canToggle) return; 
    canToggle = false; // bloqueia novo clique

    if (isNight) {
        // --- muda pra noite ---
        isNight = false;

        // fundo escuro
        corpo.style.backgroundColor = "#222222ff";

        // troca classes para ativar animações
        mainBox.classList.remove("day");
        mainBox.classList.add("night");

        // altera cor e borda do container
        mainBox.style.backgroundColor = "#7c7c7cff";
        mainBox.style.border = "4px solid #f5f5f5c5";

        // muda cor de todos os textos
        text.forEach((el) => {
            el.style.color = "#f3f3f3c5";
        });

    } else {
        // --- muda pra dia ---
        isNight = true;

        // fundo claro
        corpo.style.backgroundColor = "#d1d1d1ff";

        // troca classes para animações
        mainBox.classList.remove("night");
        mainBox.classList.add("day");

        // altera cor e borda do container
        mainBox.style.backgroundColor = "#96aac4ff";
        mainBox.style.border = "4px solid #747474c5";

        // muda cor de todos os textos
        text.forEach((el) => {
            el.style.color = "#242424ff";
        });
    }

    // desbloqueia o clique depois de 1.5s (tempo da animação)
    setTimeout(() => {
        canToggle = true;
    }, 1500);
}

// inicia a página já no modo dia
active();
