import {helpers} from "@vuelidate/validators";

export const rfcRule = helpers.regex(/^[A-Z]{4}\d{6}[A-Z0-9]{3}$/);