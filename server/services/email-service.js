import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendPremiumEmail = async (investment) => {
  try {
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: `${investment.email}`,
      subject: `Premium Reminder - ${investment.investmentName}`,
      html: `
      <h2>Premium Payment Reminder</h2>

      <p>Your premium payment is due.</p>

      <p>
        Investment:
        <strong>${investment.investmentName}</strong>
      </p>

      <p>
        Amount:
        <strong>₹${investment.amount}</strong>
      </p>

      <p>
        Premium Date:
        <strong>${new Date(investment.reminderDate).toDateString()}</strong>
      </p>

      <p>Please make your premium payment.</p>
    `,
    });
  } catch (error) {
   console.log(error)
  }
};
