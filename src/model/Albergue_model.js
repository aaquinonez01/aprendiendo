import { Schema, model } from 'mongoose';

const albergueSchema = new Schema({
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

export default model('Albergue', albergueSchema);
