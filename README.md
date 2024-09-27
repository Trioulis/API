This repo contains a basic javascript file that uses a local port to connect to Postman Agent. It allows the user to create a server to post CRUD requests for the schema and update the changes locally in MongoDB. To set up your computer, first open the command line, navigate to the directory ```/.../myapi``` , install the necessary packages by running ```sudo apt install nodejs npm```. If you are using the Windows command line, you need to [visit the node.js download page](https://nodejs.org/en) and follow the instructions. To start the server, run ```node index.js```. The server can be automatically updated without having to restart if it is launched with the command ```npx nodemon index.js```

Τώρα χρειάζεται να ανανεώσουμε το Schema και τα Routes για οποιαδήποτε προσθήκη συλλογών.

