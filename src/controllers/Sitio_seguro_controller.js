import SitioSeguro, { find, findByIdAndUpdate, findByIdAndDelete } from '../model/Sitio_seguro_model.js';

// Controlador para obtener todos los sitios seguros
export async function getSitiosSeguros(req, res) {
  try {
    const sitiosSeguros = await find();
    res.json(sitiosSeguros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controlador para crear un nuevo sitio seguro
export async function createSitioSeguro(req, res) {
  const sitioSeguro = new SitioSeguro({
    nombre: req.body.nombre,
    coordenadaX: req.body.coordenadaX,
    coordenadaY: req.body.coordenadaY,
  });

  try {
    const nuevoSitioSeguro = await sitioSeguro.save();
    res.status(201).json(nuevoSitioSeguro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Controlador para editar un sitio seguro existente
export async function updateSitioSeguro(req, res) {
  const { id } = req.params;
  
  try {
    const sitioSeguro = await findByIdAndUpdate(id, req.body, { new: true });
    res.json(sitioSeguro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
  
// Controlador para eliminar un sitio seguro
export async function deleteSitioSeguro(req, res) {
  const { id } = req.params;
  
  try {
    await findByIdAndDelete(id);
    res.json({ message: 'Sitio seguro eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
