# wandy-s

Aplicação educacional que combina um jogo da memória com um componente experimental de cartões acionados por voz. O objetivo é proporcionar atividades interativas para sala de aula utilizando tecnologias web modernas.

## Jogo da Memória
O jogo apresenta cartas em pares. Clique sobre cada carta para virá-la e tente encontrar seu par correspondente. Quando todas as combinações forem descobertas, a partida termina.

## Cartões por Voz
O componente `ClassCardsApp` utiliza a API de reconhecimento de voz do navegador para escutar comandos no formato "nome cor" (por exemplo, "Maria vermelho"). Ao reconhecer um nome e uma cor, o componente executa a função `giveCard` para distribuir um cartão virtual.

## Requisitos
- Navegador moderno com suporte a JavaScript e reconhecimento de voz (Chrome recomendado).
- Node.js 18 ou superior (necessário apenas para integrar o componente React de cartões por voz).

## Execução / Compilação
### Jogo da Memória
1. Faça o clone deste repositório.
2. Abra `index.html` em um navegador para jogar.

### Cartões por Voz
1. Importe `src/ClassCardsApp.jsx` em um projeto React existente.
2. Instale as dependências do seu projeto (`npm install`).
3. Execute o bundler de sua preferência (`npm start`, `vite dev`, etc.) para testar o componente.

## Contribuição
1. Faça um fork do repositório.
2. Crie uma nova branch descritiva para sua contribuição.
3. Envie um pull request explicando suas alterações.

## Licença
Este projeto está licenciado sob os termos da [licença MIT](LICENSE).

