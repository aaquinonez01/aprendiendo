import { Schema, model } from 'mongoose';

const sitioSeguroSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  coordenadaX: {
    type: Number,
    required: true
  },
  coordenadaY: {
    type: Number,
    required: true
  }
});

export default model('SitioSeguro', sitioSeguroSchema);
