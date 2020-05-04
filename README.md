# Crawler Mercado Livre

## 1 - Para rodar o projeto, execute os comandos no diretório do projeto

`npm install`

`npm start` para iniciar a API

OU

`npm test` para rodar alguns testes

## 2 - Realizando a requisição

Por padrão a API está configurada para rodar na porta 3000, porém isso pode ser alterado no arquivo *.env*

Deve ser enviado um POST para o seguinte endpoint: `localhost:3000/crawler/mercado-livre/products` com um corpo de requisição semelhante a este:

```json
{
	"search": "d&d 5e master guide",
	"limit": 10
}
```

Onde `search` deve ser uma *string* referente ao nome do produto buscado. E `limit` deve ser um inteiro maior que 0. 

**OBS: Se pelo menos um dos valores for *falsy*, a API retornará um código HTTP 400 informando o problema no corpo da requisição**