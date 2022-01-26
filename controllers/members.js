const Members = require("../Models/EIT_Member");

const getAllMembers = async (req, res) => {
  try {
    const member = await Members.find({});
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getMember = async (req, res) => {
  const member = await Members.findById(req.params.id);
  res.status(200).json({ member });
};
const createMember = async (req, res) => {
  try {
    const member = await Members.create(req.body);
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const member = await Members.findByIdAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Members.findByIdAndDelete({ _id: id });
    if (!member) {
      res.status(404).json({ msg: `Not Found ${id}` });
      return;
    }
    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
};
