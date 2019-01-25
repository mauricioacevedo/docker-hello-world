# Docker Hello World app

My first docker test: a simple hello world app using nodejs and express.

## Docker notes
1. You should always need to have in your project a Dockerfile "file" describing the actions that must be executed to assemble an image.

2. To create an image, with name: docker-hello-world, you run:
```   docker image build -t docker-hello-world ```

3. To run an image you can use:
```   docker run -it -p 9000:3000 docker-hello-world ```
   Where 9000 is the external port on the docker container, 3000 is the internal port used by the app (kinda tunneling) and docker-hello-    world is the name of the image to run.

4. To push the image to docker-hub you need to tag first your image with your username on docker hub to be able to push it to the server:
```   docker tag image-name dockerhubusername/image-name ```
   After this you can push the image to the server:
```   docker push dockerhubusername/image-name ```
   Before pushing you should be logged in into the server, if you have login issues use this command before interaction with docker hub:
```   docker login ```
