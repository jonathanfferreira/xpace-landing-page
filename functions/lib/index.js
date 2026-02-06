"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const cors = require("cors");
const axios_1 = __importDefault(require("axios"));
admin.initializeApp();
const corsHandler = cors({ origin: true });
// --- CONFIG ---
const API_KEY = process.env.AUTHENTICATION_API_KEY || 'xpace_secure_key_2025';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8080'; // THIS NEEDS TO BE UPDATED TO PUBLIC EVOLUTION API URL
const INSTANCE_NAME = 'XPACE';
const SOCIOS = {
    ALCEU: '554791700812@s.whatsapp.net',
    // RUAN: '554799463474@s.whatsapp.net',
    JHONNEY: '554784970324@s.whatsapp.net'
};
// --- SERVICES ---
async function sendMessage(to, text) {
    var _a;
    try {
        await axios_1.default.post(`${SERVER_URL}/message/sendText/${INSTANCE_NAME}`, {
            number: to,
            text: text,
            delay: 1200,
            linkPreview: true
        }, {
            headers: {
                apikey: API_KEY,
                "Content-Type": "application/json",
            },
        });
        console.log(`Message sent to ${to}`);
    }
    catch (error) {
        console.error("Error sending message:", ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
    }
}
async function notifySocios(intent, userInfo) {
    const phone = userInfo.jid.replace('@s.whatsapp.net', '');
    const waLink = `https://wa.me/${phone}`;
    let text = "";
    if (intent.startsWith("👁️")) {
        text = `🚨 *ALERTA DE LEITURA (XPACE)*\n\n${intent}\nAluno: ${userInfo.name || "Desconhecido"}\nLink: ${waLink}`;
    }
    else {
        text = `🚨 *ALERTA XPACE-BOT*\n\nUm aluno demonstrou forte interesse em: *${intent}*\nDe: ${userInfo.name || "Desconhecido"}\nLink: ${waLink}\n\nFavor entrar em contato!`;
    }
    await sendMessage(SOCIOS.ALCEU, text);
    await sendMessage(SOCIOS.JHONNEY, text);
}
async function notifyQuizLead(data) {
    const { name, phone, result } = data;
    const waLink = `https://wa.me/${phone}`;
    const text = `🎯 *NOVO LEAD DO QUIZ*\n\n` +
        `👤 *Nome:* ${name}\n` +
        `📱 *Tel:* ${phone}\n` +
        `🏆 *Resultado:* ${result}\n` +
        `🔗 *Link:* ${waLink}\n\n` +
        `_Este lead acabou de completar o quiz no site!_`;
    await sendMessage(SOCIOS.ALCEU, text);
    await sendMessage(SOCIOS.JHONNEY, text);
}
// --- CLOUD FUNCTIONS ---
exports.api = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        // ROUTER logic inside the function
        const path = req.path;
        // 1. QUIZ SUBMISSION
        if (path === '/quiz' && req.method === 'POST') {
            try {
                const { name, phone, result, answers } = req.body;
                console.log(`[QUIZ LEAD] ${name} (${phone}) -> ${result}`);
                // Format Phone
                let cleanPhone = phone.toString().replace(/\D/g, '');
                if (cleanPhone.startsWith('0'))
                    cleanPhone = cleanPhone.substring(1);
                if (!cleanPhone.startsWith('55'))
                    cleanPhone = '55' + cleanPhone;
                const jid = cleanPhone + '@s.whatsapp.net';
                // Send User Message
                const firstName = name.split(' ')[0];
                let quizMsg = "";
                if (result === 'STREET DANCE / URBAN') {
                    quizMsg = `E aí, ${firstName}! 🔥\n\nVi no nosso Quiz que você tem a alma das *Danças Urbanas*! 👟\n\nO Street Dance é perfeito pra gastar energia e aprender técnica com estilo. Quer ver os horários das turmas de Street?`;
                }
                else if (result === 'JAZZ / CONTEMPORÂNEO') {
                    quizMsg = `Olá, ${firstName}! ✨\n\nO Quiz da XPACE indicou que *Jazz & Contemporâneo* combinam com você! 🦢\n\nTemos turmas focadas em técnica e expressão. Gostaria de conhecer a grade de horários?`;
                }
                else if (result === 'K-POP') {
                    quizMsg = `Annyeong, ${firstName}! ✌️🇰🇷\n\nSeu resultado deu *K-POP*! Que tudo! Temos a melhor estrutura pra você dançar seus hits favoritos.\n\nQuer saber quando são os ensaios?`;
                }
                else {
                    quizMsg = `Olá, ${firstName}! 👋\n\nVi que você completou nosso Quiz e seu estilo é *${result}*! Incrível.\n\nEu sou o X-Bot, quer agendar uma aula experimental dessa modalidade?`;
                }
                await sendMessage(jid, quizMsg);
                await notifyQuizLead({ name, phone, result, score: answers });
                res.status(200).json({ success: true });
            }
            catch (error) {
                console.error('Error processing quiz lead:', error);
                res.status(500).json({ success: false, error: 'Internal Error' });
            }
            return;
        }
        // 2. GENERAL LEAD
        if (path === '/lead' && req.method === 'POST') {
            try {
                const { name, phone, intent } = req.body;
                console.log(`[SITE LEAD] ${name} (${phone}) -> ${intent}`);
                let cleanPhone = phone.toString().replace(/\D/g, '');
                if (cleanPhone.startsWith('0'))
                    cleanPhone = cleanPhone.substring(1);
                if (!cleanPhone.startsWith('55'))
                    cleanPhone = '55' + cleanPhone;
                const jid = cleanPhone + '@s.whatsapp.net';
                const firstName = name.split(' ')[0];
                let welcomeMsg = `Oi, ${firstName}! 👋\n\nObrigado pelo contato no site da XPACE. Logo nossa equipe vai te responder, mas se quiser agilizar, pode falar comigo por aqui!`;
                await sendMessage(jid, welcomeMsg);
                await notifySocios(`🚀 NOVO LEAD DO SITE: ${intent}\nNome: ${name}\nTel: ${phone}`, { jid, name });
                res.status(200).json({ success: true });
            }
            catch (error) {
                console.error('Error processing site lead:', error);
                res.status(500).json({ success: false });
            }
            return;
        }
        res.status(404).send('Not Found');
    });
});
//# sourceMappingURL=index.js.map