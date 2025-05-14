const exposeeUrl = "https://happy-hoops-admire.loca.lt"; // depends on your Exposee URL
const integratorUrl = "https://true-ideas-wonder.loca.lt"; // depends on your Integrator URL

async function registerHook() {
    try {
        const response = await fetch(exposeeUrl + `/webhooks/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: integratorUrl + `/webhooks/receive`,
                event: "invoice.paid",
            }),
        });
        const data = await response.json();
        console.log("Webhook registered:", data);
    } catch (error) {
        console.error("Error registering webhook:", error);
    }
}

async function pingHook() {
    try {
        const response = await fetch(exposeeUrl + `/ping`, {
            method: "POST",

        });
        const data = await response.json();
        console.log("Ping response:", data);
    } catch (error) {
        console.error("Error pinging webhook:", error);
    }
}

(async () => {
    await registerHook();
    setTimeout(async () => {
        await pingHook();
    }, 5000);
})();