# API Node com GraphQL e MongoDB

![JavaScript Badge](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![NodejsBadge](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![MongoDB Badge](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb)
![Docker Badge](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Firebase Badge](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white)
![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub Badge](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)
![VSCode Badge](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

> Utilizando de nodeJs, apolloServer e javaScript.

## Banco de dados

> Criando um container _mongodb_ no docker

```bash
sudo docker run -d -p 27017:27017 --name graphQl-mongodb -p 28017:28017 -e AUTH=no tutum/mongodb
```

> Ligando o banco

```bash
sudo docker start graphQl-mongodb
```

> Desligando o banco

```bash
sudo docker stop graphQl-mongodb
```

## Query, Mutation e Subscription

> Criar um user

```gql
mutation {
  createUser(
    data: {
      firstName: "Amauri"
      lastName: "Oliveira"
      email: "amauri@oliveira.com"
      active: true
    }
  ) {
    _id
    firstName
    lastName
    email
    active
  }
}
```

> listar todos user

```gql
query {
  users {
    _id
    firstName
  }
}
```

> Listar um user por ID

```gql
query {
  user(id: "600585d8a3bc2a4c446f1c22") {
    fullName
  }
}
```

> Apagar um user por ID

```gql
mutation {
  deleteUser(id: "600585d8a3bc2a4c446f1c22")
}
```

> Alterar um user por ID

```gql
mutation {
  updateUser(
    id: "600585d8a3bc2a4c446f1c22"
    data: {
      firstName: "Amaurii"
      lastName: "Antonio de Oliveira"
      email: "amauri@oliveira.com"
      active: true
    }
  ) {
    _id
    firstName
    lastName
  }
}
```

> Cria um post

```gql
mutation {
  createPost(
    data: {
      title: "titulo"
      content: "conteudo"
      author: "600585d8a3bc2a4c446f1c22"
    }
  ) {
    title
  }
}
```

> Lista todos post e dados de seu autor

```gql
query {
  posts {
    title
    author {
      fullName
    }
  }
}
```

> Subscription e ouvir um evento em tempo real com WebSocket

```gql
subscription {
  userAdded {
    _id
    fullName
  }
}
```
