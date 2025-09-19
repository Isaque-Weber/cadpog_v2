# CADPOG - Catedral das Assembléias de Deus, Deus de Poder e Glória

Este é o site da igreja CADPOG, uma igreja unida, que busca conectar pessoas a Deus e umas às outras.

## Sobre o Projeto

O site da CADPOG é uma plataforma para membros e visitantes se conectarem com a igreja. Ele fornece informações sobre a igreja, seus ministérios, eventos e congregações. Os usuários também podem enviar pedidos de oração, fazer ofertas e entrar em contato com a equipe da igreja.

## Tecnologias

*   [Next.js](https://nextjs.org/) - Framework React para produção
*   [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário
*   [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática
*   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para design rápido e responsivo
*   [Nodemailer](https://nodemailer.com/) - Módulo para envio de e-mails em Node.js

## Começando

Para executar o projeto localmente, siga estas etapas:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/cadpog_v2.git
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

    ```
    # Configurações do servidor SMTP para envio de e-mails
    SMTP_HOST="smtp.example.com"
    SMTP_PORT=587
    SMTP_USER="user@example.com"
    SMTP_PASS="password"
    
    NODE_ENV=development
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
