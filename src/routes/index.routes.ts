import { Router } from "express";
import { AlbergueRoutes } from "./albergue.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/albergues", AlbergueRoutes.routes);

    return router;
  }
}
