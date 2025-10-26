import express from "express";
import { MailService } from "@genezio/email-service";

const emailReceipients = [
  // "optimadental2725@gmail.com",
  // "contact@optimadentalclinic.com",
  "d.raduandrei@gmail.com"
];

const app = express();

app.use(express.json());

const PORT = 8080;

app.post("/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Please provide name, email, and service." });
  }

  const finalEmailText = `*Noua cerere din site:*\n- Name: ${name}\n- Email: ${email}\n- Service: ${service}\n- Phone: ${
    phone || "N/A"
  }\n- Message: ${message || "N/A"}`;

  const response = await MailService.sendMail({
    emailServiceToken: process.env.EMAIL_SERVICE_TOKEN || "",
    from: "noreply@mailservice.genez.io",
    to: emailReceipients,
    subject: "[Optima Dental Clinic] Cerere noua din site",
    text: finalEmailText
  });

  if (!response.success) {
    return response.errorMessage;
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
