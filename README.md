# FE-Files

Here are the instructions to use the project.

## Installation

It is necessary to have installed Git and Node.js, preferably version 16.20.2.

Open a terminal, go to the preferred directory, and execute the following command.

```bash
git clone https://github.com/luisalfredosv/fe-files.git
```

We wait for the project to download, after that we navigate to the `fe-files` folder and execute

```bash
npm i
```

## Execution

To install the project dependencies, once the download is finished you can run the project with the following command
Runs the app in the development mode.

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Execution whit Docker

This project can be easily containerized using Docker. Follow these steps to build and run the Docker container:

1. Ensure Docker is running on your machine.
2. Build the Docker image:

```bash
docker-compose build
```

3. Once the image is built successfully, you can start the Docker container:

```bash
docker-compose up
```

This will start the application inside a Docker container, and it will be accessible at <http://localhost:3000>.

4. To stop the container, press Ctrl + C in the terminal where it's running.
