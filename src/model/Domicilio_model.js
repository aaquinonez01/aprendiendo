import { Schema, model } from 'mongoose';

const domicilioSchema = new Schema({
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

export default model('Domicilio', domicilioSchema);
