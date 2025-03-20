import { WebSocketServer } from "ws";

const PORT = process.env.PORT ?? 8080;

const server = new WebSocketServer({ port: PORT });

server.on("connection", (ws) =>{
    console.log("New connection:", server.clients.size)

    ws.on("message", (message) => {
        console.log(`Received message from the client: ${message}`); //string interpolation, hvis ikke ville det blive sendt som binær data

        server.clients.forEach((client) => { //get all clients connected to the ws server
            client.send(String(message)); //send the mesage
        });

    });


    ws.on("close", () => {
        console.log("Client disconnected:", server.clients.size);
    });
});


