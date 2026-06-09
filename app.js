/**
 * LÓGICA DO APLICATIVO - VITRINE DIGITAL
 * Escola Monsenhor Bicudo
 */

document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do DOM
    const cardsGrid = document.getElementById("cardsGrid");
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const resetSearchBtn = document.getElementById("resetSearchBtn");
    const emptyState = document.getElementById("emptyState");
    
    const statTotalAlunos = document.getElementById("stat-total-alunos");
    const statTotalProjetos = document.getElementById("stat-total-projetos");
    const statBarProjetos = document.getElementById("stat-bar-projetos");

    // Inicialização
    init();

    function init() {
        // Renderizar todos os cards inicialmente
        renderCards(ALUNOS_DATA);
        
        // Calcular e animar estatísticas
        calculateStats();

        // Configurar Event Listeners
        searchInput.addEventListener("input", handleSearch);
        clearSearchBtn.addEventListener("click", clearSearch);
        resetSearchBtn.addEventListener("click", clearSearch);
    }

    /**
     * Calcula e exibe as estatísticas com efeito de contagem progressiva
     */
    function calculateStats() {
        const totalAlunos = ALUNOS_DATA.length;
        // Considera projeto ativo qualquer um que não tenha "#" como link
        const totalProjetos = ALUNOS_DATA.filter(aluno => aluno.link && aluno.link !== "#").length;

        // Animar contadores
        animateCounter(statTotalAlunos, totalAlunos, 1000);
        animateCounter(statTotalProjetos, totalProjetos, 1000);

        // Animar barra de progresso
        setTimeout(() => {
            const percentage = totalAlunos > 0 ? (totalProjetos / totalAlunos) * 100 : 0;
            statBarProjetos.style.width = `${percentage}%`;
        }, 300);
    }

    /**
     * Função auxiliar para animar números de 0 até o valor final
     */
    function animateCounter(element, targetValue, duration) {
        let startValue = 0;
        if (targetValue === 0) {
            element.textContent = "0";
            return;
        }
        
        const stepTime = Math.abs(Math.floor(duration / targetValue));
        const timer = setInterval(() => {
            startValue++;
            element.textContent = startValue;
            
            if (startValue >= targetValue) {
                element.textContent = targetValue;
                clearInterval(timer);
            }
        }, Math.max(stepTime, 20)); // Limite mínimo de 20ms para performance
    }

    /**
     * Renderiza o grid de cards dos alunos
     */
    function renderCards(alunosList) {
        cardsGrid.innerHTML = "";

        if (alunosList.length === 0) {
            cardsGrid.style.display = "none";
            emptyState.style.display = "block";
            return;
        }

        cardsGrid.style.display = "grid";
        emptyState.style.display = "none";

        alunosList.forEach((aluno, index) => {
            const hasActiveProject = aluno.link && aluno.link !== "#";
            const colorClass = aluno.cor || "card-blue";
            
            // Criar container do card (com suporte a foco para acessibilidade)
            const cardContainer = document.createElement("div");
            cardContainer.className = "card-container";
            cardContainer.setAttribute("tabindex", "0");
            cardContainer.setAttribute("aria-label", `Projeto de ${aluno.nome}`);

            // Montar o HTML interno estruturado do flip card
            cardContainer.innerHTML = `
                <div class="card ${colorClass}">
                    
                    <!-- FRENTE DO CARD -->
                    <div class="card-face card-face-front">
                        <span class="card-tech-badge">Dev. Sistemas</span>
                        <div class="card-code-decoration">&lt;/&gt;</div>
                        
                        <div class="card-name-wrapper">
                            <span class="card-label">Estudante</span>
                            <h2 class="card-student-name">${aluno.nome}</h2>
                        </div>
                        
                        <div class="card-description-wrapper">
                            <p class="card-phrase">
                                "${aluno.descricao || 'Criando soluções tecnológicas para o amanhã.'}"
                            </p>
                        </div>
                        
                        <!-- Ícone de flip indicativo -->
                        <svg class="card-flip-indicator" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                        </svg>
                    </div>
                    
                    <!-- VERSO DO CARD -->
                    <div class="card-face card-face-back">
                        <div class="card-back-header">
                            <span class="card-back-badge">${hasActiveProject ? 'Projeto Pronto' : 'Em Desenvolvimento'}</span>
                            <h3 class="card-back-title">${aluno.nome.split(" ")[0]}</h3>
                            <p class="card-back-url">${hasActiveProject ? aluno.link.replace(/^https?:\/\//i, '') : 'repositorio/em-breve'}</p>
                        </div>
                        
                        <div class="card-back-action">
                            ${hasActiveProject ? `
                                <a href="${aluno.link}" target="_blank" rel="noopener noreferrer" class="project-btn">
                                    <span>Acessar Projeto</span>
                                    <svg class="project-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            ` : `
                                <button class="project-btn disabled" disabled>
                                    <span>Em breve...</span>
                                </button>
                            `}
                            <span class="back-indicator-text">Toque para voltar</span>
                        </div>
                    </div>
                </div>
            `;

            // Configurar interações avançadas de toque/clique para UX
            const cardInner = cardContainer.querySelector(".card");
            const projectBtn = cardContainer.querySelector(".project-btn");
            const backIndicator = cardContainer.querySelector(".back-indicator-text");

            // No clique do container, vira o card (útil para dispositivos móveis)
            cardContainer.addEventListener("click", (e) => {
                // Impede o flip de voltar caso clique no botão de acesso ativo
                if (projectBtn && projectBtn.contains(e.target)) {
                    return;
                }
                
                // Toggle do estado "flipped"
                const isFlipped = cardInner.classList.contains("flipped");
                
                // Remove flipped de todos os outros cards para manter apenas um ativo
                document.querySelectorAll(".card").forEach(c => {
                    if (c !== cardInner) c.classList.remove("flipped");
                });
                
                cardInner.classList.toggle("flipped");
            });

            // Permite virar o card de volta clicando no texto informativo do verso
            if (backIndicator) {
                backIndicator.addEventListener("click", (e) => {
                    e.stopPropagation(); // Evita re-trigger do container click
                    cardInner.classList.remove("flipped");
                });
            }

            // Suporte para teclas Enter/Espaço no foco do teclado (Acessibilidade)
            cardContainer.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (projectBtn && cardInner.classList.contains("flipped") && e.key === "Enter") {
                        // Se já estiver virado e focado, foca e clica no botão do projeto
                        projectBtn.click();
                    } else {
                        cardInner.classList.toggle("flipped");
                    }
                }
            });

            // Adicionar efeito de entrada suave com pequeno delay
            cardContainer.style.opacity = "0";
            cardContainer.style.transform = "translateY(15px)";
            cardContainer.style.transition = `opacity 0.4s ease ${index * 0.03}s, transform 0.4s ease ${index * 0.03}s`;
            
            cardsGrid.appendChild(cardContainer);

            // Trigger reflow para ativar animações de entrada
            setTimeout(() => {
                cardContainer.style.opacity = "1";
                cardContainer.style.transform = "translateY(0)";
            }, 50);
        });
    }

    /**
     * Filtra os cards em tempo real com base no input de pesquisa
     */
    function handleSearch(e) {
        const query = e.target.value;
        
        // Mostrar/ocultar botão de limpar busca
        if (query.length > 0) {
            clearSearchBtn.style.display = "flex";
        } else {
            clearSearchBtn.style.display = "none";
        }

        const normalizedQuery = normalizeString(query);

        // Filtrar array original
        const filteredAlunos = ALUNOS_DATA.filter(aluno => {
            const normalizedName = normalizeString(aluno.nome);
            return normalizedName.includes(normalizedQuery);
        });

        // Re-renderizar com lista filtrada
        renderCards(filteredAlunos);
    }

    /**
     * Limpa o campo de busca e restaura o grid completo
     */
    function clearSearch() {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        renderCards(ALUNOS_DATA);
        searchInput.focus();
    }

    /**
     * Remove acentos e caracteres especiais para busca aproximada robusta
     */
    function normalizeString(str) {
        if (!str) return "";
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove acentos
            .toLowerCase()
            .trim();
    }
});
