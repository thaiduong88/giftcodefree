const express = require("express");
const controller = require("../controller/giaoDienController");
const router = express.Router();

router.get("/", controller.getHome);
router.get("/code-boc-club", controller.getCodeBocPage);
router.get("/nhan-code-go88", controller.getCodego88);
router.get("/nhan-code-sunwin", controller.getCodesunwin);
router.get("/nhan-code-88vin", controller.getCode88vin);
router.get("/nhan-code-sun-bet", controller.getCodesunbet);
router.get("/nhan-code-b99", controller.getCodeb99);
router.get("/nhan-code-bayvip", controller.getCodebayvip);
router.get("/nhan-code-no-hu-club", controller.getCodenohuclub);
router.get("/nhan-code-b52-club", controller.getCodeb52club);
router.get("/nhan-code-choang-club", controller.getCodechoangclub);
router.get("/nhan-code-yo88", controller.getCodebenvipclub);
router.get("/nhan-code-789-club", controller.getCode789club);
router.get("/nhan-code-rik-vip", controller.getCoderikvip);
router.get("/nhan-code-rio66", controller.getCoderio66);
router.get("/code-binh88", controller.getCodebinh88);
router.get("/nhan-code-b29", controller.getCodeb29);
router.get("/nhan-code-bum68", controller.getCodebum68);
router.get("/code-nhatvip", controller.getCodenhatvip);
router.get("/nhan-code-x8", controller.getCodex8);
router.get("/nhan-code-top88", controller.getCodetop88);
router.get("/nhan-code-loc-club", controller.getCodelocclub);
router.get("/login-get-gift-code", controller.getCode);

module.exports = router;
