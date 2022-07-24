const countriesData = require("countries-names");
const Country = require("../models/CountryModel");

// (async () => {
//   try {
//     const countries = await Country.insertMany(countriesData.all());
//     if (countries) {
//       console.log("Countries data inserted successfully!");
//     } else {
//       console.log("Can't insert countries data");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

const getCountries = async (req, res) => {
  try {
    const countries = await Country.find(); //if no data return >> data: []
    if (countries) {
      res.json({
        status: "success",
        data: countries,
      });
    } else {
      res.json({
        status: "failed",
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getCountries,
};
