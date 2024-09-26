import express from "express";
import { isAuthenticate } from "../middleware/verifyToken.js";
import {
  getMessage,
  sendMessage,
  deleteMessage,
} from "../controller/message.controller.js";

const router = express.Router();

router.get("/:id", isAuthenticate, getMessage);
router.post("/send/:id", isAuthenticate, sendMessage);

// router.delete("/delete/:messageId", isAuthenticate, deleteMessage);

// router.delete("/delete/:messageId", isAuthenticate, (req, res, next) => {
//   console.log("Delete request received for messageId:", req.params.messageId);
//   deleteMessage(req, res, next);
// });

router.delete("/delete/:messageId", isAuthenticate, deleteMessage);

export default router;
