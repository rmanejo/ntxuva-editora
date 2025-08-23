<<<<<<< HEAD
Ntxuva Editora - Website
Bem-vindo ao repositório do site da Ntxuva Editora, uma editora dedicada a transformar ideias em obras memoráveis. Este projeto é um site com backend em Flask e frontend em React com Tailwind CSS, projetado com um tema roxo, conforme solicitado.
Descrição
O site da Ntxuva Editora apresenta informações sobre a editora, seus serviços, autores, livros, concursos, notícias e formas de contato. Ele é estruturado como uma aplicação de página única (SPA) no frontend, com navegação suave entre seções, e um backend simples que serve o conteúdo estático.
Funcionalidades

Navegação Intuitiva: Barra de navegação com links para as seções: Início, Sobre Nós, Como Publicar, Serviços, Autores, Livros, Concursos, Notícias e Contacto.
Design Responsivo: Estilizado com Tailwind CSS, garantindo boa aparência em dispositivos móveis e desktops.
Tema Roxo: Uso de cores como purple-800 (cabeçalhos e navegação), purple-100 (fundos de seções alternadas) e purple-50 (fundo geral).
Conteúdo Completo:
Início: Apresenta a missão da editora e os tipos de publicações (obras fictícias, não-fictícias, artigos científicos, ensaios).
Sobre Nós: Inclui visão, missão, valores e números (livros publicados, autores, taxa de sucesso).
Como Publicar: Descreve o processo de publicação em 5 etapas, com links para e-mail e WhatsApp.
Serviços: Lista serviços como leitura crítica, revisão, design, registro, publicação e marketing literário.
Autores: Exibe o autor Nunes Cristóvão.
Livros: Apresenta o livro "Cartas de Amor Perdidas".
Concursos: Destaca a Antologia Poética.
Notícias: Seção para novidades (atualmente com placeholder).
Contacto: Fornece e-mail (ntxuvaeditor@gmail.com) e WhatsApp (+258 84 622 6301).
Rodapé: Inclui links para redes sociais (Facebook, Instagram, LinkedIn, TikTok, YouTube) e parceiros (Bantus Publicações, PPSG, Vértice Literário, Ubuntu Educacional).


Links Funcionais: Links de e-mail e WhatsApp estão configurados para ação direta. Links de redes sociais são placeholders (devem ser atualizados com URLs reais).
Backend Simples: Flask serve o arquivo HTML estático, garantindo baixa complexidade e fácil manutenção.

Requisitos

Python 3.8 ou superior
Node.js (não necessário para execução, pois React é servido via CDN)
Navegador moderno (Chrome, Firefox, Edge, etc.)
Conexão à internet (para carregar bibliotecas CDN do React e Tailwind CSS)

Estrutura do Projeto
ntxuva/
├── templates/
│   └── index.html      # Arquivo principal do frontend (React + Tailwind CSS)
├── app.py              # Arquivo principal do backend (Flask)
├── README.md           # Este arquivo
└── venv/               # Ambiente virtual (criado durante a configuração)

Configuração
Siga os passos abaixo para configurar e executar o projeto localmente.
1. Clone o Repositório
Se o projeto estiver em um repositório Git, clone-o:
git clone <https://github.com/rmanejo/ntxuva-editora>
cd ntxuva-editora

Caso contrário, crie a estrutura de pastas manualmente e adicione os arquivos app.py e static/index.html.
2. Crie e Ative o Ambiente Virtual
Crie um ambiente virtual para isolar as dependências:
python -m venv venv

Ative o ambiente virtual:

Windows:
venv\Scripts\activate


Linux/MacOS:
source venv/bin/activate



3. Instale as Dependências
Com o ambiente virtual ativado, instale o Flask:
pip install flask

4. Configure os Arquivos

Certifique-se de que o arquivo index.html está na pasta static/.
Verifique se o arquivo app.py está na pasta raiz do projeto.

5. Execute o Aplicativo
Inicie o servidor Flask:
python app.py

O servidor será iniciado em http://localhost:5000.
6. Acesse o Site
Abra um navegador e vá para:
http://localhost:5000

O site será exibido com todas as seções e funcionalidades descritas.
Personalização

Redes Sociais: Substitua os links placeholders (href="#") na seção de redes sociais no arquivo index.html pelos URLs reais das páginas da Ntxuva Editora.
Conteúdo Dinâmico: Para adicionar notícias ou mais livros/autores, modifique as seções correspondentes no index.html ou integre um banco de dados no backend.
Formulário de Contato: Para adicionar um formulário funcional, implemente uma rota Flask para processar envios de formulários e integre com um serviço de e-mail.
Hospedagem: Para deploy, considere serviços como Heroku, Vercel ou Render, ajustando o app.py para compatibilidade com o ambiente de produção.

Notas

O frontend usa React via CDN, eliminando a necessidade de instalar Node.js localmente.
O site é estático no momento, mas o Flask permite fácil expansão para rotas dinâmicas (ex.: API para notícias ou formulários).
Links de redes sociais e parceiros são placeholders e devem ser atualizados com URLs reais.
Para melhorar a acessibilidade, considere adicionar atributos ARIA às seções de navegação.

Contato
Para dúvidas ou suporte, entre em contato com a Ntxuva Editora:

Email: ntxuvaeditor@gmail.com
WhatsApp: +258 84 622 6301
=======
# ntxuva-editora
>>>>>>> aabce8fea6f3226b5acccaa9adfbc431d8d35a31
