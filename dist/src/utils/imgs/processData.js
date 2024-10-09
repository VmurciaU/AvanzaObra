"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = void 0;
const AttachmentToBase64_1 = require("./AttachmentToBase64");
const processData = async (data) => {
    const arrayAttached = await Promise.all(data.map(async (device) => {
        const [result1, result2, result3, result4, result5] = await Promise.all([
            (0, AttachmentToBase64_1.AttachmentToBase64)(device.foto),
            device.photoDevices[0] ? (0, AttachmentToBase64_1.AttachmentToBase64)(device.photoDevices[0].foto1) : Promise.resolve({ flag: false, file: '', ext: '' }),
            device.photoDevices[0] ? (0, AttachmentToBase64_1.AttachmentToBase64)(device.photoDevices[0].foto2) : Promise.resolve({ flag: false, file: '', ext: '' }),
            device.photoDevices[0] ? (0, AttachmentToBase64_1.AttachmentToBase64)(device.photoDevices[0].foto3) : Promise.resolve({ flag: false, file: '', ext: '' }),
            device.photoDevices[0] ? (0, AttachmentToBase64_1.AttachmentToBase64)(device.photoDevices[0].foto4) : Promise.resolve({ flag: false, file: '', ext: '' }),
        ]);
        const hasPhotos = result2.flag || result3.flag || result4.flag || result5.flag;
        return Object.assign(Object.assign({}, device), { flag: result1.flag, ext: result1.ext, file: result1.file, file1: hasPhotos ? result2.file : null, file2: hasPhotos ? result3.file : null, file3: hasPhotos ? result4.file : null, file4: hasPhotos ? result5.file : null });
    }));
    return arrayAttached;
};
exports.processData = processData;
//# sourceMappingURL=processData.js.map