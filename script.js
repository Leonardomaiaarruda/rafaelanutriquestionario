const config = {
    appsScriptUrl: "https://script.google.com/macros/s/AKfycbyfGbVY0-wDiasCTBE_quoo5ogIgQREpXi5r7FNSM9MfI5yedFNobi3ycgtfiTjYbSlnQ/exec",
    pdfFileName: "Questionario_Nutricional"
};

const questions = [
    { id: 1, question: "Nome completo:", type: "text", required: true },
    { id: 2, question: "Profissão:", type: "text", required: true },
    { id: 3, question: "Cidade:", type: "text", required: true },
    { id: 4, question: "Data de nascimento:", type: "date", required: true },
    { id: 5, question: "Altura (em cm):", type: "number", required: true, min: 100, max: 250 },
    { id: 6, question: "E-mail:", type: "email", required: true },
    { id: "6w", question: "Número de WhatsApp:", type: "tel", required: true },
    {
        id: 7,
        question: "Qual é o seu objetivo com a consultoria? (Selecione todas que se aplicam)",
        type: "checkbox",
        options: ["Emagrecimento", "Definição e/ou hipertrofia muscular", "Saúde e qualidade de vida", "Saúde da mulher (SOP, TPM, endometriose, fertilidade, menopausa, distúrbios hormonais)", "Sou falsa magra e quero mudar"],
        required: true
    },
    { id: 8, question: "Descreva melhor seu objetivo com o acompanhamento nutricional e como você acha que eu posso te ajudar?", type: "textarea", required: true },
    {
        id: 9,
        question: "Há quanto tempo você tenta mudar seus hábitos alimentares?",
        type: "radio",
        options: ["Há mais de 6 meses", "Nunca tentei", "Há menos de 6 meses", "Já tentei, porém não recordo quanto tempo"],
        required: true
    },
    {
        id: 10,
        question: "O que você considera ser a sua maior dificuldade quando o assunto é mudança de hábitos?",
        type: "checkbox",
        options: ["Iniciar e parar", "Não sei como são meus hábitos", "Querer mudanças radicais", "Querer a mudança, mas não fazer a minha parte", "Sem resposta"],
        required: true
    },
    {
        id: 11,
        question: "Quando o assunto é emagrecimento, o que você considera a sua maior dificuldade?",
        type: "checkbox",
        options: ["Não ter apoio das pessoas", "Perder peso rápido e logo recuperar tudo", "Manter a motivação e constância no processo", "Querer mudanças radicais e rápidas", "Sem resposta"],
        required: true
    },
    {
        id: 12,
        question: "Você já tentou algum desses métodos para controlar seu peso?",
        type: "checkbox",
        options: ["Dietas da moda/internet/outras fontes", "Medicamentos para emagrecimento", "Por conta própria fez dieta e exercícios", "Reeducação alimentar/Nutricionista/Médico Nutrólogo/Outra especialidade", "Cirurgia", "Sem resposta"],
        required: true
    },
    {
        id: 13,
        question: "Se você considera que teve aumento de peso, qual desses itens você relaciona que foi um motivo?",
        type: "checkbox",
        options: ["Adolescência", "Menopausa", "Uso de medicamentos", "Ansiedade/estresse", "Relacionamentos", "Parou de fumar", "Gestação/Amamentação", "Mudança de emprego e/ou rotina", "Diminuiu a atividade física", "Desde infância considero que meu peso está acima do ideal", "Sem resposta"],
        required: false
    },
    { id: 14, question: "Você se pesa com que frequência?", type: "radio", options: ["Raramente", "Toda semana", "Não gosto de me pesar"], required: true },
    { id: 15, question: "Você é fumante?", type: "radio", options: ["Não, nunca fumei", "Atualmente não, mas um dia já fumei", "Sim, mas estou tentando parar", "Sim, ainda fumo"], required: true },
    { id: 16, question: "Você consome bebida alcoólica?", type: "radio", options: ["Não", "Sim, somente aos finais de semana", "Sim, mais de 3x por semana"], required: true },
    { id: 17, question: "Você pratica atividade física? Se sim, qual atividade pratica? Em qual horário e duração? Quantas vezes por semana?", type: "textarea", required: false },
    { id: 18, question: "Quando está ansioso ou estressado, como reage?", type: "checkbox", options: ["Come mais que o usual", "Perde o apetite", "Não sente alterações no apetite"], required: true },
    { id: 19, question: "Costuma dormir quantas horas por noite?", type: "radio", options: ["Menos de 4 horas", "4 a 6 horas", "6 a 8 horas", "Mais de 8 horas"], required: true },
    { id: 20, question: "Como você considera o seu sono?", type: "radio", options: ["Bom", "Regular", "Ruim"], required: true },
    { id: 21, question: "Tem insônia?", type: "radio", options: ["Sim", "Não"], required: true },
    { id: 22, question: "Toma alguma medicação para dormir? Se sim, qual?", type: "textarea", required: false },
    { id: 23, question: "Como você classifica sua disposição física pela manhã?", type: "radio", options: ["Boa", "Regular", "Ruim"], required: true },
    { id: 24, question: "Como você classifica sua disposição física pela tarde?", type: "radio", options: ["Boa", "Regular", "Ruim"], required: true },
    { id: 25, question: "Como você classifica sua disposição física pela noite?", type: "radio", options: ["Boa", "Regular", "Ruim"], required: true },
    { id: 26, question: "Você se considera uma pessoa estressada?", type: "radio", options: ["Não, nada me afeta", "Sim, estressado e muito cansado", "Sim, estressado e muito agitado", "Sim, estressado e cansado pela manhã e agitado pela noite"], required: true },
    { id: 27, question: "Como é a sua rotina de trabalho/estudos?", type: "textarea", required: false },
    { id: 28, question: "Seus familiares têm ou já tiveram algumas das doenças abaixo:", type: "checkbox", options: ["Câncer", "Diabetes", "Doença cardiovascular", "Hipertensão", "Obesidade", "Problemas de tireoide", "Não sei"], required: false },
    { id: 29, question: "Já passou por algum tipo de cirurgia? Se sim, qual?", type: "textarea", required: false },
    { id: 30, question: "Tem alergia ou intolerância alimentar? Se sim, qual?", type: "textarea", required: false },
    { id: 31, question: "Faz uso de algum medicamento atualmente? Se sim, quais e em quais horários costuma tomá-los?", type: "textarea", required: false },
    { id: 32, question: "Faz uso de algum suplemento alimentar atualmente? Se sim, quais e em quais horários costuma tomá-los?", type: "textarea", required: false },
    { id: 33, question: "Qual sua ingestão diária de água? (Referência: 1 garrafa = 510ml)", type: "radio", options: ["0 (Não bebo água regularmente)", "1-3 garrafas", "4-6 garrafas", "7-9 garrafas", "10 ou mais garrafas"], required: true },
    { id: 34, question: "Você costuma preparar a sua própria comida? Se não, quem costuma fazer?", type: "textarea", required: false },
    { id: 35, question: "Você costuma comer sozinho ou acompanhado?", type: "radio", options: ["Sozinho", "Acompanhado", "Ambas as situações"], required: true },
    { id: 36, question: "Como avalia seu intestino?", type: "checkbox", options: ["Consistência das fezes normal, vou ao banheiro todos os dias", "Consistência das fezes endurecidas, vou ao banheiro dia sim e dia não", "Consistência das fezes amolecidas (diarreia), vou ao banheiro diariamente", "Consistência das fezes muito endurecidas, fico sem ir ao banheiro mais de 2 dias", "Não sei informar"], required: true },
    { id: 37, question: "Em qual horário você mais sente fome?", type: "checkbox", options: ["Manhã", "Tarde", "Noite", "Madrugada"], required: true },
    { id: 38, question: "Sobre sua mastigação, você a considera:", type: "radio", options: ["Lenta (sempre termino por último)", "Normal (mastigo bem e com atenção)", "Rápida (sempre termino primeiro)"], required: true },
    { id: 39, question: "Qual é o alimento que você considera indispensável, que você gosta muito de comer e é o seu favorito?", type: "text", required: true },
    { id: 40, question: "Tem algum alimento que você não come de jeito nenhum?", type: "textarea", required: false },
    { id: 41, question: "Qual é a sua preferência alimentar?", type: "checkbox", options: ["Doce", "Salgado", "Azedo", "Amargo", "Todas as anteriores"], required: true },
    { id: 42, question: "Assinale quais refeições você faz todos os dias:", type: "checkbox", options: ["Desjejum (logo ao acordar)", "Café da manhã", "Lanche da manhã", "Almoço", "Lanche da tarde", "Jantar", "Ceia", "Lanches extras/pré-treino/pós-treino"], required: true },
    { id: 43, question: "Com que frequência você frequenta restaurantes/bares/lanchonetes/delivery?", type: "radio", options: ["Não tenho esse costume", "1 a 2 vezes por semana", "3 a 4 vezes por semana", "Sempre"], required: true },
    { id: 44, question: "Histórico dietético - conte um pouco mais sobre suas refeições por dia (o que costuma comer e quantidades):", type: "textarea", required: false },
    { id: 45, question: "Peso atual (em kg):", type: "number", min: 30, max: 300, step: "0.1", required: true },
    { id: 46, question: "Fez exames de sangue nos últimos 6 meses? (Se sim, enviar via WhatsApp)", type: "radio", options: ["Sim", "Não"], required: true },
    { id: 47, question: "Como você me conheceu?", type: "radio", options: ["Indicação de um familiar ou amigo", "Instagram", "Facebook", "Site", "Google", "Indicação de um profissional da saúde"], required: true },
    { id: 48, question: "Faz atividade física há quanto tempo?", type: "text", required: false },
    { id: 49, question: "Qual sua maior dificuldade que te impede de evoluir?", type: "textarea", required: true },
    { id: 50, question: "Você costuma querer comer coisas mais gostosas em quais situações abaixo?", type: "checkbox", options: ["Quando estou de TPM", "Quando estou triste", "Quando estou feliz", "Quando estou cansada/estressada", "Quando sinto que trabalhei/me esforcei muito e mereço", "Quando chega o final de semana"], required: true },
    { id: 51, question: "Como é sua alimentação nos finais de semana?", type: "textarea", required: true },
    { id: 52, question: "Tem o hábito de beliscar alimentos durante o dia?", type: "radio", options: ["Sim", "Não", "Às vezes"], required: true },
    { id: 53, question: "Qual sua refeição livre preferida?", type: "text", required: true },
    { id: 54, question: "Usa ou já usou alguma medicação, anabolizante ou reposição hormonal para fins estéticos?", type: "textarea", required: false },
    { id: 55, question: "Costuma ter em casa alimentos que te fazem perder o controle?", type: "textarea", required: false },
    { id: 56, question: "Faz algum tipo de organização alimentar?", type: "textarea", required: false },
    { id: 57, question: "Tem ou já teve algum episódio de compulsão alimentar por algum alimento?", type: "textarea", required: false },
    { id: 58, question: "Tem balancinha de alimento em casa?", type: "radio", options: ["Sim", "Não"], required: true }
];

let currentQuestionIndex = 0;
let lastPayload = null;
let submissionInFlight = false;
let submissions = [];
let adminSessionCode = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
    renderQuestions();
    setupEvents();
    showQuestion(0);
});

function setupEvents() {
    $$(".view-btn").forEach((button) => {
        button.addEventListener("click", () => switchView(button.dataset.view));
    });

    $("#downloadPdfBtn").addEventListener("click", downloadLastPdf);
    $("#newAnswerBtn").addEventListener("click", resetPatientForm);

    $("#adminLogin").addEventListener("submit", async (event) => {
        event.preventDefault();
        adminSessionCode = $("#adminCode").value.trim();
        $("#loginError").classList.add("hidden");

        if (!adminSessionCode) {
            $("#loginError").textContent = "Digite o código de acesso.";
            $("#loginError").classList.remove("hidden");
            return;
        }

        const loginButton = $("#adminLogin button[type='submit']");
        loginButton.disabled = true;
        loginButton.textContent = "Entrando...";

        const loaded = await loadSubmissions();

        loginButton.disabled = false;
        loginButton.textContent = "Entrar";

        if (!loaded) return;

        $("#adminLogin").classList.add("hidden");
        $("#adminContent").classList.remove("hidden");
        $("#refreshSubmissions").classList.remove("hidden");
    });

    $("#refreshSubmissions").addEventListener("click", loadSubmissions);
    $("#searchSubmissions").addEventListener("input", renderSubmissions);
    $("#exportCsv").addEventListener("click", exportSubmissionsCsv);
    $("#exportPdf").addEventListener("click", exportSubmissionsPdf);
}

function switchView(viewId) {
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
    $$(".view-btn").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
}

function renderQuestions() {
    const form = $("#questionnaireForm");
    form.innerHTML = "";

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("section");
        questionDiv.className = "question-container";
        questionDiv.id = `question-${q.id}`;

        const questionText = document.createElement("h2");
        questionText.className = "question";
        questionText.textContent = `${index + 1}. ${q.question}${q.required ? " *" : ""}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = `options ${q.type}-options`;

        if (["text", "email", "date", "number", "tel"].includes(q.type)) {
            const input = document.createElement("input");
            input.type = q.type;
            input.id = `q${q.id}`;
            input.name = `q${q.id}`;
            input.required = q.required;
            if (q.min !== undefined) input.min = q.min;
            if (q.max !== undefined) input.max = q.max;
            if (q.step !== undefined) input.step = q.step;
            optionsDiv.appendChild(input);
        }

        if (q.type === "textarea") {
            const textarea = document.createElement("textarea");
            textarea.id = `q${q.id}`;
            textarea.name = `q${q.id}`;
            textarea.required = q.required;
            optionsDiv.appendChild(textarea);
        }

        if (["checkbox", "radio"].includes(q.type)) {
            q.options.forEach((option, optionIndex) => {
                const optionDiv = document.createElement("label");
                optionDiv.className = "option";
                optionDiv.htmlFor = `q${q.id}_${optionIndex}`;

                const input = document.createElement("input");
                input.type = q.type;
                input.id = `q${q.id}_${optionIndex}`;
                input.name = `q${q.id}`;
                input.value = option;

                const labelText = document.createElement("span");
                labelText.textContent = option;

                optionDiv.append(input, labelText);
                optionsDiv.appendChild(optionDiv);
            });
        }

        const error = document.createElement("p");
        error.className = "error-message";
        error.textContent = "Preencha esta pergunta para continuar.";

        const buttons = document.createElement("div");
        buttons.className = "btn-container";

        if (index > 0) {
            const previous = document.createElement("button");
            previous.type = "button";
            previous.className = "btn secondary-btn";
            previous.textContent = "Voltar";
            previous.addEventListener("click", () => showQuestion(index - 1));
            buttons.appendChild(previous);
        }

        const next = document.createElement("button");
        next.type = "button";
        next.className = "btn";
        next.textContent = index === questions.length - 1 ? "Enviar questionário" : "Continuar";
        next.addEventListener("click", () => {
            if (!validateQuestion(index)) return;
            if (index === questions.length - 1) {
                handleSubmit();
            } else {
                showQuestion(index + 1);
            }
        });
        buttons.appendChild(next);

        questionDiv.append(optionsDiv, error, buttons);
        form.appendChild(questionDiv);
    });
}

function showQuestion(index) {
    currentQuestionIndex = index;
    $$(".question-container").forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
    $("#questionCounter").textContent = `Pergunta ${index + 1} de ${questions.length}`;
    $("#progressBar").style.width = `${((index + 1) / questions.length) * 100}%`;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateQuestion(index) {
    const q = questions[index];
    const container = $(`#question-${q.id}`);
    const error = container.querySelector(".error-message");
    let isValid = true;

    if (q.required) {
        if (["checkbox", "radio"].includes(q.type)) {
            isValid = Boolean(container.querySelector(`input[name="q${q.id}"]:checked`));
        } else {
            const input = container.querySelector(`#q${q.id}`);
            isValid = input.value.trim().length > 0 && input.checkValidity();
        }
    }

    container.classList.toggle("has-error", !isValid);
    error.style.display = isValid ? "none" : "block";
    return isValid;
}

async function handleSubmit() {
    if (submissionInFlight) return;
    if (!questions.every((_, index) => validateQuestion(index))) {
        const firstInvalid = questions.findIndex((_, index) => !validateQuestion(index));
        showQuestion(Math.max(firstInvalid, 0));
        return;
    }

    const submitButton = $(`#question-${questions.at(-1).id} .btn-container .btn:last-child`);
    submissionInFlight = true;
    submitButton.disabled = true;
    $$("#questionnaireForm input, #questionnaireForm textarea").forEach((input) => { input.disabled = true; });
    setSaveStatus("Enviando para o Apps Script...");

    try {
        if (!lastPayload) lastPayload = buildPayload();
        await sendToAppsScript(lastPayload);
        try { saveLocalBackup(lastPayload); } catch (backupError) { console.warn("Cópia local indisponível.", backupError); }
        $("#mainContainer").classList.add("hidden");
        $("#thankYouPage").classList.remove("hidden");
        setSaveStatus("Enviado com sucesso");
    } catch (error) {
        console.error(error);
        const message = error.message === "submission-rejected"
            ? "O servidor informou uma falha ao salvar. Entre em contato com a nutricionista."
            : "Envio sem confirmação. As respostas podem ter sido salvas. Consulte a nutricionista antes de reenviar para evitar duplicidade.";
        setSaveStatus(message, true);
        alert(message);
    } finally {
        submissionInFlight = false;
        submitButton.disabled = false;
    }
}

function createSubmissionId() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (value) => value.toString(16).padStart(2, "0")).join("");
}

function buildPayload() {
    const answers = questions.map((q, index) => ({
        id: q.id,
        order: index + 1,
        question: q.question,
        answer: getAnswer(q)
    }));
    const whatsappQuestion = questions.find((q) => q.id === "6w");

    return {
        submissionId: createSubmissionId(),
        type: "questionario_nutricional",
        submittedAt: new Date().toISOString(),
        patientName: getAnswer(questions[0]),
        patientEmail: getAnswer(questions[5]),
        patientWhatsapp: getAnswer(whatsappQuestion),
        patientCity: getAnswer(questions[2]),
        answers
    };
}
function getAnswer(q) {
    if (q.type === "checkbox") {
        return $$(`input[name="q${q.id}"]:checked`).map((input) => input.value).join("; ");
    }

    if (q.type === "radio") {
        const selected = $(`input[name="q${q.id}"]:checked`);
        return selected ? selected.value : "";
    }

    return ($(`#q${q.id}`)?.value || "").trim();
}

async function sendToAppsScript(payload) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
        const response = await fetch(config.appsScriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        if (!response.ok) throw new Error("submission-unconfirmed");
        const result = await response.json();
        if (result && result.ok === false) throw new Error("submission-rejected");
        if (!result || result.ok !== true) throw new Error("submission-unconfirmed");
    } finally {
        clearTimeout(timeout);
    }
}

function saveLocalBackup(payload) {
    const key = "nutriRafaelaBackups";
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    current.unshift(payload);
    localStorage.setItem(key, JSON.stringify(current.slice(0, 20)));
}

function setSaveStatus(message, isError = false) {
    const status = $("#saveStatus");
    status.textContent = message;
    status.classList.toggle("error", isError);
}

function resetPatientForm() {
    if (submissionInFlight) return;
    lastPayload = null;
    $("#questionnaireForm").reset();
    $$("#questionnaireForm input, #questionnaireForm textarea").forEach((input) => { input.disabled = false; });
    $("#thankYouPage").classList.add("hidden");
    $("#mainContainer").classList.remove("hidden");
    setSaveStatus("Aguardando preenchimento");
    showQuestion(0);
}

async function downloadLastPdf() {
    if (!lastPayload) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const fileName = `${config.pdfFileName}_${safeFileName(lastPayload.patientName || "Paciente")}.pdf`;

    doc.setFontSize(16);
    doc.setTextColor(39, 174, 96);
    doc.text("Questionário de Consulta Nutricional", 105, 18, { align: "center" });
    doc.setFontSize(10);
    doc.setTextColor(70, 70, 70);
    doc.text(`Paciente: ${lastPayload.patientName || "Não informado"}`, 20, 30);
    doc.text(`Data: ${new Date(lastPayload.submittedAt).toLocaleString("pt-BR")}`, 20, 37);

    let y = 50;
    lastPayload.answers.forEach((item) => {
        if (y > 265) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        const questionLines = doc.splitTextToSize(`${item.order || item.id}. ${item.question}`, 170);
        doc.text(questionLines, 20, y);
        y += questionLines.length * 6;
        doc.setFont("helvetica", "normal");
        const answerLines = doc.splitTextToSize(item.answer || "Não informado", 170);
        doc.text(answerLines, 20, y + 3);
        y += answerLines.length * 6 + 10;
    });

    doc.save(fileName);
}

function safeFileName(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "Paciente";
}

async function loadSubmissions() {
    setAdminStatus("Carregando respostas...");

    try {
        const data = await fetchSubmissionsFromAppsScript(adminSessionCode);
        if (data && data.ok === false) {
            throw new Error(data.error === "unauthorized" ? "unauthorized" : "apps-script-error");
        }
        submissions = normalizeSubmissions(data);
        renderSubmissions();
        return true;
    } catch (error) {
        console.error(error);

        if (error.message === "unauthorized") {
            $("#loginError").textContent = "Código inválido.";
            $("#loginError").classList.remove("hidden");
            setAdminStatus("Acesso negado pelo Apps Script.", true);
            return false;
        }

        submissions = [];
        renderSubmissions();
        setAdminStatus("Não foi possível ler o Apps Script agora. Verifique se a nova versão foi publicada e se o código está correto.", true);
        return false;
    }
}

async function fetchSubmissionsFromAppsScript(adminCode) {
    const url = `${config.appsScriptUrl}?action=list&adminCode=${encodeURIComponent(adminCode)}`;

    try {
        const response = await fetch(url, { method: "GET" });
        return await response.json();
    } catch (error) {
        return loadSubmissionsJsonp(adminCode);
    }
}

function loadSubmissionsJsonp(adminCode) {
    return new Promise((resolve, reject) => {
        const callbackName = `nutriRafaelaCallback_${Date.now()}`;
        const script = document.createElement("script");
        const separator = config.appsScriptUrl.includes("?") ? "&" : "?";
        script.src = `${config.appsScriptUrl}${separator}action=list&adminCode=${encodeURIComponent(adminCode)}&callback=${callbackName}`;
        script.onerror = () => {
            cleanup();
            reject(new Error("Falha ao carregar JSONP do Apps Script."));
        };

        const timeout = setTimeout(() => {
            cleanup();
            reject(new Error("Tempo esgotado ao ler o Apps Script."));
        }, 12000);

        window[callbackName] = (data) => {
            clearTimeout(timeout);
            cleanup();
            resolve(data);
        };

        function cleanup() {
            delete window[callbackName];
            script.remove();
        }

        document.body.appendChild(script);
    });
}

function normalizeSubmissions(data) {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.records)) return data.records;
    if (Array.isArray(data.responses)) return data.responses;
    if (Array.isArray(data.data)) return data.data;
    return [];
}

function renderSubmissions() {
    const list = $("#submissionsList");
    const filtered = getFilteredSubmissions();

    renderAdminSummary(filtered);
    list.innerHTML = "";

    if (!filtered.length) {
        list.innerHTML = `<div class="empty-state">Nenhuma resposta encontrada.</div>`;
        if (!$("#adminStatus").classList.contains("error")) {
            setAdminStatus("Nenhuma resposta encontrada.");
        }
        return;
    }

    setAdminStatus(`${filtered.length} paciente(s) encontrado(s). Clique no nome para abrir a ficha.`);

    filtered.forEach((submission) => {
        const answers = Array.isArray(submission.answers) ? submission.answers : objectToAnswers(submission);
        const info = getSubmissionInfo(submission, answers);
        const whatsappLink = buildWhatsAppLink(info.patientWhatsapp);
        const card = document.createElement("article");
        card.className = "submission-card collapsed";

        card.innerHTML = `
            <div class="patient-row">
                <button type="button" class="patient-toggle" aria-expanded="false">
                    <span class="patient-name">${escapeHtml(info.patientName)}</span>
                    <span class="patient-meta">${escapeHtml(info.submittedAt)} · ${escapeHtml(info.patientCity)}</span>
                </button>
                <div class="submission-actions">
                    <button type="button" class="btn secondary-btn small-btn patient-pdf-btn">PDF</button>
                    ${whatsappLink ? `<a class="btn small-btn whatsapp-link" href="${whatsappLink}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
                </div>
            </div>
            <div class="submission-details hidden">
                <div class="submission-head">
                    <div>
                        <h3>${escapeHtml(info.patientName)}</h3>
                        <div class="contact-row">
                            <span>${escapeHtml(info.patientEmail)}</span>
                            <span>${escapeHtml(info.patientCity)}</span>
                            <span>${escapeHtml(info.patientWhatsapp || "WhatsApp não informado")}</span>
                        </div>
                        <p>Enviado em ${escapeHtml(info.submittedAt)}</p>
                    </div>
                </div>
                <dl class="answers-grid">
                    ${answers.map((item) => `<div><dt>${escapeHtml(formatQuestionLabel(item))}</dt><dd>${escapeHtml(item.answer || item.value || "Não informado")}</dd></div>`).join("")}
                </dl>
            </div>
        `;

        const toggleButton = card.querySelector(".patient-toggle");
        const details = card.querySelector(".submission-details");
        toggleButton.addEventListener("click", () => {
            const isOpening = details.classList.contains("hidden");
            details.classList.toggle("hidden", !isOpening);
            card.classList.toggle("collapsed", !isOpening);
            toggleButton.setAttribute("aria-expanded", String(isOpening));
        });

        card.querySelector(".patient-pdf-btn").addEventListener("click", () => exportSingleSubmissionPdf(submission));
        list.appendChild(card);
    });
}

function getSubmissionInfo(submission, answers) {
    return {
        patientName: submission.patientName || getAnswerByQuestion(answers, "Nome completo") || "Paciente sem nome",
        patientEmail: submission.patientEmail || getAnswerByQuestion(answers, "E-mail") || "E-mail não informado",
        patientCity: submission.patientCity || getAnswerByQuestion(answers, "Cidade") || "Cidade não informada",
        patientWhatsapp: getPatientWhatsapp(submission, answers),
        submittedAt: submission.submittedAt ? new Date(submission.submittedAt).toLocaleString("pt-BR") : "Data não informada"
    };
}

function formatQuestionLabel(item) {
    const number = item.order || item.id || "";
    const text = item.question || item.key || "Campo";
    return `${number} ${text}`.trim();
}
function getFilteredSubmissions() {
    const term = $("#searchSubmissions").value.trim().toLowerCase();
    if (!term) return submissions;
    return submissions.filter((submission) => JSON.stringify(submission).toLowerCase().includes(term));
}

function renderAdminSummary(filtered) {
    const summary = $("#adminSummary");
    if (!summary) return;

    const total = submissions.length;
    const withWhatsApp = submissions.filter((submission) => getPatientWhatsapp(submission)).length;
    const lastDate = submissions
        .map((submission) => submission.submittedAt ? new Date(submission.submittedAt) : null)
        .filter((date) => date && !Number.isNaN(date.getTime()))
        .sort((a, b) => b - a)[0];

    summary.innerHTML = `
        <div class="summary-card"><strong>${total}</strong><span>Total de respostas</span></div>
        <div class="summary-card"><strong>${filtered.length}</strong><span>Na busca atual</span></div>
        <div class="summary-card"><strong>${withWhatsApp}</strong><span>Com WhatsApp</span></div>
        <div class="summary-card"><strong>${lastDate ? lastDate.toLocaleDateString("pt-BR") : "-"}</strong><span>Último envio</span></div>
    `;
}

function getPatientWhatsapp(submission, answers) {
    const answerList = answers || (Array.isArray(submission.answers) ? submission.answers : objectToAnswers(submission));
    return submission.patientWhatsapp || getAnswerByQuestion(answerList, "WhatsApp") || "";
}

function buildWhatsAppLink(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (!digits) return "";
    const phone = digits.startsWith("55") ? digits : `55${digits}`;
    return `https://wa.me/${phone}`;
}
function objectToAnswers(submission) {
    return Object.entries(submission)
        .filter(([key]) => !["submissionId", "type", "submittedAt", "patientName", "patientEmail", "patientWhatsapp", "patientCity", "answers"].includes(key))
        .map(([key, value]) => ({ question: key, answer: Array.isArray(value) ? value.join("; ") : String(value ?? "") }));
}

function getAnswerByQuestion(answers, text) {
    const found = answers.find((item) => String(item.question || "").toLowerCase().includes(text.toLowerCase()));
    return found?.answer || "";
}

function setAdminStatus(message, isError = false) {
    const status = $("#adminStatus");
    status.textContent = message;
    status.classList.toggle("error", isError);
}

function exportSubmissionsCsv() {
    const rows = getFilteredSubmissions().flatMap((submission) => {
        const answers = Array.isArray(submission.answers) ? submission.answers : objectToAnswers(submission);
        return answers.map((item) => [
            submission.submittedAt || "",
            submission.patientName || "",
            submission.patientEmail || "",
            getPatientWhatsapp(submission, answers),
            submission.patientCity || "",
            item.id || "",
            item.question || item.key || "",
            item.answer || item.value || ""
        ]);
    });

    const csv = [["Data", "Paciente", "E-mail", "WhatsApp", "Cidade", "ID", "Pergunta", "Resposta"], ...rows]
        .map((row) => row.map(csvCell).join(","))
        .join("\n");

    downloadBlob(csv, "respostas_pacientes.csv", "text/csv;charset=utf-8");
}

function exportSubmissionsPdf() {
    const filtered = getFilteredSubmissions();
    if (!filtered.length) {
        alert("Não há respostas para exportar.");
        return;
    }

    exportSubmissionsToPdf(filtered, "respostas_pacientes.pdf", "Respostas dos pacientes");
}

function exportSingleSubmissionPdf(submission) {
    const answers = Array.isArray(submission.answers) ? submission.answers : objectToAnswers(submission);
    const info = getSubmissionInfo(submission, answers);
    const fileName = `ficha_${safeFileName(info.patientName)}.pdf`;
    exportSubmissionsToPdf([submission], fileName, `Ficha de ${info.patientName}`);
}

function exportSubmissionsToPdf(items, fileName, title) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 18;

    doc.setFontSize(16);
    doc.setTextColor(35, 148, 95);
    doc.text(title, pageWidth / 2, y, { align: "center" });
    y += 8;
    doc.setFontSize(9);
    doc.setTextColor(90, 90, 90);
    doc.text(`Exportado em ${new Date().toLocaleString("pt-BR")}`, pageWidth / 2, y, { align: "center" });
    y += 12;

    items.forEach((submission, index) => {
        const answers = Array.isArray(submission.answers) ? submission.answers : objectToAnswers(submission);
        const info = getSubmissionInfo(submission, answers);

        if (y > pageHeight - 45) {
            doc.addPage();
            y = 18;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(31, 45, 43);
        doc.text(`${index + 1}. ${info.patientName}`, 14, y);
        y += 7;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        doc.text(doc.splitTextToSize(`${info.patientEmail} | ${info.patientWhatsapp || "WhatsApp não informado"} | ${info.patientCity} | ${info.submittedAt}`, 182), 14, y);
        y += 10;

        answers.forEach((item) => {
            const questionLines = doc.splitTextToSize(formatQuestionLabel(item), 182);
            const answerLines = doc.splitTextToSize(item.answer || item.value || "Não informado", 182);
            const blockHeight = (questionLines.length + answerLines.length) * 5 + 8;

            if (y + blockHeight > pageHeight - 16) {
                doc.addPage();
                y = 18;
            }

            doc.setFont("helvetica", "bold");
            doc.setTextColor(45, 45, 45);
            doc.text(questionLines, 14, y);
            y += questionLines.length * 5;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(70, 70, 70);
            doc.text(answerLines, 14, y + 2);
            y += answerLines.length * 5 + 8;
        });

        y += 5;
    });

    doc.save(fileName);
}
function downloadBlob(content, fileName, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}
function csvCell(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}











