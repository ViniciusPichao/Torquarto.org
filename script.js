





const initialData = [
 
// 1.0 GOVERNANÇA E PLANEJAMENTO
{ id: 1, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Planejamento estratégico", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 5, description: "O trabalho identifica necessidades, organiza recursos, estabelece cronograma e integra todas as equipes. Define objetivos, públicos, prioridades e responsabilidades de acessibilidade desde o início do evento." },
{ id: 2, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Projeto de arquitetura acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 5, description: "Desenvolve soluções arquitetônicas que garantem o acesso, a circulação, a permanência e o uso autônomo dos ambientes. O projeto organiza rotas acessíveis, entradas, desníveis, sanitários, áreas reservadas, infraestrutura de apoio, mobiliário e saídas de emergência." },
{ id: 3, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Execução do projeto de arquitetura acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Implanta no local todas as soluções previstas no projeto de arquitetura acessível. A equipe acompanha montagem, instalações, acabamentos, mobiliário e sinalização para evitar barreiras." },
{ id: 4, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Coordenação geral", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 16, description: "Integra planejamento, fornecedores e equipes responsáveis pelas diferentes frentes de acessibilidade. A coordenação distribui tarefas, acompanha prazos, resolve incompatibilidades e valida entregas." },
{ id: 5, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Definição de fornecedores", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 3, description: "Seleciona empresas e profissionais capacitados para executar os recursos de acessibilidade do evento. O serviço define escopos, requisitos técnicos, prazos, responsabilidades e critérios de qualidade." },
{ id: 6, category: "1.0 GOVERNANÇA E PLANEJAMENTO", name: "Criação do projeto do evento", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 8, description: "Desenvolve a proposta completa do evento incorporando acessibilidade desde a concepção. O projeto reúne objetivos, público, programação, infraestrutura, comunicação, operação, orçamento, cronograma e responsabilidades." },

// 2.0 TREINAMENTO E CAPACITAÇÃO
{ id: 7, category: "2.0 TREINAMENTO E CAPACITAÇÃO", name: "Capacitação de gestores", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 3, description: "A capacitação prepara gestores e lideranças para incorporar acessibilidade às decisões do evento. A capacitação aborda legislação, Desenho Universal, atendimento inclusivo, barreiras, recursos disponíveis e responsabilidades de cada área." },
{ id: 8, category: "2.0 TREINAMENTO E CAPACITAÇÃO", name: "Treinamento da equipe operacional", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 3, description: "Durante um evento ocorrem várias situações e demandas que precisam ser resolvidas com agilidade e coerência. O treinamento prepara as equipes de recepção, produção, segurança, brigada, limpeza e demais equipes que atendem o público. Também apresenta os recursos do evento, as rotas acessíveis, as formas corretas de abordagem e os procedimentos de apoio e emergência." },

// 3.0 COMUNICAÇÃO E DIVULGAÇÃO
{ id: 9, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Coordenação de Design gráfico", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 5, description: "Cria a identidade visual e as peças de comunicação, organiza textos, imagens, pictogramas e hierarquias usando critérios da comunicação acessível e parâmetros da norma ABNT NBR 17225 - que define critérios para tornar sites e aplicações web acessíveis - para facilitar a compreensão de todas as pessoas." },
{ id: 10, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Criação de material digital acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 5, description: "Planeja peças digitais para sites, redes sociais, aplicativos, formulários, mapas e programação. O serviço define estrutura, linguagem simples, contraste, hierarquia, textos alternativos e navegação compreensível, seguindo os parâmetros da norma ABNT NBR 17225." },
{ id: 11, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Produção de material digital acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 5, description: "Produz, finaliza e publica os materiais digitais conforme o projeto de acessibilidade. A equipe insere textos alternativos, legendas, links identificáveis, ordem de leitura e arquivos adequados às tecnologias assistivas." },
{ id: 12, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Criação de material em Braille", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Desenvolve o conteúdo e o projeto gráfico de materiais que utilizarão o sistema Braille. O serviço seleciona informações essenciais, organiza textos, símbolos e elementos táteis e define dimensões adequadas à leitura." },
{ id: 13, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Produção de material em Braille", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 500.0, qty: 2, description: "Produz fisicamente materiais em Braille, como mapas, placas, cardápios, programas e identificações. O processo utiliza impressão, relevo ou gravação apropriados, com revisão por profissional qualificado." },
{ id: 14, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Site acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Produto", unit_price: 500.0, qty: 5, description: "Desenvolve o site do evento para navegação autônoma por diferentes públicos e tecnologias assistivas. O serviço organiza menus, títulos, formulários, imagens, vídeos e links atendendo os parâmetros da norma ABNT NBR 17225 - que define critérios para tornar sites e aplicações web acessíveis." },
{ id: 15, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Certificação digital para sites", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 4, description: "Avalia tecnicamente a acessibilidade do site e sua conformidade com critérios reconhecidos. A análise verifica navegação por teclado, leitores de tela, contraste, formulários, imagens, vídeos, estrutura e linguagem. Busca o Selo de acessibilidade digital da Prefeitura de São Paulo." },
{ id: 16, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Aplicativo acessível (criação e produção)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 10, description: "Cria e produz um aplicativo acessível para consulta da programação, mapas, serviços acessíveis oferecidos no evento. A solução funciona com leitores de tela, ampliação, comandos de voz e navegação por teclado ou gestos – dentro dos parâmetros da norma ABNT NBR 17225, que define critérios para tornar sites e aplicações web acessíveis." },
{ id: 17, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Campanha online e redes sociais (criação)", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 5, description: "Planeja e cria a divulgação online com peças e conteúdos acessíveis para diferentes redes sociais. A campanha utiliza linguagem simples, bom contraste, descrição de imagens, legendas, Libras e audiodescrição dentro dos parâmetros da norma ABNT NBR 17225 - que define critérios para tornar sites e aplicações web acessíveis." },
{ id: 18, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Compra de mídia digital e impulsionamentos", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 500.0, qty: 5, description: "Planeja e contrata anúncios digitais para ampliar o alcance do evento ao público de pessoas com deficiência. O serviço define públicos, canais, formatos, orçamento e período de veiculação." },
{ id: 19, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Assessoria de imprensa", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Organiza o relacionamento com jornalistas e veículos de comunicação para divulgar o evento e suas medidas de acessibilidade. Produz releases, pautas, informações de serviço e orientações para entrevistas." },
{ id: 20, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Produção de vídeos acessíveis", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 10, description: "Produz vídeos que possam ser compreendidos por todas as pessoas. O serviço prevê roteiro acessível, legendas, janela de Libras, audiodescrição e boa leitura das informações na tela." },
{ id: 21, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "E-mail marketing", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 4, description: "Cria mensagens de e-mail claras, organizadas e compatíveis com os parâmetros da norma ABNT NBR 17225. O conteúdo utiliza assunto objetivo, títulos bem estruturados, textos alternativos, links identificáveis e contraste adequado." },
{ id: 22, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Plataforma acessível de inscrições", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Implanta um sistema de inscrições que possa ser utilizado com autonomia por todas as pessoas. A plataforma oferece navegação por teclado, campos identificados, mensagens de erro claras e compatibilidade com leitores de tela de acordo com a ABNT NBR 17225. Formulários digitais de inscrição no site permitem ao participante detalhar suas necessidades com antecedência." },
{ id: 23, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Busca ativa de públicos-alvo", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 4, description: "Aproxima o evento de pessoas com deficiência, organizações, coletivos e outros públicos que enfrentam barreiras de participação. O serviço divulga a programação em canais específicos, promove escuta ativa e identifica necessidades." },
{ id: 24, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Plug-in de Assistividade", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 500.0, qty: 4, description: "Instala e configura uma ferramenta complementar que oferece recursos de apoio à navegação digital. Pode reunir ampliação, contraste, leitura, tradução em Libras ou outros ajustes, conforme a solução adotada." },
{ id: 25, category: "3.0 COMUNICAÇÃO E DIVULGAÇÃO", name: "Fotógrafo", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 3000.0, qty: 1, description: "Realiza o registro fotográfico das pessoas, atividades e recursos de acessibilidade do evento. O profissional trabalha com respeito à diversidade e representação não estereotipada do público." },

// 4.0 INFRAESTRUTURA FÍSICA
{ id: 26, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Criação de cenografia e ambientação", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Concebe cenários e ambientes que combinem identidade visual, conforto e acessibilidade. O projeto organiza circulação, mobiliário, iluminação, comunicação e pontos de interação sem criar obstáculos." },
{ id: 27, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Produção de cenografia e ambientação", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 20, description: "Constrói e instala a cenografia conforme o projeto, preservando rotas, acessos e áreas de permanência. A equipe controla cabos, estruturas, objetos e mobiliário para evitar riscos e barreiras." },
{ id: 28, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Rampas", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Produto", unit_price: 500.0, qty: 6, description: "Instala rampas para vencer desníveis e manter a continuidade da rota acessível. O serviço dimensiona inclinação, largura, patamares, corrimãos, proteção lateral e piso antiderrapante conforme as normas." },
{ id: 29, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Plataforma elevatória", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 20, description: "Fornece e instala equipamento de elevação para superar desníveis onde uma rampa adequada não é possível. O serviço verifica capacidade, dimensões, comandos, segurança e área de aproximação." },
{ id: 30, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Piso tátil", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Metro", unit_price: 200.0, qty: 50, description: "Projeta e instala sinalização tátil de alerta e direcional para orientar pessoas cegas ou com baixa visão. O projeto define percurso, pontos de decisão, obstáculos e mudanças de nível." },
{ id: 31, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Mapa tátil", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 500.0, qty: 6, description: "Cria um mapa tátil que permite compreender a organização dos espaços por meio do tato e da visão. A peça combina relevo, Braille, caracteres ampliados, contraste e legenda." },
{ id: 32, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Central de Acessibilidade (receptivo)", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro²", unit_price: 1000.0, qty: 10, description: "Implanta um ponto de referência para acolhimento, orientação e apoio às pessoas com deficiência. A central informa rotas, programação e serviços, disponibiliza tecnologias assistivas e encaminha demandas às equipes responsáveis." },
{ id: 33, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Banheiro acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 1, description: "Disponibiliza sanitários acessíveis conectados às rotas principais e distribuídos conforme o porte do evento. O serviço garante dimensões, barras, área de transferência, lavatório, acessórios, sinalização e fechamento adequados." },
{ id: 34, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Área reservada", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Metro²", unit_price: 500.0, qty: 20, description: "Organiza espaços reservados com boa visibilidade para pessoas com deficiência e seus acompanhantes. As áreas são conectadas por rota acessível e oferecem segurança, conforto e experiência equivalente à do restante do público." },
{ id: 35, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Sala de Descompressão", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Metro²", unit_price: 2000.0, qty: 10, description: "Implanta um ambiente de acolhimento para pessoas que precisam reduzir estímulos sensoriais. A sala oferece iluminação suave, menor nível de ruído, temperatura confortável e mobiliário seguro." },
{ id: 36, category: "4.0 INFRAESTRUTURA FÍSICA", name: "Sinalização", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Produto", unit_price: 500.0, qty: 4, description: "Planeja e fornece um sistema integrado de orientação, identificação e alerta em todo o evento. As placas utilizam linguagem clara, pictogramas reconhecidos, contraste, tamanho e posicionamento adequados." },

// 5.0 TRANSPORTE E MOBILIDADE
{ id: 37, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Transporte acessível", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 1500.0, qty: 2, description: "Organiza meios acessíveis para a chegada, o deslocamento interno e a saída do evento. O serviço pode incluir ônibus, vans, táxis acessíveis e conexão com transporte público e estacionamentos." },
{ id: 38, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Rota acessível", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Metro", unit_price: 300.0, qty: 20, description: "Implanta um percurso contínuo que conecta entradas, atrações e todos os serviços essenciais do evento. A rota possui superfície firme, regular e antiderrapante, largura adequada, iluminação e sinalização." },
{ id: 39, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Pontos de recarga de bateria (celular e cadeira)", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 200.0, qty: 1, description: "Disponibiliza tomadas e equipamentos para recarga de celulares, cadeiras de rodas motorizadas e outras tecnologias assistivas. Os pontos ficam em locais acessíveis, sinalizados e protegidos." },
{ id: 40, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Kit Livre", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 200.0, qty: 1, description: "Disponibiliza, gratuitamente ou por aluguel, um conjunto de recursos de apoio selecionados conforme o perfil e as necessidades do público. O kit pode reunir itens para mobilidade, comunicação, orientação e conforto." },
{ id: 41, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Estacionamento prioritário", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Vaga", unit_price: 500.0, qty: 5, description: "Reserva e sinaliza vagas próximas às entradas, conectadas a uma rota acessível contínua. O serviço dimensiona áreas de circulação, embarque e desembarque e controla o uso durante o evento." },
{ id: 42, category: "5.0 TRANSPORTE E MOBILIDADE", name: "Oficina de consertos", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 2000.0, qty: 1, description: "Oferece pequenos consertos e ajustes emergenciais em cadeiras de rodas, andadores, bengalas e outros equipamentos de mobilidade, gratuitamente ou por aluguel. A oficina mantém ferramentas, peças básicas e profissional qualificado em área acessível e sinalizada." },

// 6.0 ATENDIMENTO E HOSPITALIDADE
    { id: 43, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Recepcionista inclusiva", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 2, description: "Recepciona, acolhe e orienta o público com respeito às diferentes formas de comunicação e mobilidade. A profissional conhece rotas, serviços e recursos de acessibilidade e oferece ajuda sem retirar a autonomia da pessoa." },
    { id: 44, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Identificação de Deficiências Ocultas", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Unidade", unit_price: 20.0, qty: 100, description: "Disponibiliza, gratuitamente, o Cordão de Girassol para facilitar a identificação das pessoas com deficiência pelas equipes de apoio." },
    { id: 45, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Equipe de apoio em inclusão", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 4, description: "Atua diretamente na orientação e na solução de demandas de acessibilidade durante o evento. A equipe conhece os ambientes, recursos, horários e procedimentos e mantém contato com produção, segurança e atendimento." },
    { id: 46, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Assistente de acessibilidade", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 500.0, qty: 2, description: "Oferece apoio personalizado a participantes que apresentem necessidades específicas de acessibilidade. O profissional auxilia na orientação, comunicação, deslocamento ou uso dos serviços, sempre com consentimento." },
    { id: 47, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Disponibilização de cadeira de rodas", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 50.0, qty: 10, description: "Disponibiliza temporariamente, gratuitamente ou por aluguel, de cadeiras de rodas para uso temporário por participantes com necessidade de apoio à mobilidade. O serviço organiza reserva ou retirada, cadastro, orientação, higienização e devolução dos equipamentos." },
    { id: 48, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Disponibilização de abafadores de som", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 10.0, qty: 20, description: "Disponibiliza temporariamente, gratuitamente ou por aluguel, abafadores de ruído para pessoas com hipersensibilidade auditiva ou que necessitem reduzir estímulos sonoros. O serviço informa onde retirar, como utilizar, higienizar e devolver o equipamento." },
    { id: 49, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Espaço para cão-guia", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro²", unit_price: 500.0, qty: 9, description: "Organiza uma área tranquila e acessível para descanso, hidratação e necessidades do cão-guia. O espaço dispõe de água, recipiente, superfície adequada e condições de higiene, sem restringir a circulação do animal com seu usuário." },
    { id: 50, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Aplicativo de atendimento em Libras", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 2000.0, qty: 2, description: "Disponibiliza atendimento remoto por intérprete de Libras para facilitar a comunicação entre pessoas surdas e as equipes do evento. O aplicativo conecta usuário e atendente por vídeo em celular ou terminal." },
    { id: 51, category: "6.0 ATENDIMENTO E HOSPITALIDADE", name: "Aplicativo de descrição de imagens", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 4000.0, qty: 2, description: "Oferece apoio remoto para descrever imagens, objetos, sinalizações e situações do ambiente a pessoas cegas ou com baixa visão. Por meio da câmera do celular, um atendente ou sistema transmite informações visuais em palavras." },

    // 7.0 CONTEÚDO E EXPERIÊNCIA
    { id: 52, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Indicação de palestrantes e debatedores", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Seleciona palestrantes, artistas, mediadores e debatedores com experiência relevante para a programação. A curadoria amplia a presença de profissionais com deficiência e valoriza diferentes trajetórias, territórios e perspectivas." },
    { id: 53, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Indicação de temas de palestras e debates", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Propõe temas, formatos e conteúdos que qualifiquem o debate sobre acessibilidade, inclusão e diversidade. A curadoria relaciona as atividades ao perfil do público e aos objetivos do evento." },
    { id: 54, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Show inclusivo", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 20.0, qty: 1, description: "Planeja a apresentação para que público, artistas e profissionais com deficiência participem com autonomia. O serviço integra palco, camarins e rotas acessíveis a Libras, legendagem, audiodescrição e recursos sensoriais." },
    { id: 55, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Ativação inclusiva", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Produto", unit_price: 0.0, qty: 1, description: "Cria uma experiência de marca ou atividade interativa acessível desde a entrada até a participação. O projeto considera circulação, alcance, comunicação, comandos, tempo de uso e atendimento. Se o evento tiver ativações elas devem ser acessíveis." },
    { id: 56, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Aplicativo de acessibilidade comunicacional", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 1000.0, qty: 1, description: "Reúne em um único aplicativo informações e recursos de comunicação acessíveis para uso durante o evento. A solução pode integrar mapas, programação, Libras, audiodescrição, legendas e orientações em tempo real." },
    { id: 57, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Conexão de internet", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 1, description: "Fornece conectividade estável para sustentar aplicativos, atendimento remoto, transmissão e tecnologias assistivas utilizadas no evento. O serviço dimensiona cobertura, capacidade, velocidade e pontos de acesso conforme o público e os ambientes." },
    { id: 58, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Captação e transmissão online", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 5950.0, qty: 1, description: "Registra e transmite o evento pela internet com recursos de acessibilidade incorporados. A operação integra imagem e som a legendagem, Libras e audiodescrição quando aplicáveis." },
    { id: 59, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Espaço para sentir o som", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Metro²", unit_price: 300.0, qty: 9, description: "Cria uma área onde pessoas surdas ou com deficiência auditiva podem perceber música e efeitos por vibração. O espaço pode utilizar proximidade controlada das caixas ou equipamentos específicos de transmissão tátil." },
    { id: 60, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Disponibilizar colete ou mochila vibratória", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 400.0, qty: 10, description: "Disponibiliza, gratuitamente ou por aluguel, colete ou mochila vibratória para que pessoas surdas ou com deficiência auditiva possam perceber música por meio de efeitos da vibração." },
    { id: 61, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Audiodescrição", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 2, description: "Transforma em palavras as informações visuais importantes de shows, palestras e demais atrações. Profissionais especializados descrevem cenários, figurinos, movimentos, expressões e mudanças de cena nos intervalos das falas." },
    { id: 62, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Legendagem", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 100.0, qty: 1, description: "Converte falas, músicas e sons relevantes em texto para pessoas surdas ou com deficiência auditiva. Pode ser preparada previamente ou produzida em tempo real e exibida em vídeos, telas ou dispositivos." },
    { id: 63, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Intérprete de Libras", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 500.0, qty: 2, description: "Traduz falas e conteúdo para a Língua Brasileira de Sinais durante palestras, cerimônias, shows e atendimentos. O profissional recebe materiais com antecedência, estuda termos específicos e trabalha em posição visível e bem iluminada." },
    { id: 64, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Guia-intérprete", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Diária", unit_price: 500.0, qty: 2, description: "Apoia a comunicação, a orientação e o deslocamento de pessoas com surdocegueira. O profissional utiliza Libras tátil, fala ampliada, escrita na palma ou outros métodos definidos com o usuário." },
    { id: 65, category: "7.0 CONTEÚDO E EXPERIÊNCIA", name: "Showcase de acessibilidade e tecnologias assistivas", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Indica um espaço para apresentar e experimentar soluções de acessibilidade e tecnologias assistivas. Expositores demonstram recursos de mobilidade, comunicação, orientação e participação." },

    // 8.0 OPERAÇÃO E SEGURANÇA
    { id: 66, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Locação de espaço acessível", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 2000.0, qty: 1, description: "Caso necessite, seleciona e contrata um local capaz de receber o evento com acessibilidade e segurança. A avaliação considera entorno, transporte, entradas, circulação, desníveis, sanitários, palcos, serviços e rotas de fuga." },
    { id: 67, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Brigadista", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 300.0, qty: 2, description: "Em eventos de maior dimensão, o brigadista aua na prevenção e na resposta a emergências, considerando as necessidades das pessoas com deficiência. O profissional conhece rotas acessíveis, áreas reservadas, pontos de encontro e recursos de comunicação." },
    { id: 68, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Criação de plano de evacuação", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 4, description: "Planejar a retirada segura de todas as pessoas em caso de emergência. O plano identifica riscos, rotas de fuga acessíveis, áreas de refúgio, pontos de encontro, equipamentos e responsabilidades." },
    { id: 69, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Ambulatório", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 5000.0, qty: 1, description: "Implanta uma estrutura acessível para primeiros socorros e atendimento médico no evento. O espaço é conectado à rota acessível e possui entrada, circulação, maca, mobiliário e comunicação adequados." },
    { id: 70, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Ambulância", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 1500.0, qty: 1, description: "Disponibiliza veículo e equipe para atendimento e remoção em situações de urgência. O posicionamento mantém acesso livre, rápido e conectado às rotas do evento." },
    { id: 71, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Comunicação de emergência", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 4, description: "Planeja as orientações de emergência por diferentes meios para alcançar todo o público. O sistema combina avisos sonoros, mensagens visuais, sinalização luminosa, Libras e apoio presencial." },
    { id: 72, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Segurança", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Diária", unit_price: 300.0, qty: 6, description: "Organiza a proteção do público com abordagem inclusiva, respeitosa e livre de discriminação. A equipe conhece os recursos de acessibilidade, as rotas e os procedimentos de emergência." },
    { id: 73, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Limpeza", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Diária", unit_price: 200.0, qty: 6, description: "Mantém rotas, sanitários, áreas reservadas e demais ambientes limpos, livres e seguros durante o evento. A equipe recebe orientação para não bloquear passagens com carrinhos, materiais ou resíduos." },
    { id: 74, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Troféus", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 280.0, qty: 10, description: "Cria e produz troféus que possam ser percebidos e utilizados por diferentes pessoas. O projeto considera forma, peso, acabamento, contraste, caracteres legíveis e informações em relevo ou Braille quando pertinentes." },
    { id: 75, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Certificado de participação", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Produto", unit_price: 10.0, qty: 200, description: "Produz certificados claros e acessíveis para comprovar ou reconhecer a participação no evento. A versão digital utiliza texto selecionável, ordem de leitura, contraste e compatibilidade com leitores de tela." },
    { id: 76, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Alimentação", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 40.0, qty: 20, description: "Fornece refeições em balcões, mesas, circulação e atendimento acessíveis à colaboradores e funcionários. O planejamento inclui cardápios legíveis ou digitais, informação sobre ingredientes e apoio quando solicitado." },
    { id: 77, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Coffee Break", badge: "RECOMENDADO", badge_class: "recomendado", selected: false, unit: "Unidade", unit_price: 40.0, qty: 200, description: "Planeja e formece o serviço de alimentos e bebidas nos intervalos com acesso para todos os participantes. A disposição permite aproximação, circulação e alcance dos itens, com mesas em alturas adequadas e identificação clara." },
    { id: 78, category: "8.0 OPERAÇÃO E SEGURANÇA", name: "Brindes e kits promocionais", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Unidade", unit_price: 50.0, qty: 200, description: "Desenvolve e entrega brindes e kits promocionais considerando diversidade, utilidade e facilidade de uso. Embalagens, textos e instruções devem ser legíveis e fáceis de abrir e compreender." },

    // 9.0 AVALIAÇÃO E LEGADO
    { id: 79, category: "9.0 AVALIAÇÃO E LEGADO", name: "Auditoria", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Verifica de forma sistemática se as soluções de acessibilidade foram implantadas e funcionam na prática. A auditoria analisa acesso, circulação, comunicação, atendimento, sanitários, áreas reservadas, conteúdo e segurança." },
    { id: 80, category: "9.0 AVALIAÇÃO E LEGADO", name: "Indicadores de acessibilidade", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Define medidas para acompanhar a qualidade e os resultados da acessibilidade no evento. Os indicadores podem avaliar público atendido, recursos utilizados, ocorrências, tempo de resposta, satisfação e barreiras encontradas." },
    { id: 81, category: "9.0 AVALIAÇÃO E LEGADO", name: "Pesquisas (quantitativa e qualitativa)", badge: "PREMIUM", badge_class: "premium", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Coleta opiniões e dados sobre a experiência de acessibilidade do público e das equipes. A pesquisa combina perguntas objetivas, relatos e entrevistas, em formulários digitais ou atendimento presencial acessível." },
    { id: 82, category: "9.0 AVALIAÇÃO E LEGADO", name: "Relatório final", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 8, description: "Consolida o planejamento, as entregas, os resultados e os aprendizados de acessibilidade do evento. O documento apresenta dados, avaliações, ocorrências, soluções adotadas e recomendações para futuras edições." },

    // 10.0 MONETIZAÇÃO E PATROCÍNIO
    { id: 83, category: "10.0 MONETIZAÇÃO E PATROCÍNIO", name: "Consultor de captação de patrocínio", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 6, description: "Planeja e conduz a busca de recursos financeiros para viabilizar a acessibilidade do evento. O consultor identifica potenciais parceiros, adapta propostas, organiza contatos e acompanha negociações." },
    { id: 84, category: "10.0 MONETIZAÇÃO E PATROCÍNIO", name: "Montagem da Cota Acessibilidade de Patrocínio", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Estrutura uma modalidade de patrocínio dedicada aos recursos e às entregas de acessibilidade do evento. A cota define objetivos, itens financiáveis, contrapartidas, valores, indicadores e formas de exposição da marca." },
    { id: 85, category: "10.0 MONETIZAÇÃO E PATROCÍNIO", name: "Reunião de apresentação do projeto", badge: "ESSENCIAL", badge_class: "essencial", selected: false, unit: "Hora", unit_price: 500.0, qty: 2, description: "Apresenta o projeto de acessibilidade a empresas, instituições e potenciais patrocinadores. A reunião explica objetivos, público, soluções, orçamento, cronograma, contrapartidas e resultados esperados." }


]


// Inicialização do array de serviços com cópia profunda e conversão de tipos:
let servicesData = JSON.parse(JSON.stringify(initialData)).map(item => {
    return {
        ...item,
        selected: Boolean(item.selected), // respeita se está explicitamente true no array, senão fica false
        qty: Number(item.qty) || 0,
        unit_price: Number(item.unit_price) || 0
    };
});

let activeFilter = 'all';
let searchQuery = '';

// Utilitário de Formatação Monetária
const formatCurrency = (val) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    calculateTotals();
    setupEventListeners();
});

function setupEventListeners() {
    // Filtros por Badge/Chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            renderServices();
        });
    });

    // Filtro por Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderServices();
        });
    }

    // Recálculo ao alterar inputs financeiros gerais
    ['comissao-input', 'outras-despesas-input', 'impostos-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculateTotals);
    });

    // Botão Limpar / Reset
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Restaura valores originais do initialData
            servicesData = JSON.parse(JSON.stringify(initialData)).map(item => ({
                ...item,
                selected: false,
                unit_price: Number(item.unit_price) || 0
            }));
            renderServices();
            calculateTotals();
        });
    }
}

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = '';

    // Filtragem dos serviços por categoria/busca
    const filteredData = servicesData.filter(item => {
        const matchesFilter = activeFilter === 'all' || item.badge === activeFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });

    const categories = [...new Set(filteredData.map(item => item.category))];

    if (categories.length === 0) {
        container.innerHTML = '<div class="card"><p style="text-align:center; color: var(--text-secondary);">Nenhum serviço encontrado.</p></div>';
        return;
    }

    categories.forEach(category => {
        const catCard = document.createElement('div');
        catCard.className = 'card';

        const catHeader = document.createElement('div');
        catHeader.className = 'category-header';
        catHeader.innerHTML = `<strong>${category}</strong>`;
        catCard.appendChild(catHeader);

        const itemsInCat = filteredData.filter(item => item.category === category);

        itemsInCat.forEach(item => {
            const row = document.createElement('div');
            row.className = 'item-row';
            
            const qtyDisplayValue = item.qty > 0 ? item.qty : '';

            row.innerHTML = `
                <div class="item-check">
                    <input type="checkbox" id="chk-${item.id}" ${item.selected ? 'checked' : ''}>
                </div>
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    ${item.description ? `<div class="item-desc">${item.description}</div>` : ''}
                </div>
                <div>
                    <span class="badge badge-${item.badge_class}">${item.badge}</span>
                </div>
                <div class="item-price-wrapper">
                    <span class="price-prefix">R$</span>
                    <input type="number" 
                           class="unit-price-input" 
                           id="price-${item.id}" 
                           value="${item.unit_price}" 
                           step="0.01" 
                           min="0">
                    <span class="unit-label">/ ${item.unit}</span>
                </div>
                <div>
                    <input type="number" 
                           class="qty-input" 
                           id="qty-${item.id}" 
                           value="${qtyDisplayValue}" 
                           placeholder="0" 
                           min="0"
                           step="1">
                </div>
                <div class="item-subtotal" id="subtotal-${item.id}">
                    ${formatCurrency(item.selected ? item.unit_price * item.qty : 0)}
                </div>
            `;

            const checkbox = row.querySelector(`#chk-${item.id}`);
            const qtyInput = row.querySelector(`#qty-${item.id}`);
            const priceInput = row.querySelector(`#price-${item.id}`);

            checkbox.addEventListener('change', (e) => toggleItem(item.id, e.target.checked));
            qtyInput.addEventListener('input', (e) => updateQty(item.id, e.target.value));
            priceInput.addEventListener('input', (e) => updateUnitPrice(item.id, e.target.value));

            catCard.appendChild(row);
        });

        container.appendChild(catCard);
    });
}

function toggleItem(id, isChecked) {
    const item = servicesData.find(i => i.id === id);
    if (item) {
        item.selected = isChecked;
        if (isChecked && item.qty === 0) item.qty = 1;
        if (!isChecked) item.qty = 0;

        const qtyInput = document.getElementById(`qty-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);
        
        if (qtyInput) qtyInput.value = item.qty > 0 ? item.qty : '';
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * item.qty : 0);

        calculateTotals();
    }
}

function updateQty(id, qtyValue) {
    const qty = Math.max(0, parseFloat(qtyValue) || 0);
    const item = servicesData.find(i => i.id === id);
    
    if (item) {
        item.qty = qty;
        item.selected = qty > 0;

        const chkInput = document.getElementById(`chk-${id}`);
        const subtotalEl = document.getElementById(`subtotal-${id}`);

        if (chkInput) chkInput.checked = item.selected;
        if (subtotalEl) subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * qty : 0);

        calculateTotals();
    }
}

// Nova função para atualizar o valor monetário da hora/unidade dinamicamente
function updateUnitPrice(id, priceValue) {
    const unitPrice = Math.max(0, parseFloat(priceValue) || 0);
    const item = servicesData.find(i => i.id === id);

    if (item) {
        item.unit_price = unitPrice;

        const subtotalEl = document.getElementById(`subtotal-${id}`);
        if (subtotalEl) {
            subtotalEl.textContent = formatCurrency(item.selected ? item.unit_price * item.qty : 0);
        }

        calculateTotals();
    }
}

function calculateTotals() {
    let essenciais = 0, recomendados = 0, premium = 0;
    let pontosObtidos = 0;
    let pontosTotais = 0;

    servicesData.forEach(item => {
        const subtotal = item.unit_price * item.qty;

        if (item.selected && item.qty > 0) {
            const badgeUpper = (item.badge || '').toUpperCase();
            if (badgeUpper === 'ESSENCIAL') essenciais += subtotal;
            else if (badgeUpper === 'RECOMENDADO') recomendados += subtotal;
            else if (badgeUpper === 'PREMIUM') premium += subtotal;
        }

        const badgeUpper = (item.badge || '').toUpperCase();
        let peso = 0;

        if (badgeUpper === 'ESSENCIAL') peso =  30;
        else if (badgeUpper === 'RECOMENDADO') peso = 20;
        else if (badgeUpper === 'PREMIUM') peso = 10    ;

        if (peso > 0) {
            pontosTotais += peso;
            if (item.selected && item.qty > 0) {
                pontosObtidos += peso;
            }
        }
    });

    const subtotalGeral = essenciais + recomendados + premium;

    const comissaoPct = parseFloat(document.getElementById('comissao-input')?.value) || 0;
    const outrasDespesas = parseFloat(document.getElementById('outras-despesas-input')?.value) || 0;
    const impostosPct = parseFloat(document.getElementById('impostos-input')?.value) || 0;

    const valorComissao = subtotalGeral * (comissaoPct / 100);
    const valorImpostos = subtotalGeral * (impostosPct / 100);
    const valorFinal = subtotalGeral + valorComissao + outrasDespesas + valorImpostos;

    const setElementText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setElementText('total-essenciais', formatCurrency(essenciais));
    setElementText('total-recomendados', formatCurrency(recomendados));
    setElementText('total-premium', formatCurrency(premium));
    setElementText('subtotal-geral', formatCurrency(subtotalGeral));

    setElementText('comissao-valor', formatCurrency(valorComissao));
    setElementText('outras-despesas-valor', formatCurrency(outrasDespesas));
    setElementText('impostos-valor', formatCurrency(valorImpostos));

    setElementText('valor-final', formatCurrency(valorFinal));

    const percentualAcessibilidade = pontosTotais > 0
        ? Math.round((pontosObtidos / pontosTotais) * 100)
        : 0;

    setElementText('accessibility-percentage', `${percentualAcessibilidade}%`);
}