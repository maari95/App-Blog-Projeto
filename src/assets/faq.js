// Seleciona todas as perguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique a cada pergunta
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Encontre o elemento pai (.faq-item) da pergunta clicada
    const faqItem = question.parentElement;

    // Toggle (alternar) a classe 'active' no elemento pai para mostrar/ocultar a resposta
    faqItem.classList.toggle('active');
  });
});
