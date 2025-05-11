##  HTTP status codes decentes

status codes é uma forma muito legal do programado dizer o que está acontecendo


### 2xx – Sucesso
| Código | Nome           | Quando Usar                                         |
|--------|----------------|------------------------------------------------------|
| 200    | OK             | Requisição bem-sucedida com retorno de dados        |
| 201    | Created        | Recurso criado com sucesso (POST geralmente)        |
| 202    | Accepted       | Requisição aceita, mas processamento assíncrono     |
| 204    | No Content     | Sucesso sem conteúdo de retorno (ex: DELETE)        |

### 4xx – Erro do Cliente
| Código | Nome            | Quando Usar                                          |
|--------|-----------------|-------------------------------------------------------|
| 400    | Bad Request      | Dados inválidos ou malformados                       |
| 401    | Unauthorized     | Usuário não autenticado                              |
| 403    | Forbidden        | Usuário autenticado mas sem permissão                |
| 404    | Not Found        | Rota ou recurso não encontrado                       |
| 409    | Conflict         | Conflito de estado (ex: registro duplicado)          |

### 5xx – Erro do Servidor
| Código | Nome                  | Quando Usar                                     |
|--------|-----------------------|--------------------------------------------------|
| 500    | Internal Server Error | Algo quebrou no backend (exceção, falha grave)  |
| 502    | Bad Gateway           | Proxy/microservice respondeu errado             |
| 503    | Service Unavailable   | Sistema fora do ar ou em manutenção             |