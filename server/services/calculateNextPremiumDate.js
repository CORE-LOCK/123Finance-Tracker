export const calculateNextPremiumDate = (currentDate, premiumFrequency) => {
  const nextDate = new Date(currentDate);

  if (premiumFrequency.toLowerCase() === "monthly") {
    nextDate.setMonth(nextDate.getMonth() + 1);
  } else if (premiumFrequency.toLowerCase() === "quarterly") {
    nextDate.setMonth(nextDate.getMonth() + 3);
  } else if (premiumFrequency.toLowerCase() === "half-yearly") {
    nextDate.setMonth(nextDate.getMonth() + 6);
  } else if (premiumFrequency.toLowerCase() === "yearly") {
    nextDate.setFullYear(nextDate.getFullYear() + 1);
  } else {
    throw new Error("Invalid premium frequency");
  }
  return nextDate;
};
