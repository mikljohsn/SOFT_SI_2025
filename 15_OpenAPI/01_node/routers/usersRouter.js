import {Router} from 'express';

const router = Router(); //this is not a server, but a route. WE usually do app.get, but that creates a server.


let nextId = 4;
const users = [
    {id: 1, name: 'Arne'},
    {id: 2, name: 'Minho'},
    {id: 3, name: 'Charlie'}
]; 

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 */
router.get('/api/users', (req, res) => {
    res.send({data: users}); // dont use res.json, because it automatically sets the json header. send it as json by using {data: users} to send the array
});


/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Returns the users that was created
 * 
 */
router.post('/api/users', (req, res) => {

    const newUser = req.body;
    newUser.id = nextId++;
    users.push(newUser);

    res.send({data: newUser})
});

export default router;