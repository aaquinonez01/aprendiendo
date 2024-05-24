import { findById } from '../model/Domicilio_model.js';
import { find } from '../model/Albergue_model.js';
import Persona, { findOne, find as _find, findByIdAndUpdate, findByIdAndDelete } from '../model/Persona_model.js';


// Controlador para validar el inicio de sesión
export async function login(req, res) {
    const { nombre, cedula } = req.body;

    try {
        // Buscar una persona con el nombre proporcionado
        const persona = await findOne({ nombres: nombre });

        if (persona) {
            // Si se encuentra una persona con el nombre, verificar si la cédula coincide
            if (persona.cedula === cedula) {
                // Si la cédula coincide, el inicio de sesión es exitoso
                res.status(200).json({ message: 'Inicio de sesión exitoso', persona: persona });
            } else {
                // Si la cédula no coincide, mostrar un mensaje de error
                res.status(401).json({ message: 'Cédula incorrecta' });
            }
        } else {
            // Si no se encuentra una persona con el nombre proporcionado, mostrar un mensaje de error
            res.status(401).json({ message: 'Nombre no encontrado' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: error.message });
    }
}




// Función para calcular la distancia entre dos puntos en coordenadas cartesianas
function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Controlador para crear una nueva persona
export async function createPersona(req, res) {
    const { nombres, apellidos, cedula, correoElectronico, edad, enfermedadesAlergias, medicamentos, lugarResidencia } = req.body;

    try {
        // Buscar el domicilio seleccionado por el usuario
        const domicilioSeleccionado = await findById(lugarResidencia);

        if (!domicilioSeleccionado) {
            return res.status(400).json({ message: 'El domicilio seleccionado no existe' });
        }

        // Buscar todos los albergues
        const albergues = await find();

        // Calcular la distancia entre el domicilio seleccionado y cada albergue
        const distancias = albergues.map(albergue => {
            return {
                _id: albergue._id,
                nombre: albergue.nombre,
                distancia: calcularDistancia(domicilioSeleccionado.coordenadaX, domicilioSeleccionado.coordenadaY, albergue.coordenadaX, albergue.coordenadaY)
            };
        });

        // Encontrar el albergue más cercano
        const albergueMasCercano = distancias.reduce((prev, current) => {
            return (prev.distancia < current.distancia) ? prev : current;
        });

        // Crear la nueva persona con el albergue asignado
        const nuevaPersona = new Persona({
            nombres,
            apellidos,
            cedula,
            correoElectronico,
            edad,
            enfermedadesAlergias,
            medicamentos,
            lugarResidencia: domicilioSeleccionado.nombre,
            albergue: albergueMasCercano.nombre, // Asignar el albergue más cercano
            qrURL: req.body.qrURL
        });

        // Guardar la nueva persona en la base de datos
        await nuevaPersona.save();

        res.status(201).json(nuevaPersona);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Controlador para obtener todas las personas
export async function getPersonas(req, res) {
    try {
        const personas = await _find();
        res.json(personas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controlador para editar una persona existente
export async function updatePersona(req, res) {
    const { id } = req.params;
  
    try {
        const persona = await findByIdAndUpdate(id, req.body, { new: true });
        res.json(persona);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
  
// Controlador para eliminar una persona
export async function deletePersona(req, res) {
    const { id } = req.params;
  
    try {
        await findByIdAndDelete(id);
        res.json({ message: 'Persona eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

