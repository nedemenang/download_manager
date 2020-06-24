# STEARS MOVIE DOWNLOADER
## PROJECT DESCRIPTION
This is a simple application that demonstrates knowledge of the following technologies:
* ReactJs
* NestJS
* Docker and Docker-compose
* Queue and Websockets
* MongoDB and Mongoose

It is a simple application with two endpoints:
* *POST*: `/downloads`
  * *Body*: `{"url": "http://www.example.com/free-movie.mp4"}`
* *GET*: `/downloads`
  * *Response* : `{
  "items": [
        {
            "id": "5ed95b7db3e38300128cd81e",
            "url": "http://www.example.com/free-movie.mp4",
            "status": "done",
            "updatedAt": "2020-06-05T02:02:39.971Z"
        },
        {
            "id": "5ed96ebeab92250012d0a760",
            "url": "http://www.example.com/free-movie.mp4",
            "status": "done",
            "updatedAt": "2020-06-04T21:59:26.171Z"
        }]
        }`

## RUNNING THE PROJECT
To run the project you must have `Docker` and `Docker-Compose` installed on your system.
Open a terminal and navigate to the root directory of the project. Run the following command:
* `docker-compose up`

Open a browser and place this address on your address bar:
* `http://localhost:3000/`

You can also interact with the api by using postman and hitting the `http://localhost:4000/downloads/` address for both `GET` and `POST` requests.




