import APOD from "../models/APOD.js";

export const getApods = async (req, res) => {
  try {
    const apods = await APOD.find();
    res.json(apods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getApod = async (req, res) => {
  try {
    const { id } = req.params;
    const apod = await APOD.findById(id);

    if (apod) {
      return res.json(apod);
    }

    res.status(404).json({ message: "Character not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createApod = async (req, res) => {
  try {
    const apod = new APOD(req.body);
    await apod.save();

    res.status(201).json(apod);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateApod = async (req, res) => {
  try {
    const { id } = req.params

    const apod = await APOD.findByIdAndUpdate(id, req.body)

    res.status(201).json(apod)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const deleteApod = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await APOD.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Character Deleted")
    }

    throw new Error("Character not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}