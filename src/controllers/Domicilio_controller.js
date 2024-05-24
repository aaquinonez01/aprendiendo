import Domicilio from '../model/Domicilio_model.js';

// Controlador para obtener todos los domicilios
export async function getDomicilios(req, res) {
  try {
    const domicilios = await Domicilio.find();
    res.json(domicilios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controlador para crear un nuevo domicilio
export async function createDomicilio(req, res) {
  const domicilio = new Domicilio({
    nombre: req.body.nombre,
    coordenadaX: req.body.coordenadaX,
    coordenadaY: req.body.coordenadaY,
  });

  try {
    const nuevoDomicilio = await domicilio.save();
    res.status(201).json(nuevoDomicilio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Controlador para editar un domicilio existente
export async function updateDomicilio(req, res) {
  const { id } = req.params;
  
  try {
    const domicilio = await Domicilio.findByIdAndUpdate(id, req.body, { new: true });
    res.json(domicilio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
  
// Controlador para eliminar un domicilio
export async function deleteDomicilio(req, res) {
  const { id } = req.params;
  
  try {
    await Domicilio.findByIdAndDelete(id);
    res.json({ message: 'Domicilio eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
