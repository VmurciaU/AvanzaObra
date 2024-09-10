/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import file
import fs from 'fs';
import path from 'path';
import moment from 'moment';

// tipado de objeto de respuesta
export type UploadAttachmentT = {
  flag: boolean,
  msg: string,
  nameFile: string,
}

/**
 * función para el tratamiento de imagen url base64

 * @param {function}  file - data de la imagen codificada en base64
 * @param {function}  file - data de la imagen codificada en base64
 * @param {string} nameApplication - Nombre de la aplicación
 * @param {string} namefile - Nombre del archivo (opcional)
 * @returns {Promise<UploadAttachmentT>} - Promesa que devuelve el resultado del proceso
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const UploadAttachment = (
  file: any,
  nameApplication: string,
  namefile: string = '',
): Promise<UploadAttachmentT> => new Promise<UploadAttachmentT>((resolve, reject) => {
  //  Declaraciones de objecto de salida
  const responseData: UploadAttachmentT = {
    flag: false,
    msg: '',
    nameFile: '',
  };

  // realizamos transformación el nombre
  const fileNameNoSpaces = namefile.trim(); // 'Actividades ABC y Actividades Internas'

  const now = moment().format('YYYY-MM-DD');
  const fileName = `${fileNameNoSpaces}_${now}`;

  // extensiones permitidas
  const validExtensions = [
    { proType: 'jpeg', type: 'jpeg' }, // imagen
    { proType: 'jpg', type: 'jpg' }, // imagen
    { proType: 'png', type: 'png' }, // imagen
  ];

  // decodificamos la url de la imagen
  const matches = file.match(/^data:.+\/(.+);base64,(.*)$/);
  const ext = matches[1]; // obtenemos la extension

  // validación de extensiones
  if (!validExtensions.find((valExt) => valExt.proType === ext)) {
    responseData.msg = `La extension ${ext}, no es permitida`;
    responseData.flag = false;
    reject(responseData);
  }

  const { type }: any = validExtensions.find((valExt) => valExt.proType === ext);

  //  codificamos la imagen en base64 url
  const base64Data = matches[2]; // seleccionamos la url cifrada sin el tipo
  const buffer = Buffer.from(base64Data, 'base64'); // definimos el tipo de formato en el llega la imagen
  const nameApp = nameApplication; // damos el nombre de la carpeta para su creación en caso de que no exista
  const pathRouteShare = '../../app/public';// ruta de comparto en servidor
  const route = path.join(__dirname, pathRouteShare, '/uploads/', nameApp); // ruta para disponer el archivo
  const nameFile = `${route}/${fileName}.${type}`; // nombre del documento

  // Verificamos si el archivo ya existe y lo eliminamos si es así
  if (fs.existsSync(nameFile)) {
    try {
      fs.unlinkSync(nameFile);
      console.log(`Archivo eliminado: ${nameFile}`);
    } catch (err) {
      console.error(`Error al eliminar el archivo: ${err}`);
    }
  }

  // ejecutamos función recursiva para validar la existencia del directorio
  fs.mkdirSync(route, { recursive: true });

  // escribimos la imagen en el directorio
  fs.writeFile(nameFile, buffer, async (err) => {
    // validamos si se presenta error al guardar el documento / imagen en el directorio
    if (err !== null) {
      responseData.msg = 'Se presento un error al guardar';
      responseData.flag = false;
      responseData.nameFile = nameFile;
      reject(responseData);
    }

    // si no tenemos ningun error enviamos la siguiente respuesta
    responseData.msg = 'Se guardó la imagen correctamente';
    responseData.flag = true;
    responseData.nameFile = nameFile;
    resolve(responseData);
  });
});
