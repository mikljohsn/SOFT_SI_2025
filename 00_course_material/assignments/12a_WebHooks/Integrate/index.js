import express from "express";

const app = express();
app.use(express.json());

app.post("/webhooks/receive", (req, res) => {
    try {
        const { event, data } = req.body;

        if (!event || !data) {
            return res.status(400).send({ error: "Invalid payload" });
        }
        
        console.log(`Received event: ${event}`);
        console.log("Data:", data);

        res.status(200).send({ message: "Webhook received successfully" });
    } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on`, PORT);
});