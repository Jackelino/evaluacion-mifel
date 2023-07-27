import {userInfoMessages} from "./messages/userInfoMessages.js";
import {alpha, helpers, required} from "@vuelidate/validators";
import {curpRule} from "../../new-rules/curpRule.js";
import {rfcRule} from "../../new-rules/rfcRule.js";

export const userInfoRules = {
    nombre: {
        required: helpers.withMessage(userInfoMessages.nombre.required, required),
        alpha: helpers.withMessage(userInfoMessages.nombre.alpha, alpha)
    },
    primerApellido: {
        required: helpers.withMessage(userInfoMessages.primerApellido.required, required),
        alpha: helpers.withMessage(userInfoMessages.primerApellido.alpha, alpha)
    },
    segundoApellido: {
        required: helpers.withMessage(userInfoMessages.segundoApellido.required, required),
        alpha: helpers.withMessage(userInfoMessages.segundoApellido.alpha, alpha)
    },
    curp: {
        required: helpers.withMessage(userInfoMessages.curp.required, required),
        curpRule: helpers.withMessage(userInfoMessages.curp.curpRule, curpRule)
    },
    rfc: {
        required: helpers.withMessage(userInfoMessages.rfc.required, required),
        rfcRule: helpers.withMessage(userInfoMessages.rfc.rfcRule, rfcRule)
    }
}