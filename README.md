# CADPOG - Catedral das Assembléias de Deus, Deus de Poder e Glória

Este é o site da igreja CADPOG, uma igreja unida, que busca conectar pessoas a Deus e umas às outras.

## Sobre o Projeto

O site da CADPOG é uma plataforma para membros e visitantes se conectarem com a igreja. Ele fornece informações sobre a igreja, seus ministérios, eventos e congregações. Os usuários também podem enviar pedidos de oração, fazer ofertas e entrar em contato com a equipe da igreja.

## Funcionalidades

- **Página Inicial:** Apresenta os principais links de navegação, um banner para cultos online e um resumo sobre a igreja.
- **Congregações:** Lista as congregações com informações de endereço, dirigentes e um mapa interativo para cada uma.
- **Pedido de Oração:** Formulário para que os usuários enviem seus pedidos de oração, que são encaminhados por e-mail para a equipe de intercessão.
- **Fale Conosco:** Formulário de contato para dúvidas e informações gerais.
- **Ofertar:** Página com informações para doações via transferência bancária (TED/DOC) e PIX (com QR Code).
- **Sobre Nós:** Detalhes sobre a história da igreja, sua missão, visão, valores e ministérios.

## Tecnologias

- **[Next.js](https://nextjs.org/):** Framework React para produção.
- **[React](https://reactjs.org/):** Biblioteca JavaScript para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superset de JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS para design rápido e responsivo.
- **[Nodemailer](https://nodemailer.com/):** Módulo para envio de e-mails a partir de Node.js, usado nos formulários de contato e pedido de oração.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones.

## Estrutura do Projeto

- **`src/app`:** Contém as rotas e páginas da aplicação, seguindo o App Router do Next.js.
  - **`api/`:** Endpoints de backend para os formulários.
- **`src/components`:** Componentes React reutilizáveis, como botões, cards e o layout principal (Navbar, Footer).
- **`public`:** Arquivos estáticos, como imagens e ícones.

## Começando

Para executar o projeto localmente, siga estas etapas:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/cadpog_v2.git
    cd cadpog_v2
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env.local` na raiz do projeto. Este arquivo é essencial para o envio de e-mails pelos formulários de "Pedido de Oração" e "Fale Conosco".

    ```env
    # Configurações do servidor SMTP para envio de e-mails
    # (Exemplo usando Gmail, mas pode ser qualquer serviço SMTP)
    SMTP_HOST="smtp.gmail.com"
    SMTP_PORT=587
    SMTP_USER="seu-email@gmail.com"
    SMTP_PASS="sua-senha-de-app"

    NODE_ENV=development
    ```

4.  **Banco de Dados (Opcional):**

    O projeto inclui um arquivo `docker-compose.yml` para subir um container PostgreSQL. Atualmente, o banco de dados não está em uso, mas está disponível para futuras implementações.
    ```bash
    docker-compose up -d
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## Deploy

O projeto está configurado para ser facilmente "deployado" em plataformas como a [Vercel](https://vercel.com/), que oferece integração nativa com projetos Next.js.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.