document.addEventListener('DOMContentLoaded', () => {

    const locationsData = {
        escadaPrincipal: { 
            title: 'Entrada', 
            description: 'Ponto inicial do colégio, navegue pelo mapa para conhecer as salas.', 
            image: 'imagens/mapa_inicial.png' 
        },
        sala1A: { 
            title: 'SALA 1°A: Ética e Desafios da IA', 
            description: '| IA como auxiliar na educação financeira. | Planeje-se! O uso da IA na organização dos estudos. | Analogia VS Tecnologia - Má formação do excesso de informação. | Inteligência artificial como ferramenta de alfabetização. | Inclusão na educação com IA. |', 
            image: 'imagens/mapa_sala1A.png' 
        },
        sala1B: { 
            title: 'SALA 1°B: Ética e Desafios da IA', 
            description: '| Inclusão da educação através das libras: comunicação sem barreiras. | IA na correção de redações educacionais. | Iaprendendo: personalização do ensino por meio da IA. | Tutoria e aprendizagem de línguas estrangeiras com IA. | Muita informação, má formação. |', 
            image: 'imagens/mapa_sala1B.png' 
        },
        sala6A: { 
            title: 'SALA 6°A: Jogos e Entretenimento com IA', 
            description: '| Facebook. | Quizzes. | Minecraft. | Tiktok. | Duolingo. | Snapchat. | Civillizalion VI. |', 
            image: 'imagens/mapa_sala6A.png' 
        },
        sala6B: { 
            title: 'SALA 6°B: Jogos e Entretenimento com IA', 
            description: '| Pintando por números. | Minecraft. | Hay Day. | Duolingo. |', 
            image: 'imagens/mapa_sala6B.png' 
        },
        banheiro1: { 
            title: 'BANHEIRO 1', 
            description: 'Banheiro próximo às salas do 7°A e B.', 
            image: 'imagens/mapa_banheiro1.png' 
        },
        sala7A: { 
            title: 'SALA 7°A: Cidades Inteligentes e IoT', 
            description: '| Semáforo acolhedor. | Botão de socorro emergencial. | Faixa de pedestre inteligente. | Totem de coleta de lixo. | Elevador inteligente em áreas públicas. |', 
            image: 'imagens/mapa_sala7A.png' 
        },
        sala7B: { 
            title: 'SALA 7°B: Cidades Inteligentes e IoT', 
            description: '| Calçada inteligente. | Robô no aprendizado de deficientes. | Segurança das cidades inteligentes. | Ponto de ônibus inteligente. | Jardins inteligentes. | IA para agendamento de consultas. |', 
            image: 'imagens/mapa_sala7B.png' 
        },
        sala8A: { 
            title: 'SALA 8°A: IA para saúde e bem-estar', 
            description: '| Uso da impressão 3D na medicina. | IA na saúde mental. | Espelho digital. | Vita: cuidando de você antes do sintoma. | Mecânica robótica na medicina. |', 
            image: 'imagens/mapa_sala8A.png' 
        },
        sala8B: { 
            title: 'SALA 8°B: IA para saúde e bem-estar', 
            description: '| Bio Sintonia - IA que ajusta seu ambiente para sua saúde em tempo real. | A IA no diagnóstico precoce de doenças. | Desenvolvedor de tecnologias assistidas. | IA na assistência de cirurgias robóticas. | IA que controla nanorrobos dentro do corpo. |', 
            image: 'imagens/mapa_sala8B.png' 
        },
        banheiro2: { 
            title: 'BANHEIRO 2', 
            description: 'Banheiro próximo às salas do 9°A e B.', 
            image: 'imagens/mapa_banheiro2.png' 
        },
        sala9A: { 
            title: 'SALA 9°A: Aplicativos com IA no Cotidiano', 
            description: '| IA em saúde. | Fridges.Can. | Alimentação. | Nutrição. |', 
            image: 'imagens/mapa_sala9A.png' 
        },
        sala9B: { 
            title: 'SALA 9°B: Aplicativos com IA no Cotidiano', 
            description: '| Plan & Play. | Study.IA. | Neuro. | Dola: agenda pessoal. |', 
            image: 'imagens/mapa_sala9B.png' 
        },
        sala2A: { 
            title: 'SALA 2°A: Robótica e Automação', 
            description: '| O futuro da indústria automobilística do fordismo a IA. | Natureza Inteligents: Reconhecimento de plantas via app. | No solo ao céu: a nova era da automação. | Automação Agricola: novas tecnologias na lavoura. |', 
            image: 'imagens/mapa_sala2A.png' 
        },
        sala2B: { 
            title: 'SALA 2°B: Robótica e Automação', 
            description: '| Inteligência artificial na irrigação. | EasyMap: localização inteligente e interativa. | TriageBot: humanização e tecnologia na saúde. | A tecnologia na aviação agrícola no combate e no cultivo. |', 
            image: 'imagens/mapa_sala2B.png' 
        },
    };

    const mapImage = document.getElementById('map-image');
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');
    const locationSelect = document.getElementById('location-select'); 

    function updateInfoContent(data) {
        infoTitle.textContent = data.title;
        const description = data.description;

        if (description.includes('|')) {
            infoText.innerHTML = '';
            
            const list = document.createElement('ul');
            
            const topics = description.split('|')
                                    .map(topic => topic.trim())
                                    .filter(topic => topic.length > 0);
            
            topics.forEach(topicText => {
                const listItem = document.createElement('li');
                listItem.textContent = topicText;
                list.appendChild(listItem);
            });
            
            infoText.appendChild(list);
        } else {
            infoText.innerHTML = `<p>${description}</p>`;
        }
    }

    locationSelect.addEventListener('change', () => {
        const targetId = locationSelect.value;
        const targetData = locationsData[targetId];

        if (targetData) {
            mapImage.style.opacity = 0;

            setTimeout(() => {
                mapImage.src = targetData.image;
                mapImage.style.opacity = 1;
                updateInfoContent(targetData);
            }, 200);
        }
    });

    const initialData = locationsData.escadaPrincipal;
    updateInfoContent(initialData);

});