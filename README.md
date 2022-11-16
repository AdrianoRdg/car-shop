# Car Shoping Project

Projeto de CRUD de uma API de uma concessionaria, utilizando TypeScript com programação orientada aobjetos e banco de dados não relacional MongoDB, junto da ODM moongose e testes feitos com chai, sinon e mocha.

## Tecnologias utilizadas

- TypeScript
- MongoDB
- Moongose
- Express
- Chai
- Mocha
- Sinon
- Jsonwebtoken

## Orientações

Clone o projeto

```
git clone git@github.com:AdrianoRdg/car-shop.git

```

Após realizar o clone, existem duas maneiras de rodar o projeto, via docker e localmente na maquina.

<details close>
    <summary>Rodando via Docker</summary>
    <br>
    
1. Suba o container

    `docker-compose up -d --build`

2. Abra o terminal do container

    `docker exec -it blogs_api bash`

3. Instale as dependências

    `npm install` 
    
</details>

<details close>
    <summary>Rodando Localmente</summary>
    <br>
    
1. Instale as dependências

    `npm install`
  
</details>


## Utilização de variáveis de ambiente

Na raiz do projeto existe um arquivo chamado .env.exemple, renomeie-o para .env e configure as variáveis de ambiente

```
#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=trybe

```

## Comandos importantes

Após a configuração de variáveis de ambiente, temos os seguintes comandos

- `npm run dev` // Inicia a API
- `npm test:coverage` // Roda os testes de cobertura

## Rotas da API

Após iniciar o servidor, a API deve rodar em uma url parecida com a seguinte: 

    http://localhost:3001


### Rotas de carros

### [POST] /cars

Rota para cadastrar um novo carro no banco de dados, recebendo o seguinte body e retornando o carro cadastrado com o seu ID.

```
  {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
```

### [GET] /cars

Rota que retorna um array com todos os carros cadastrados no banco.

```
  [
    {
      model: "Fiat Uno",
      year: 1963,
      color: "blue",
      buyValue: 3500,
      seatsQty: 4,
      doorsQty: 4,
      _id: "4edd40c86762e0fb12000003"
     },
    {...}
  ]
```

### [GET] /cars/:id

Retorna apenas um carro pelo seu ID.

```
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
 
```

### [PUT] /cars/:id

Rota para atualizar um carro pelo seu ID, recebendo o seguinte body e retornando o body com o carro atualizado.

```
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
```

### [DELETE] /cars/:id

Rota para deletar um carro pelo seu ID, após deletar o carro a rota não retorna nada, apenas o status 204.

### Rotas de motos

### [POST] /motocycle

Rota para cadastrar uma nova moto no banco de dados, recebendo o seguinte body e retornando a moto cadastrada com seu ID.

```
  {
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

### [GET] /motocycle

Rota que retorna um array com todas as motos cadastradas no banco.

```
  [
    {
      _id: "4edd40c86762e0fb12000003",
      model: "Honda CG Titan 125",
      year: 1963,
      color: "red",
      buyValue: 3500,
      category: "Street",
      engineCapacity: 125
    },
    {...}
  ]
```

### [GET] /motocycle/:id

Retorna apenas uma moto pelo seu ID

```
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 1
  }  
```

### [PUT] /motocycle/:id

Rota para atualizar uma moto pelo seu ID, recebendo o seguinte body e retornando o body atualizado.

```
  {
     _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
```

### [DELETE] /cars/:id

Rota para deletar uma moto pelo seu ID, após deletar a moto a rota não retorna nada, apenas o status 204.
