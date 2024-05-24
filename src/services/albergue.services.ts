import albergue from "../model/Albergue_model";

export class AlbergueService {
  static async getAlbergues() {
    try {
      return await albergue.find();
    } catch (error) {
      throw error;
    }
  }

  static async createAlbergue(newAlbergue) {
    try {
      return await albergue.create(newAlbergue);
    } catch (error) {
      throw error;
    }
  }

  static async updateAlbergue(id, albergue) {
    try {
      return await albergue.findByIdAndUpdate(id, albergue, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async deleteAlbergue(id) {
    try {
      await albergue.findByIdAndDelete(id);
      return { message: "Albergue eliminado correctamente" };
    } catch (error) {
      throw error;
    }
  }
}
