import { Router } from "express";

import { upload1080x1920, upload1080x1152 } from "../config/multerConfig";
import { uploadFiles } from "../controller/upload.controller";
const router = Router();


router.get("/allImages1080x1920", uploadFiles.readDirectory1080x1920);
router.get("/allImages1080x1152", uploadFiles.readDirectory1080x1152);

router.post(
  "/single1080x1920",
  upload1080x1920.single("myImages"),
  uploadFiles.uploadImage
);
router.post(
  "/single1080x1152",
  upload1080x1152.single("myImages"),
  uploadFiles.uploadImage
);

router.delete("/single1080x1920/:id", uploadFiles.deleteImage1080x1920);
router.delete("/single1080x1152/:id", uploadFiles.deleteImage1080x1152);

export default router;
