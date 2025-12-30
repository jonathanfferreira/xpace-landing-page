/* eslint-disable @typescript-eslint/no-var-requires */
import * as functions from "firebase-functions";
// Use require to bypass complex type issues with nodemailer import
const nodemailer = require("nodemailer");
const cors = require("cors");

const corsHandler = cors({ origin: true });

// Configure Nodemailer with EMAIL and PASSWORD from environment variables
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: (process.env.EMAIL_USER || functions.config().email?.user) as string,
        pass: (process.env.EMAIL_PASS || functions.config().email?.pass) as string,
    },
});

export const sendContactEmail = functions.https.onRequest((req: any, res: any) => {
    corsHandler(req, res, async () => {
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
            from: `XPACE Site <${(process.env.EMAIL_USER || functions.config().email?.user) as string}>`,
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
        } catch (error: any) {
            console.error("Error sending email:", error);
            res.status(500).send({ success: false, error: error.message });
        }
    });
});
