<a name="readme-top"></a>
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend">
    <img src="https://github.com/KelvinCYDev/marvelous_todo_kelvin_frontend/blob/main/assets/screenshot.png" alt="Logo">
  </a>

  <h3 align="center">Marvelous V2.0 To-Do Backend</h3>

  <p align="center">
    A simple To-Do app!
    <br />
    <br />
    ·
    <a href="https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Combined with https://github.com/KelvinCYDev/marvelous_todo_kelvin_frontend, this is a simple full-stack todo app with the following features:

- User can create, update, and delete each To Do tasks.
- Both lists are alphabetically sorted
- User can check and uncheck tasks. The tasks will appear in the corresponding columns ('To Do', 'Done')
- The 'To Do' list is unlimited
- The 'Done' list only shows 10 most recently completed tasks
- Users can select the auto syncing period for the ToDo list (5 sec, 15 seconds, 30 seconds, 1 minute)
- As the user enters text in the search box, both columns are filtered to display only tasks matching the text entered thus far
- User can delete all the tasks at once by pressing 'Delete all tasks'

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Nodejs][Nodejs]][Nodejs-url]
- [![Expressjs][Expressjs]][Expressjs-url]
- [![MongoDB][MongoDB]][MongoDB-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, please follow the following steps.

### Prerequisites

- Docker and Docker Compose

  ```sh
  Please refer to https://docs.docker.com/get-docker/
  ```

- yarn

  ```sh
  npm install npm@latest -g
  npm install --global yarn
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend.git
   ```

2. Copy .env file from .env.example and make changes if needed

   ```sh
   cp .env.example .env
   ```

3. Docker compose up. Both the API server and MongoDB will be ready

   ```sh
    docker compose up -d
   ```

4. To test the project with mocha and chai

   ```sh
   yarn test
   ```

5. This is just the backend, the frontend part is here:

   ```sh
   https://github.com/KelvinCYDev/marvelous_todo_kelvin_frontend
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

The REST API usage is described below.

### Get a list of To-Do tasks

```sh
'GET /'
```

```sh
 {
    "todo": [
        {
            "_id": "64c62615ff3bf83770958fad",
            "text": "Task 1",
            "done": false,
            "createdAt": "2023-07-30T08:57:57.526Z",
            "updatedAt": "2023-07-30T08:57:57.526Z",
            "__v": 0
        }
    ],
    "todoDone": [
        {
            "_id": "64c62617ff3bf83770958fb0",
            "text": "Task 2",
            "done": true,
            "createdAt": "2023-07-30T08:57:59.523Z",
            "updatedAt": "2023-07-30T08:58:03.567Z",
            "__v": 0
        }
    ]
}
```

### Save a new To-Do task

```sh
'POST /save'

{
   "text": "Task B"
}
```

```sh
{
    "_id": "64c603d76a157c1e54f45039",
    "text": "Task B",
    "done": false,
    "createdAt": "2023-07-30T06:31:51.229Z",
    "updatedAt": "2023-07-30T06:40:51.885Z",
    "__v": 0
}
```

### Update a To-Do task

```sh
'PUT /save'

{
   "_id": "64c603d76a157c1e54f45039",
   "text": "Task B",
    "done": false
}
```

```sh
{
    "_id": "64c603d76a157c1e54f45039",
    "text": "Task B",
    "done": false,
    "createdAt": "2023-07-30T06:31:51.229Z",
    "updatedAt": "2023-07-30T06:40:51.885Z",
    "__v": 0
}
```

### Delete a To-Do task

```sh
'POST /delete'

{
   "_id": "64c603d76a157c1e54f45039",
}
```

### Delete all To-Do tasks

```sh
'DELETE /delete'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Connect a local docker MongoDB database with Mongoose
- [x] Develop CRUD APIs for ToDo tasks
- [x] Dockerize the API server with MongoDB
- [x] Unit test using mocha and chai

See the [open issues](https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kelvin - kelvincyca@gmail.com

Project Link: [https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend](https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/KelvinCYDev/marvelous_todo_kelvin_frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KelvinCYDev/marvelous_todo_kelvin_frontend.svg?style=for-the-badge
[forks-url]: https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/network/members
[stars-shield]: https://img.shields.io/github/stars/KelvinCYDev/marvelous_todo_kelvin_frontend.svg?style=for-the-badge
[stars-url]: https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/KelvinCYDev/marvelous_todo_kelvin_frontend.svg?style=for-the-badge
[issues-url]: https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/issues
[license-shield]: https://img.shields.io/github/license/KelvinCYDev/marvelous_todo_kelvin_frontend.svg?style=for-the-badge
[license-url]: https://github.com/KelvinCYDev/marvelous_todo_kelvin_backend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kelvincylau
[product-screenshot]: images/screenshot.png
[Nodejs]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[Expressjs]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Expressjs-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
