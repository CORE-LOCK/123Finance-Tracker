import Investment from "../Models/CreateInvestment.js";

export const getAllInvestment = async (req, res) => {
  try {
    const AllInvestment = await Investment.find({})
    res.status(200).json({
        success : true,
        message : "Investment fetched successfully",
        data : AllInvestment,
    });
  } catch (error) {
     res.status(500).json({
        success : false,
        message : "Error in fetching investment",
    });
    console.log(error);
  }
};

export const updateInvestment = async (req, res) => {
  try {
    const AllInvestment = await Investment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        success : true,
        message : "Investment updated successfully",
        data : AllInvestment,
    });
  } catch (error) {
     res.status(500).json({
        success : false,
        message : "Error in updating investment",
    });
    console.log(error);
  }
};

export const deleteInvestment = async (req, res) => {
  try {
    const AllInvestment = await Investment.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success : true,
        message : "Investment deleted successfully",
        data : AllInvestment,
    });
  } catch (error) {
     res.status(500).json({
        success : false,
        message : "Error in deleting investment",
    });
    console.log(error);
  }
};

// export const getallinvestment = async (req, res)=>{
// try {
//   const AllInvestment = await Investment.
//    res.status(200).json({
//         success : true,
//         message : "Investment deleted successfully",
//         data : AllInvestment,
//     });
  
// } catch (error) {
//     res.status(500).json({
//         success : false,
//         message : "Error in getting All investment",
//     });
//   console.log(error)
// }
// }

