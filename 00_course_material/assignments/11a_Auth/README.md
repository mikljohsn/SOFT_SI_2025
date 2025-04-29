# 11a Authentication with Firebase documentation

Create your project. This example uses Vite.

![Skærmbillede 2025-04-29 100503](https://github.com/user-attachments/assets/e93a471e-a0cc-4c44-98b1-64d78bfab27c)

Install Firebase for the project:

![Skærmbillede 2025-04-29 100732](https://github.com/user-attachments/assets/7715fdf5-700f-42ef-b52a-9e11e16bc3cd)

Go to console.firebase.google.com and register for Firebase.

When done create a project

![Skærmbillede 2025-04-29 102628](https://github.com/user-attachments/assets/3e0f8778-d1e3-4e1e-b276-08db3251b9a9)

In the homepage register your project as a web app

![Skærmbillede 2025-04-29 103113](https://github.com/user-attachments/assets/12046c53-a975-4158-91f9-de8d6fc5f0af)

Name your web app and go through the motions. Remember to save the Firebase config credentials when prompted.

![Skærmbillede 2025-04-29 102555](https://github.com/user-attachments/assets/9b503594-e99c-44cc-9cea-6c111b2eaf56)

When the web app is created, go to the home page again and go to Authentication and press "get started"

![Skærmbillede 2025-04-29 102644](https://github.com/user-attachments/assets/01c72a51-a835-4e1c-8965-4ef0c3e4adea)

On this page you will have to decide which services you will use for your authentication. This project uses Email/password for simplicity, but there are many options.

![Skærmbillede 2025-04-29 103040](https://github.com/user-attachments/assets/455e09c5-04e0-49e3-8ec7-d09b9439b3d2)

When the Firebase auth setup has completed it is time to write your code.
Since this uses email and password options, there are specific Firebase imports for these.

![Skærmbillede 2025-04-29 102524](https://github.com/user-attachments/assets/ade91c36-cc13-406f-a112-79a1f357d8a6)

Add your config:

![Skærmbillede 2025-04-29 104552](https://github.com/user-attachments/assets/45eb71a7-5d81-4759-ba86-efb7532cdd25)

And write your code:

![Skærmbillede 2025-04-29 102458](https://github.com/user-attachments/assets/b5c47a78-ba1f-4938-a134-63f8aecd1e55)
![Skærmbillede 2025-04-29 102508](https://github.com/user-attachments/assets/0fe42c89-22de-48dc-b3dd-e31d8c8e6639)

Run your project and test it.

![Skærmbillede 2025-04-29 102104](https://github.com/user-attachments/assets/cb4c352e-4945-4a34-89e2-dc6bb38d48d9)

![Skærmbillede 2025-04-29 102129](https://github.com/user-attachments/assets/55c2bbeb-9975-4e5c-8cf9-f8cf53826929)

![Skærmbillede 2025-04-29 102435](https://github.com/user-attachments/assets/7ccfef71-b9f1-4de5-a721-2e9774b2d470)

Verify in the Firebase auth console that user has been created:

![Skærmbillede 2025-04-29 102154](https://github.com/user-attachments/assets/24760c6f-d25b-4b68-9f43-65a1c24f1d73)

Assuming it worked, you are ready to use Firebase Auth in your project.


