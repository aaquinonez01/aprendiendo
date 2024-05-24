// src/config/database.ts

import mongoose from "mongoose";

class Database {
  private static instance: Database;

  private constructor() {
    this.connect();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private connect(): void {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/your-db";

    mongoose
      .connect(uri)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((error) => {
        console.error("Database connection error:", error);
      });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });
  }
}

export default Database.getInstance();
