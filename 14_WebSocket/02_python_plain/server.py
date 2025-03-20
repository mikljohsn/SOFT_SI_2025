import asyncio
from websockets.asyncio.server import serve


async def handle_new_websocket(websocket):
    async for message in websocket:
        print(message)
        await websocket.send(message)

async def main():
    # Start the websocket server
    # Port 8765 would be standard 
    # using 8000 as per uniform course standard
    async with serve(handle_new_websocket, "localhost", 8000) as server:
        await server.serve_forever()


asyncio.run(main())