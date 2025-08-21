# wandy-s

## ClassCardsApp

O componente `ClassCardsApp` utiliza reconhecimento de voz para identificar
comandos no formato "nome cor" e, ao reconhecer com sucesso, envia uma
requisição `POST /api/cards` para registrar um cartão entregue. Em caso de
sucesso ou erro na chamada, uma mensagem de feedback é exibida na interface.