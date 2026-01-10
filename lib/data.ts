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
    }
};

export function getStory(slug: string) {
    return stories[slug] || null;
}

export function getAllStories() {
    return Object.values(stories);
}
