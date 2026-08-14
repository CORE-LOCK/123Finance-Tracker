import Investment from "../Models/CreateInvestment.js";
import { sendPremiumEmail } from "../services/email-service.js";
import { calculateNextPremiumDate } from "../services/calculateNextPremiumDate.js";

export const checkPremiumReminders = async () => {

  const today = new Date();

  const todayDate = new Date(today);
  todayDate.setHours(0, 0, 0, 0);

  const investments = await Investment.find({
    status: "active",
  });

  for (const investment of investments) {

    const reminderDate = new Date(
      investment.reminderDate
    );

    reminderDate.setHours(0, 0, 0, 0);

    // Calculate when the reminder should start
    const reminderStartDate = new Date(
      reminderDate
    );

    reminderStartDate.setDate(
      reminderStartDate.getDate() -
      investment.reminderDaysBefore
    );

    // Send email during reminder period
    if (
      todayDate >= reminderStartDate &&
      todayDate <= reminderDate
    ) {

      console.log(
        `Sending reminder for ${investment.investmentName}`
      );

      await sendPremiumEmail(investment);
    }

    // Calculate next premium after current premium date
    if (todayDate > reminderDate) {

      const nextReminderDate =
        calculateNextPremiumDate(
          reminderDate,
          investment.premiumFrequency
        );

      // Check whether next premium is within investment period
      if (
        nextReminderDate <= investment.endDate
      ) {

        investment.reminderDate =
          nextReminderDate;

        await investment.save();

        console.log(
          "Next premium date:",
          nextReminderDate
        );

      } else {

        investment.status = "completed";

        await investment.save();

        console.log(
          "Investment completed:",
          investment.investmentName
        );
      }
    }
  }
};