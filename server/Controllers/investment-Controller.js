import Investment from "../Models/CreateInvestment.js";

export const createInvestment = async (req, res) => {
  try {
    const {
      investmentName,
      amount,
      premiumFrequency,
      startDate,
      duration,
      reminderDate,
      endDate,
      reminderDaysBefore,
      status,
      email
    } = req.body

    const start = new Date(startDate);

    const nextPremiumDate = new Date(start);

    if (premiumFrequency === "Monthly") {
      nextPremiumDate.setMonth(nextPremiumDate.getMonth() + 1);
    }
    if (premiumFrequency === "quarterly") {
      nextPremiumDate.setMonth(nextPremiumDate.getMonth() + 3);
    }

    if (premiumFrequency === "half-yearly") {
      nextPremiumDate.setMonth(nextPremiumDate.getMonth() + 6);
    }

    if (premiumFrequency === "yearly") {
      nextPremiumDate.setFullYear(nextPremiumDate.getFullYear() + 1);
    }
    
    const investment = await Investment.create({
      investmentName,
      amount,
      premiumFrequency,
      startDate : start,
      duration,
      reminderDate,
      endDate,
      reminderDaysBefore,
      status,
      email
    });

    res.status(200).json({
        success : true,
        message : "Investment created successfully",
        data : investment,
    });
  } catch (error) {
     res.status(500).json({
        success : false,
        message : "Error in creating investment",
    });
    console.log(error);
  }
};
