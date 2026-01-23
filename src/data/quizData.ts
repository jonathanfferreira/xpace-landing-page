
export const QUESTIONS = [
    {
        id: 1,
        question: "O que te faz querer dançar?",
        options: [
            { id: 'A', text: "Quero gastar energia e suar muito!", points: { street: 3, ritmos: 2, kpop: 1, jazz: 0 } },
            { id: 'B', text: "Quero melhorar minha técnica e postura.", points: { jazz: 3, ballet: 2, contemporaneo: 1, street: 0 } },
            { id: 'C', text: "Quero me expressar e sentir a música.", points: { contemporaneo: 3, jazz: 2, heels: 1, street: 0 } },
            { id: 'D', text: "Quero me divertir e fazer amigos.", points: { kpop: 3, ritmos: 2, street: 1, jazz: 0 } },
        ]
    },
    {
        id: 2,
        question: "Qual sua vibe musical preferida?",
        options: [
            { id: 'A', text: "Hip Hop, Rap e Batidas Fortes", points: { street: 3, heels: 1, kpop: 1 } },
            { id: 'B', text: "Pop Internacional & Divas", points: { jazz: 2, heels: 3, kpop: 1 } },
            { id: 'C', text: "K-Pop e Músicas Asiáticas", points: { kpop: 3, street: 1 } },
            { id: 'D', text: "Brasilidades e Funk", points: { ritmos: 3, street: 1 } },
        ]
    },
    {
        id: 3,
        question: "Você já dançou antes?",
        options: [
            { id: 'A', text: "Nunca, sou travado(a)!", points: { ritmos: 2, street: 1 } }, // Iniciantes
            { id: 'B', text: "Arrisco uns passinhos em festa.", points: { street: 2, kpop: 2 } },
            { id: 'C', text: "Já fiz aula quando criança.", points: { jazz: 2, ballet: 2 } },
            { id: 'D', text: "Sim, danço sempre!", points: { heels: 2, contemporaneo: 2 } },
        ]
    }
];

export const RESULTS: Record<string, { title: string, description: string, image: string }> = {
    street: {
        title: "STREET DANCE / URBAN",
        description: "Você tem a energia das ruas! O Street Dance é perfeito para você soltar o corpo, ganhar confiança e curtir batidas pesadas.",
        image: "/images/quiz-street.jpg"
    },
    jazz: {
        title: "JAZZ / CONTEMPORÂNEO",
        description: "Sua alma pede técnica e expressão. O Jazz vai trabalhar suas linhas, giros e a emoção de dançar.",
        image: "/images/quiz-jazz.jpg"
    },
    kpop: {
        title: "K-POP",
        description: "Você nasceu para ser Idol! O K-Pop na XPACE é pura diversão, coreografia e comunidade.",
        image: "/images/quiz-kpop.jpg"
    },
    ritmos: {
        title: "RITMOS & FIT",
        description: "Alegria e movimento! Aulas dinâmicas para suar, sorrir e aprender diversos estilos.",
        image: "/images/quiz-ritmos.jpg"
    },
    heels: {
        title: "HEELS (DANÇA DE SALTO)",
        description: "Poder e sensualidade. O Heels vai despertar sua confiança e postura.",
        image: "/images/quiz-heels.jpg"
    },
    ballet: {
        title: "BALLET CLÁSSICO",
        description: "A base de tudo. Elegância, postura e disciplina para quem busca a perfeição do movimento.",
        image: "/images/quiz-ballet.jpg"
    },
    contemporaneo: {
        title: "CONTEMPORÂNEO",
        description: "Liberdade e fluidez. Uma dança que conecta corpo e mente de forma profunda.",
        image: "/images/quiz-contemp.jpg"
    }
};
