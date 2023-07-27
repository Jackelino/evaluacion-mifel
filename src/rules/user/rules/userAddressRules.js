import {userAddressMessages} from "./messages/userAddressMessages.js";
import {alpha, alphaNum, helpers, maxLength, minLength, numeric, required} from "@vuelidate/validators";

export const userAddressRules = {
    cp: {
        required: helpers.withMessage(userAddressMessages.cp.required, required),
        numeric: helpers.withMessage(userAddressMessages.cp.numeric, numeric),
        minLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.cp.minLength, minLength(5)),
        maxLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.cp.maxLength, maxLength(5)),
    },
    calle: {
        required: helpers.withMessage(userAddressMessages.calle.required, required)
    },
    numeroExterior: {
        required: helpers.withMessage(userAddressMessages.numeroExterior.required, required),
        numeric: helpers.withMessage(userAddressMessages.numeroExterior.numeric, numeric),
        minLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.numeroExterior.minLength, minLength(5)),
        maxLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.numeroExterior.maxLength, maxLength(5)),
    },
    numeroInterior: {
        alphaNum: helpers.withMessage(userAddressMessages.numeroInterior.alphaNum, alphaNum),
        minLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.numeroInterior.minLength, minLength(10)),
        maxLength: helpers.withMessage(({
                                            $pending,
                                            $invalid,
                                            $params,
                                            $model
                                        }) => userAddressMessages.numeroExterior.maxLength, maxLength(10)),
    },
    estado: {
        required: helpers.withMessage(userAddressMessages.estado.required, required),
        alpha: helpers.withMessage(userAddressMessages.estado.alpha, alpha),
    },
    delegacionMunicipo: {
        required: helpers.withMessage(userAddressMessages.delegacionMunicipo.required, required),
        alpha: helpers.withMessage(userAddressMessages.delegacionMunicipo.alpha, alpha),
    },
    colonia: {
        required: helpers.withMessage(userAddressMessages.colonia.required, required),
        alpha: helpers.withMessage(userAddressMessages.colonia.alpha, alpha),
    }
}
