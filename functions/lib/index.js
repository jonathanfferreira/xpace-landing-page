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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const functions = __importStar(require("firebase-functions"));
// Use require to bypass complex type issues with nodemailer import
const nodemailer = require("nodemailer");
const cors = require("cors");
const corsHandler = cors({ origin: true });
// Configure Nodemailer with EMAIL and PASSWORD from environment variables
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: (process.env.EMAIL_USER || ((_a = functions.config().email) === null || _a === void 0 ? void 0 : _a.user)),
        pass: (process.env.EMAIL_PASS || ((_b = functions.config().email) === null || _b === void 0 ? void 0 : _b.pass)),
    },
});
exports.sendContactEmail = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        var _a;
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            res.status(400).send("Missing fields");
            return;
        }
        const mailOptions = {
            from: `XPACE Site <${(process.env.EMAIL_USER || ((_a = functions.config().email) === null || _a === void 0 ? void 0 : _a.user))}>`,
            to: "financeiro@xpacecompany.com",
            replyTo: email,
            subject: `Novo Contato do Site: ${name}`,
            text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
            html: `
        <h3>Novo Contato Recebido</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send({ success: true, message: "Email sent!" });
        }
        catch (error) {
            console.error("Error sending email:", error);
            res.status(500).send({ success: false, error: error.message });
        }
    });
});
//# sourceMappingURL=index.js.map