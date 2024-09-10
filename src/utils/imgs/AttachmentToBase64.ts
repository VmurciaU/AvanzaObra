// importaciones de librerias
import * as fs from 'fs';
import path from 'path';

export const AttachmentToBase64 = async (nameFile: string) => {
  const route = nameFile; // ruta de la ubicacion del archivo
  type objectResultT = {
    ext: string,
    flag: boolean,
    file: string,
  }

  const objectResult: objectResultT = {
    ext: '',
    flag: false,
    file: '',
  };

  // validamos si la ruta exite con el archivo
  if (fs.existsSync(route)) {
    const ext = path.extname(route).replace('.', '');
    // validacmos si el archivo existe en al ruta
    const dataurl = fs.readFileSync(route);
    const dataResult = dataurl.toString('base64');
    objectResult.file = `data:image/${ext};base64,${dataResult}`;
    objectResult.ext = ext;
    objectResult.flag = true;
    return (objectResult);
  }
  objectResult.file = '';
  objectResult.ext = '';
  objectResult.flag = false;
  return (objectResult);
};
