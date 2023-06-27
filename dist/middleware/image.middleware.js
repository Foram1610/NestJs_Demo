"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'avatar') {
            cb(null, 'public/avatar');
        }
        else if (file.fieldname === 'image') {
            cb(null, 'public/scienceFair');
        }
        else {
            cb(null, 'public');
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
exports.upload = multer({
    storage: storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|webp)$/)) {
            return cb(new Error(('This Image type is not proper type for upload the image!!')), false);
        }
        cb(undefined, true);
    }
});
//# sourceMappingURL=image.middleware.js.map