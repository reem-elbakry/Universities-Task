const asyncHandler = require("express-async-handler");
const University = require("../models/UniversityModel");

const setUniversity = asyncHandler(async (req, res) => {
  const { domains, web_pages, state_province, name, country, alpha_two_code } =
    req.body;

  if (
    !(
      domains &&
      web_pages &&
      state_province &&
      name &&
      country &&
      alpha_two_code
    )
  ) {
    res.status(400);
    throw new Error(
      "Can't create university, please enter all required fields!"
    );
  }

  const university = await University.create({
    domains,
    web_pages,
    state_province,
    name,
    country,
    alpha_two_code,
  });

  if (university) {
    res.json({
      status: "success",
      data: university,
    });
  } else {
    res.status(400);
    throw new Error(
      "Can't create university, please enter all required fields!"
    );
  }
});

const getUniversities = asyncHandler(async (req, res) => {
  const key = req.query.key;
  const universities = await University.find({ alpha_two_code: key });

  if (universities) {
    res.json({
      status: "success",
      data: universities,
    });
  } else {
    res.status(400);
    throw new Error("There is no Universities found for this country!");
  }
});

const getUniversity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const university = await University.findById(id);

  if (university) {
    res.json({
      status: "success",
      data: university,
    });
  } else {
    res.status(400);
    throw new Error("There is no University found!");
  }
});

const updateUniversity = asyncHandler(async (req, res) => {
  // try {
  const { id } = req.params;

  const university = await University.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (university) {
    res.json({
      status: "success",
      data: university,
    });
  } else {
    res.status(400);
    throw new Error("Can't update this University!");
  }
});

const deleteUniversity = asyncHandler(async (req, res) => {
  // try {
  const { id } = req.params;
  const university = await University.findByIdAndDelete(id);

  if (university) {
    res.json({
      status: "success",
      data: university,
    });
  } else {
    res.status(400);
    throw new Error("Can't delete this university!");
  }
});

module.exports = {
  setUniversity,
  getUniversities,
  getUniversity,
  updateUniversity,
  deleteUniversity,
};
