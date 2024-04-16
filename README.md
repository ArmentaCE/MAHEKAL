
  # CRM Mahekal

  CRM Mahekal es una API RESTful diseñada para la gestión de anomalías dentro del Hotel Mahekal con la capacidad de dar seguimiento a cada una de ellas, buscando eficientar la productividad de los colaboradores dando como resultado una mejor experiencia a los huéspedes.




  ### Objetivos

  * Automatizar el registro.
  * Agiliza la asignación.
  * Optimizar tiempos de respuesta.

  ## Tecnologías implementadas

  **Client:** React, TailwindCSS

  **Server:** Node, Express

  **Data Base:** MongoDB

  ## Instalación

  `Clonar` el repositorio 

  ```bash
    git clone https://github.com/ArmentaCE/mahekal
  ```

  `Instalación` de dependencias de `backend`

  ```bash
    npm install
  ```
  `Instalación` de dependencias de `frontend`

  ```bash
    cd client
    npm install
  ```

  ## Ejecución del programa

  `Script` de ejecución de `backend`

  ```bash
    // Entorno de desarrollo
    npm run dev

    // Entorno de servidor
    npm run start
  ```
  `Script` de ejecución de `frontend`

  ```bash
    cd client

    // Entorno de desarrollo
    npm run start

    // Entorno de producción
    **Construir version de producción**
    npm run build

    serve -s build //Acceso en localhost:3000
  ```


  # Peticiones a users 

  #### **Peticiones POST**

  #### Login

  ```http
    POST /api/auth/signin
  ```

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `userName` | `string` | **Required**. userName |
  | `password` | `string` | **Required**. password |

  Petición POST para hacer Login

  #### Signup

  ```http
    POST /api/auth/signup
  ```

  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | `name` | `string` | **Required**. name |
  | `lastname` | `string` | **Required**. lastname |
  | `userName` | `string` | **Required**. userName |
  | `password` | `string` | **Required**. password |
  | `role` | `string` | **Required**. role |
  | `department` | `string` | **Required**. department |

  Petición POST para hacer un nuevo registro de usuario

  #### Logout

  ```http
    POST /api/auth/logout
  ```

  Petición POST para hacer Logout

  #### **Peticiones GET**

  `:id` hace referencia al id de usuario, ejemplo: `/api/users/getUser/1`

  #### Signup

  ```http
    GET /api/auth/signup
  ```

  Petición GET que responde una array de objetos con los nombres de los departamentos.

  #### Get all users

  ```http
    GET /api/users/get-allUsers
  ```

  Petición GET que responde una array de objetos con todos los usuarios.

  #### Get user by Id to modify

  ```http
    GET /api/users/getUserToModify/:id
  ``` 

  Petición GET que obtiene datos del usuario buscado por id e información adicional.


  ```json
  {
      "userFound": {
          // Datos del usuario
          "role": {
            // Id y nombre de rol del usuario buscad por id
          },
          "department": {
            // Id y nombre de departamento del usuario buscad por id
          }
      },
      "departmentList": [
          // Lista de departamentos
      ],
      "rolesList": [
          // Lista de roles
      ]
  }
  ```

  #### Get user by Id

  ```http
    GET /api/users/getUser/:id
  ```

  Petición GET que obtiene datos del usuario buscado por id y listado de tickets asignados a el.

  ```json
  {
      "ticketsForUser": [
          {
              // Datos de cada ticket asignado a el
          }
      ],
      "userFound": {
          // Nombre del usuario buscado por id
      }
  }
  ```

  #### **Peticiones PUT**

  #### Update user

  ```http
    PUT /api/users/update-user/:id
  ```

  Petición PUT para actualizar datos de usuario por id

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `userName` | `string` | **Required**. userName |
  | `role` | `id` | **Required**. role |
  | `department` | `id` | **Required**. department |

  #### Update password

  ```http
    PUT /api/users/update-password/:id  
  ```

  Petición PUT para actualizar contraserña de usuario por id

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `password` | `string` | **Required**. password |


  #### **Peticiones DELETE**

  #### Delete user by id

  ```http
    DELETE /api/users/deleteUser/:id
  ```

  Petición DELETE para eliminar usuario por id

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `password` | `string` | **Required**. password |

  # Peticiones a tickets

  #### **Peticiones POST**

  #### Nuevo ticket

  ```http
    POST /api/tickets/add-ticket
  ```

  Petición POST para agregar un nuevo ticket

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `title` | `string` | **Required**. title |
  | `priority` | `string` | **Required**. priority |
  | `assignedDepartment` | `string` | **Required**. assignedDepartment |
  | `roomOrArea` | `string` | **Required**. roomOrArea |
  | `description` | `string` | **Required**. description |
  | `imageURL` | `string` | **Required**. imageURL |

  #### **Peticiones GET**

  `:id` hace referencia al id de ticket, ejemplo: `/api/tickets/ticket/1`

  #### Nuevo ticket

  ```http
    GET /api/tickets/add-ticket
  ```

  Petición GET que trae listado de departamentos y usuario que hace la acción.

  ```json
  {
      "departments": [
          {
            // Objetos que obtiene id y nombre de departartamento
          },
      ],
      "userFound": {
        // Datos de usuario logeado
      }
  }
  ```

  #### Obtener `todos` los tickets

  ```http
    GET /api/tickets/tickets
  ```

  Petición GET que trae listado de todos los tickets

  ```json
  [
      {
          // Datos de cada ticket
      },
  ]
  ```

  #### Obtener todos los tickets `nuevos`

  ```http
    GET /api/tickets/new-tickets
  ```

  Petición GET que trae listado de todos los tickets nuevos

  ```json
  [
      {
          // Datos de cada ticket
      },
  ]
  ```

  #### Obtener todos los tickets `en curso`

  ```http
    GET /api/tickets/progress-tickets
  ```

  Petición GET que trae listado de todos los tickets en curso

  ```json
  [
      {
          // Datos de cada ticket
      },
  ]
  ```

  #### Obtener todos los tickets `resueltos`

  ```http
    GET /api/tickets/resolved
  ```

  Petición GET que trae listado de todos los tickets resueltos

  ```json
  [
      {
          // Datos de cada ticket
      },
  ]
  ```

  #### Obtener todos los tickets `en pausa o revisión`

  ```http
    GET /api/tickets/pause-or-review
  ```

  Petición GET que trae listado de todos los tickets en pausa o revisión

  ```json
  [
      {
          // Datos de cada ticket
      },
  ]
  ```

  #### Obtener ticket `por id`

  ```http
    GET /api/tickets/ticket/:id
  ```

  Petición GET que trae un ticket por id

  ```json
  [
      {
          // Datos del ticket
      }
  ]
  ```

  #### **Peticiones PUT**

  `:id` hace referencia al id de ticket, ejemplo: `/api/tickets/reassignTicket/1`

  #### Reasignar ticket

  ```http
    PUT /api/users/deleteUser/:id
  ```

  Petición DELETE para eliminar usuario por id

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `priority` | `string` | **Required**. priority |
  | `status` | `string` | **Required**. status |
  | `assignedTo` | `id` | **Required**. assignedTo |
  | `ejecutionTime` | `number` | **Required**. ejecutionTime |

  # Peticiones a departamentos

  #### **Peticiones POST**

  #### Agregar nuevo departamento

  ```http
    POST /api/departments/add-department
  ```

  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | `name` | `string` | **Required**. name |

  Petición POST para agregar un nuevo departamento

  #### **Peticiones GET**

  `:id` hace referencia al id de departamento, ejemplo: `/api/departments/tickets-department/1`

  #### Obtener `todos` los departamentos

  ```http
    GET /api/departments/add-department
  ```

  Petición GET que trae el listado de todos los departamentos

  ```json
  [
      {
        // Id, nombre, total de colaboradores y total de tickets de departamento
      },
  ]
  ```

  #### Obtener `tickets` por `id` de `departamento`

  ```http
    GET /api/departments/tickets-department/:id
  ```

  Petición GET que trae el listado de todos los tickets de departamento

  ```json
  [
      {
        // Datos de cada ticket
      },
  ]
  ```

  #### Obtener `colaboradores` por `id` de `departamento`

  ```http
    GET /api/departments/colaborators-department/:id
  ```

  Petición GET que trae el listado de todos los tickets de departamento

  ```json
  {
      "onlineColaborators": [
        {
          // Datos de colaborador online
        }
      ],
      "offlineColaborators": [
          {
          // Datos de colaborador online
          }
      ],
      "onlineCount": 0, // Contador de colaboradores online
      "offlineCount": 0 // Contador de colaboradores offline
  }
  ```

  # Peticiones a roles

  #### **Peticiones GET**

  #### Obtener `todos` los `roles`

  ```http
    GET /api/roles/get-roles
  ```

  Petición GET que obtiene todos los roles

  # Entorno de producción con docker

  #### **Construcción de imágenes**

  Imagen de `backend`.

  ```bash
    docker build -t [nombreImagen]:[etiqueta] .
  ```

  #### Imagen de `frontend` (comandos para servidor linux).

  `Instalar` dependencias 

  ```bash
    cd client

    npm install
  ```

  `Crear` documento `.env.production`


  ```bash
    touch .env.production
  ```

  `Agregar` variable de entorno en el archivo.

  ```bash
    nano .env.production

    REACT_APP_BACKEND_URL="http://[dirección ip del host]:4000/api"
  ```

  `Construit` versión de producción de proyecto REACT

  ```bash
    npm run build
  ```

  `Construir` imagen

  ```bash
    docker build -t [nombreImagen]:[etiqueta] .
  ```

  #### **Ejecución de docker compose**

  Se debe estar en la `carpeta raíz`

  ```bash
    docker compose up
  ```

  Para `detener` la ejecución de los contenedores:

  ```bash
    docker compose down
  ```

  En `versiones` posteriores de `imagenes` con modificaciones nuevas en el archivo `docker-compose.yml`

  ```yml
  services: 
    frontend:
      image: Última versión de imágen
      ports:
        - "3000:3000" 
      depends_on:
        - backend 
      
    backend:
      image: Última versión de imágen 
      ports: 
        - "4000:4000" 
      environment:
        - PORT=4000
        - DB=mongodb://mongo:27017/mahekal
      depends_on:
        - mongo 

    mongo:
      image: mongo:latest 
      ports: 
        - "27017:27017"
      volumes:
      - volume_mahekal:/data/db

  volumes:
    volume_mahekal:
      driver: local
      driver_opts:
        type: none
        device: /home/mahekal/Escritorio/volume_mahekal
        o: bind
  ```
