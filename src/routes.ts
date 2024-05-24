import { Router } from 'express';
const router = Router();
import { getDomicilios, createDomicilio, updateDomicilio, deleteDomicilio } from './controller/Domicilio_controller.js';
import { getAlbergues, createAlbergue, updateAlbergue, deleteAlbergue } from './controller/Albergue_controller.js';
import { getSitiosSeguros, createSitioSeguro, updateSitioSeguro, deleteSitioSeguro } from './controller/Sitio_seguro_controller.js';
import { getPersonas, createPersona, updatePersona, deletePersona, login } from './controller/Persona_controller.js';

// Rutas para CRUD de Domicilio
router.get('/domicilios', getDomicilios);
router.post('/domicilios', createDomicilio);
router.put('/domicilios/:id', updateDomicilio); // Ruta para editar un domicilio
router.delete('/domicilios/:id', deleteDomicilio); // Ruta para eliminar un domicilio

// Rutas para CRUD de Albergue
router.get('/albergues', getAlbergues);
router.post('/albergues', createAlbergue);
router.put('/albergues/:id', updateAlbergue); // Ruta para editar un albergue
router.delete('/albergues/:id', deleteAlbergue); // Ruta para eliminar un albergue

// Rutas para CRUD de Sitios Seguros
router.get('/sitiosSeguros', getSitiosSeguros);
router.post('/sitiosSeguros', createSitioSeguro);
router.put('/sitiosSeguros/:id', updateSitioSeguro); // Ruta para editar un sitio seguro
router.delete('/sitiosSeguros/:id', deleteSitioSeguro); // Ruta para eliminar un sitio seguro

// Rutas para CRUD de Personas
router.get('/personas', getPersonas);
router.post('/personas', createPersona);
router.put('/personas/:id', updatePersona); // Ruta para editar una persona
router.delete('/personas/:id', deletePersona); // Ruta para eliminar una persona

//Ruta para login en la App
router.post('/login', login);

export default router;
