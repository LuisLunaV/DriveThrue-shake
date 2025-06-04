import { detectWindow } from './detectWindow.js';
import { comparePasswords, authFailure } from './validateAuthenticationFields.js'
import { formData } from './formData.js';
import { validateSessionToken, validateRolBitacora } from './validateSessionData.js';
import { singOff } from './singOff.js';
export{
    formData,
    detectWindow,
    comparePasswords,
    authFailure,
    validateSessionToken,
    validateRolBitacora,
    singOff
}