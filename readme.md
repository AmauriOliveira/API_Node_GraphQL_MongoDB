docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

docker run --name DB-postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=amauri32 postgres

## Query e Mutation

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
