chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchAIQuestion") {
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer TU-APYKEY"
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    {
                        role: "system",
                        content: "Genera una pregunta tipo test con un fragmento de código en Python..."
                    }
                ],
                max_tokens: 300,
                temperature: 0.8
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("✅ Respuesta completa de OpenAI:", data);

            if (!data.choices || data.choices.length === 0) {
                sendResponse({ success: false, error: "Respuesta vacía de OpenAI." });
                return;
            }

            const question = data.choices[0]?.message?.content || "Pregunta no disponible.";
            sendResponse({ success: true, question });
        })
        .catch(error => {
            console.error("❌ Error en la petición a OpenAI:", error);
            sendResponse({ success: false, error: error.message });
        });

        return true; // Mantiene el canal de respuesta asíncrona abierto
    }
});
