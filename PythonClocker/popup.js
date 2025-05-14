document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    document.body.style.width = "250px";
    document.body.style.height = "250px";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.overflow = "hidden";

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    function getSpainTime() {
        const now = new Date();
        const spainTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));
        return [spainTime.getHours(), spainTime.getMinutes(), spainTime.getSeconds()];
    }

    const clockFace = document.createElement("div"); // Definimos clockFace

    function updateClockFace() {
        const [currentHour, currentMinute] = getSpainTime();
        clockFace.textContent = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
        setTimeout(updateClockFace, 1000);
    }

    function playAlarm() {
        const alarmSound = new Audio("alarm.mp3");
        alarmSound.loop = true;
        alarmSound.play().catch(error => console.log("Error al reproducir la alarma: ", error));
        return alarmSound;
    }

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.padding = "15px";
    container.style.borderRadius = "12px";
    container.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    container.style.backgroundColor = "#fff";
    container.style.width = "220px";
    container.style.overflow = "hidden";

    clockFace.style.width = "120px";
    clockFace.style.height = "120px";
    clockFace.style.border = "6px solid #9b59b6";
    clockFace.style.borderRadius = "50%";
    clockFace.style.display = "flex";
    clockFace.style.justifyContent = "center";
    clockFace.style.alignItems = "center";
    clockFace.style.fontSize = "24px";
    clockFace.style.color = "#9b59b6";
    clockFace.style.fontWeight = "bold";
    clockFace.style.marginBottom = "10px";
    clockFace.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";
    container.appendChild(clockFace);

    updateClockFace();

    const inputContainer = document.createElement("div");
    inputContainer.style.display = "flex";
    inputContainer.style.justifyContent = "center";
    inputContainer.style.alignItems = "center";
    inputContainer.style.marginBottom = "10px";

    const hourInput = document.createElement("input");
    hourInput.type = "number";
    hourInput.min = 0;
    hourInput.max = 23;
    hourInput.style.padding = "6px";
    hourInput.style.border = "2px solid #9b59b6";
    hourInput.style.borderRadius = "5px";
    hourInput.style.width = "50px";
    hourInput.style.textAlign = "center";
    hourInput.style.fontSize = "16px";
    hourInput.style.marginRight = "5px";

    const minuteInput = document.createElement("input");
    minuteInput.type = "number";
    minuteInput.min = 0;
    minuteInput.max = 59;
    minuteInput.style.padding = "6px";
    minuteInput.style.border = "2px solid #9b59b6";
    minuteInput.style.borderRadius = "5px";
    minuteInput.style.width = "50px";
    minuteInput.style.textAlign = "center";
    minuteInput.style.fontSize = "16px";

    inputContainer.appendChild(hourInput);
    inputContainer.appendChild(document.createTextNode(":"));
    inputContainer.appendChild(minuteInput);
    container.appendChild(inputContainer);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Guardar Hora";
    saveButton.style.padding = "10px 20px";
    saveButton.style.border = "none";
    saveButton.style.borderRadius = "5px";
    saveButton.style.backgroundColor = "#9b59b6";
    saveButton.style.color = "white";
    saveButton.style.fontSize = "16px";
    saveButton.style.cursor = "pointer";
    saveButton.style.transition = "background 0.3s ease";
    container.appendChild(saveButton);

    const countdownDisplay = document.createElement("div");
    countdownDisplay.style.fontSize = "18px";
    countdownDisplay.style.fontWeight = "bold";
    countdownDisplay.style.color = "#9b59b6";
    countdownDisplay.style.marginTop = "10px";

    saveButton.addEventListener("click", function () {
        inputContainer.style.display = "none";
        saveButton.style.display = "none";
        container.appendChild(countdownDisplay);

        function updateCountdown() {
            const [currentHour, currentMinute, currentSecond] = getSpainTime();
            const selectedHour = parseInt(hourInput.value, 10);
            const selectedMinute = parseInt(minuteInput.value, 10);

            let remainingTime = ((selectedHour * 3600 + selectedMinute * 60) - (currentHour * 3600 + currentMinute * 60 + currentSecond));
            if (remainingTime < 0) remainingTime += 24 * 3600;

            if (remainingTime <= 0) {
                countdownDisplay.textContent = "Tiempo excedido";
                const alarm = playAlarm();
                setTimeout(() => {
                    showQuiz(alarm);
                }, 2000);
                return;
            }

            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;

            countdownDisplay.textContent = `Tiempo restante: ${hours}h ${minutes}m ${seconds}s`;
            setTimeout(updateCountdown, 1000);
        }
        updateCountdown();
    });

    function fetchAIQuestion() {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({ action: "fetchAIQuestion" }, response => {
                console.log("Respuesta de la API:", response);
    
                if (!response || !response.success || !response.question) {
                    reject("Error al obtener la pregunta.");
                    return;
                }
    
                resolve({
                    question: response.question,
                    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], // Simulación
                    correct: "Opción 2"
                });
            });
        });
    }
    

    function showQuiz(alarm) {
        container.innerHTML = "<p>Cargando pregunta...</p>";
    
        fetchAIQuestion().then(({ question, options, correct }) => {
            container.innerHTML = "";
    
            const questionElement = document.createElement("p");
            questionElement.textContent = question;
            container.appendChild(questionElement);
    
            options.forEach(option => {
                const button = document.createElement("button");
                button.textContent = option;
                button.addEventListener("click", () => {
                    if (option === correct) {
                        alert("🎉 ¡Correcto!");
                        alarm.pause();  // Detener la alarma
                        alarm.currentTime = 0; // Reiniciar la alarma
                        window.close(); // Cerrar la ventana emergente
                    } else {
                        alert("❌ Incorrecto. Intenta de nuevo.");
                    }
                });
                container.appendChild(button);
            });
    
        }).catch(error => {
            console.error(error);
            container.innerHTML = "<p>Error al cargar la pregunta. 🚨</p>";
        });
    }
    
});
