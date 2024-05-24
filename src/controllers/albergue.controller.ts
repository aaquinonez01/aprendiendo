import Albergue from "../model/Albergue_model.js";

// Controlador para obtener todos los albergues
export async function getAlbergues(req, res) {
  try {
    const albergues = await Albergue.find();
    res.json(albergues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controlador para crear un nuevo albergue
export async function createAlbergue(req, res) {
  const albergue = new Albergue({
    nombre: req.body.nombre,
    coordenadaX: req.body.coordenadaX,
    coordenadaY: req.body.coordenadaY,
  });

  try {
    const nuevoAlbergue = await albergue.save();
    res.status(201).json(nuevoAlbergue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Controlador para editar un albergue existente
export async function updateAlbergue(req, res) {
  const { id } = req.params;

  try {
    const albergue = await Albergue.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(albergue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Controlador para eliminar un albergue
export async function deleteAlbergue(req, res) {
  const { id } = req.params;

  try {
    await Albergue.findByIdAndDelete(id);
    res.json({ message: "Albergue eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
