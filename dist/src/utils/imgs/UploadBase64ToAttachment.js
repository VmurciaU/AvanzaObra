"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadAttachment = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const UploadAttachment = (file, nameApplication, namefile = '') => new Promise((resolve, reject) => {
    const responseData = {
        flag: false,
        msg: '',
        nameFile: '',
    };
    const fileNameNoSpaces = namefile.trim();
    const now = (0, moment_1.default)().format('YYYY-MM-DD');
    const fileName = `${fileNameNoSpaces}_${now}`;
    const validExtensions = [
        { proType: 'jpeg', type: 'jpeg' },
        { proType: 'jpg', type: 'jpg' },
        { proType: 'png', type: 'png' },
    ];
    const matches = file.match(/^data:.+\/(.+);base64,(.*)$/);
    const ext = matches[1];
    if (!validExtensions.find((valExt) => valExt.proType === ext)) {
        responseData.msg = `La extension ${ext}, no es permitida`;
        responseData.flag = false;
        reject(responseData);
    }
    const { type } = validExtensions.find((valExt) => valExt.proType === ext);
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const nameApp = nameApplication;
    const pathRouteShare = '../../app/public';
    const route = path_1.default.join(__dirname, pathRouteShare, '/uploads/', nameApp);
    const nameFile = `${route}/${fileName}.${type}`;
    if (fs_1.default.existsSync(nameFile)) {
        try {
            fs_1.default.unlinkSync(nameFile);
            console.log(`Archivo eliminado: ${nameFile}`);
        }
        catch (err) {
            console.error(`Error al eliminar el archivo: ${err}`);
        }
    }
    fs_1.default.mkdirSync(route, { recursive: true });
    fs_1.default.writeFile(nameFile, buffer, async (err) => {
        if (err !== null) {
            responseData.msg = 'Se presento un error al guardar';
            responseData.flag = false;
            responseData.nameFile = nameFile;
            reject(responseData);
        }
        responseData.msg = 'Se guardó la imagen correctamente';
        responseData.flag = true;
        responseData.nameFile = nameFile;
        resolve(responseData);
    });
});
exports.UploadAttachment = UploadAttachment;
//# sourceMappingURL=UploadBase64ToAttachment.js.map