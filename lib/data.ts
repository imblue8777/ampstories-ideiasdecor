export interface StoryPage {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    textPosition?: 'top' | 'bottom';
    cta?: {
        text: string;
        url: string;
    };
}

export interface Story {
    slug: string; // Added slug to interface for easier mapping
    title: string;
    publisher: string;
    publisherLogoSrc: string;
    posterPortraitSrc: string;
    pages: StoryPage[];
}

export const stories: Record<string, Story> = {
    'por-que-voce-precisa-de-um-sofa-para-escritorio': {
        slug: 'por-que-voce-precisa-de-um-sofa-para-escritorio',
        title: 'Sofás incríveis para escritório',
        publisher: 'Ideias Decor',
        publisherLogoSrc: '/vercel.svg',
        posterPortraitSrc: '/images/office-reception.png',
        pages: [
            {
                id: 'cover',
                imageSrc: '/images/office-reception.png',
                title: 'Escritório monótono? Nunca mais!',
                description: 'Descubra como um simples móvel pode transformar completamente o seu ambiente de trabalho.',
                textPosition: 'bottom',
            },
            {
                id: 'reception',
                imageSrc: '/images/office-reception.png',
                title: 'Seus clientes vão amar esperar aqui',
                description: 'A primeira impressão é a que fica. Garanta conforto e estilo logo na entrada.',
                textPosition: 'top',
                cta: {
                    text: 'Ver Ideias de Recepção',
                    url: 'https://www.ideiasdecor.com/sofa-para-escritorio/'
                }
            },
            {
                id: 'collaborative',
                imageSrc: '/images/collaborative-space.png',
                title: 'Criatividade em conjunto',
                description: 'Espaços colaborativos com sofás modulares incentivam a troca de ideias e o trabalho em equipe.',
                textPosition: 'bottom',
            },
            {
                id: 'breaktime',
                imageSrc: '/images/office-break-room.png',
                title: 'O segredo para uma equipe mais feliz',
                description: 'Uma pausa de qualidade aumenta a produtividade. Crie o espaço perfeito para descomprimir.',
                textPosition: 'top',
            },
            {
                id: 'executive',
                imageSrc: '/images/executive-office.png',
                title: 'Elegância que impõe respeito',
                description: 'Para a sala da diretoria, nada supera a imponência e o requinte de um belo sofá de couro.',
                textPosition: 'bottom',
                cta: {
                    text: 'Inspire-se Agora',
                    url: 'https://www.ideiasdecor.com/sofa-para-escritorio/'
                }
            },
        ]
    },
    'tapetes-de-croche-tendencia-que-nunca-morre': {
        slug: 'tapetes-de-croche-tendencia-que-nunca-morre',
        title: 'Tapetes de crochê: O charme que nunca sai de moda',
        publisher: 'Ideias Decor',
        publisherLogoSrc: '/vercel.svg',
        posterPortraitSrc: '/images/tapetes-de-croche-1.jpg',
        pages: [
            {
                id: 'cover',
                imageSrc: '/images/tapetes-de-croche-1.jpg',
                title: 'Por que todo mundo ama tapetes de crochê?',
                description: 'Descubra o segredo dessa peça atemporal que traz aconchego para qualquer lar brasileiro.',
                textPosition: 'bottom',
            },
            {
                id: 'versatility',
                imageSrc: '/images/tapetes-de-croche-2.jpg',
                title: 'Versatilidade sem fim',
                description: 'Da sala ao banheiro, eles se adaptam a qualquer estilo de decoração, do rústico ao moderno.',
                textPosition: 'top',
                cta: {
                    text: 'Ver Modelos Incríveis',
                    url: 'https://www.ideiasdecor.com/tapetes-de-croche/'
                }
            },
            {
                id: 'texture',
                imageSrc: '/images/tapetes-de-croche-3.jpg',
                title: 'Toque de carinho',
                description: 'Feitos à mão, cada ponto carrega história e dedicação, transformando sua casa em um refúgio.',
                textPosition: 'bottom',
            },
            {
                id: 'colors',
                imageSrc: '/images/tapetes-de-croche-4.jpg',
                title: 'Um show de cores',
                description: 'Neutros ou vibrantes? Escolha a paleta que mais combina com a sua personalidade.',
                textPosition: 'top',
            },
            {
                id: 'conclusion',
                imageSrc: '/images/tapetes-de-croche-5.jpg',
                title: 'Sua casa merece esse mimo',
                description: 'Não espere mais para renovar seu ambiente com essa tendência que é puro charme.',
                textPosition: 'bottom',
                cta: {
                    text: 'Confira a Coleção',
                    url: 'https://www.ideiasdecor.com/tapetes-de-croche/'
                }
            },
        ]
    },
    'granito-preto-sao-gabriel-luxo-e-elegancia-no-seu-projeto': {
        slug: 'granito-preto-sao-gabriel-luxo-e-elegancia-no-seu-projeto',
        title: 'Granito Preto São Gabriel: Luxo e Elegância',
        publisher: 'Ideias Decor',
        publisherLogoSrc: '/vercel.svg',
        posterPortraitSrc: '/images/granito-preto-sao-gabriel-1jpg.jpg',
        pages: [
            {
                id: 'cover',
                imageSrc: '/images/granito-preto-sao-gabriel-1jpg.jpg',
                title: 'O segredo das cozinhas de luxo',
                description: 'Conheça o Granito Preto São Gabriel, a pedra que une sofisticação e durabilidade por um preço acessível.',
                textPosition: 'bottom',
            },
            {
                id: 'polido',
                imageSrc: '/images/granito-preto-sao-gabriel-2.jpg',
                title: 'Brilho espelhado',
                description: 'O acabamento polido é perfeito para quem busca modernidade. Ideal para bancadas de cozinha e banheiro.',
                textPosition: 'top',
                cta: {
                    text: 'Saiba Mais Sobre Acabamentos',
                    url: 'https://www.ideiasdecor.com/granito-preto-sao-gabriel/'
                }
            },
            {
                id: 'escovado',
                imageSrc: '/images/granito-preto-sao-gabriel-3.jpg',
                title: 'Textura e segurança',
                description: 'A versão escovada traz um toque rústico e antiderrapante, sendo a escolha certa para pisos elegantes.',
                textPosition: 'bottom',
            },
            {
                id: 'levigado',
                imageSrc: '/images/granito-preto-sao-gabriel-4.jpg',
                title: 'Beleza brutalista',
                description: 'O acabamento levigado oferece um visual fosco e natural, perfeito para projetos industriais e despojados.',
                textPosition: 'top',
            },
            {
                id: 'vantagens',
                imageSrc: '/images/granito-preto-sao-gabriel-5.jpg',
                title: 'Durável e não mancha!',
                description: 'Resistente a riscos e umidade. O melhor custo-benefício para valorizar o seu imóvel.',
                textPosition: 'bottom',
                cta: {
                    text: 'Veja Projetos Inspiradores',
                    url: 'https://www.ideiasdecor.com/granito-preto-sao-gabriel/'
                }
            },
        ]
    },
    'piso-para-banheiro-5-dicas-essenciais-para-nao-errar': {
        slug: 'piso-para-banheiro-5-dicas-essenciais-para-nao-errar',
        title: 'Piso para Banheiro: 5 Dicas Essenciais',
        publisher: 'Ideias Decor',
        publisherLogoSrc: '/vercel.svg',
        posterPortraitSrc: '/images/piso-para-banheiro-1.jpg',
        pages: [
            {
                id: 'cover',
                imageSrc: '/images/piso-para-banheiro-1.jpg',
                title: 'Segurança e beleza no seu banheiro',
                description: 'Escolher o piso ideal vai muito além da estética. Descubra os 5 critérios fundamentais para não errar.',
                textPosition: 'bottom',
            },
            {
                id: 'safety',
                imageSrc: '/images/piso-para-banheiro-2.jpg',
                title: '1. Segurança em primeiro lugar',
                description: 'Evite escorregões! Aposte em modelos antiderrapantes e fuja dos polidos em áreas molhadas.',
                textPosition: 'top',
            },
            {
                id: 'beauty',
                imageSrc: '/images/piso-para-banheiro-3.jpg',
                title: '2. Harmonia visual',
                description: 'Cores claras ampliam espaços pequenos. Quer cor? Use no chão e deixe as paredes neutras.',
                textPosition: 'bottom',
                cta: {
                    text: 'Ver Guia Completo',
                    url: 'https://www.ideiasdecor.com/piso-para-banheiro/'
                }
            },
            {
                id: 'practicality',
                imageSrc: '/images/piso-para-banheiro-4.jpg',
                title: '3. Praticidade na limpeza',
                description: 'Rejuntes menores facilitam a vida. Pisos texturizados disfarçam melhor a sujeira do dia a dia.',
                textPosition: 'top',
            },
            {
                id: 'comfort',
                imageSrc: '/images/piso-para-banheiro-5.jpg',
                title: '4. Conforto e aconchego',
                description: 'Ninguém quer um banheiro gelado. Texturas e elementos amadeirados trazem calor ao ambiente.',
                textPosition: 'bottom',
            },
            {
                id: 'price',
                imageSrc: '/images/piso-para-banheiro-6.jpg',
                title: '5. Preço justo',
                description: 'Do porcelanato ao cerâmico, existem opções incríveis para todos os bolsos sem abrir mão da qualidade.',
                textPosition: 'top',
                cta: {
                    text: 'Confira Opções e Preços',
                    url: 'https://www.ideiasdecor.com/piso-para-banheiro/'
                }
            },
        ]
    }
};

export function getStory(slug: string) {
    return stories[slug] || null;
}

export function getAllStories() {
    return Object.values(stories);
}
