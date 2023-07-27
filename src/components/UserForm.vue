<script setup>
import {reactive, ref} from 'vue';
import {useVuelidate} from '@vuelidate/core';
import {userInfoRules} from "../rules/user/rules/userInfoRules.js";
import {userAddressRules} from "../rules/user/rules/userAddressRules.js";
import UserService from "../services/UserService.js";
import {Modal} from 'usemodal-vue3';

// DATA
const initUserInfo = {
  nombre: '',
  primerApellido: '',
  segundoApellido: '',
  curp: '',
  rfc: ''
}
const initUserAddress = {
  cp: null,
  calle: '',
  numeroExterior: null,
  numeroInterior: null,
  estado: '',
  delegacionMunicipo: '',
  colonia: ''

}
const userInfo = reactive(initUserInfo);
const userAddress = reactive(initUserAddress);
const vInfo$ = useVuelidate(userInfoRules, userInfo);
const vAddress$ = useVuelidate(userAddressRules, userAddress);
const errors = ref([]);
const message = ref('');
const showModal = ref(false);

/**
 * Valida y envia la información
 * @returns {Promise<void>}
 */
const submit = async () => {
  if (vInfo$.value.$invalid === true || vAddress$.value.$invalid === true) {
    errors.value = [...vInfo$.value.$silentErrors, ...vAddress$.value.$silentErrors]
    message.value = 'Existen campos por validar';
    showModal.value = true;
  } else {
    message.value = 'Campos validados correctamente';
    showModal.value = true;
    const data = {
      infoUsuario: userInfo,
      Domicilio: userAddress
    }
    await UserService.saveData({data});
  }
}
/**
 * Devuelve true si el campo actual tiene errores
 * @param  {String} fieldName campo de validacion
 * @returns {UnwrapRefSimple<*>}
 */
const isErrorField = (fieldName) => {
  return errors.value.find((item) => item.$property === fieldName)
}

</script>

<template>
  <div class="container">
    <div class="container text-center m-5">
      <h2>Identificación</h2>
    </div>
    <div class="container">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="inputName" class="form-label">Nombre*</label>
          <input type="text" v-model.trim="userInfo.nombre" class="form-control"
                 :class="{'is-invalid': isErrorField('nombre')}" id="inputName"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vInfo$.nombre.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputFirstName" class="form-label">Primer apellido*</label>
          <input type="text" v-model.trim="userInfo.primerApellido" class="form-control"
                 :class="{'is-invalid': isErrorField('primerApellido')}" id="inputFirstName"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vInfo$.primerApellido.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputSecond" class="form-label">Segundo apellido*</label>
          <input type="text" v-model.trim="userInfo.segundoApellido" class="form-control"
                 :class="{'is-invalid': isErrorField('segundoApellido')}" id="inputSecond"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vInfo$.segundoApellido.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputCurp" class="form-label">CURP*</label>
          <input type="text" v-model.trim="userInfo.curp" class="form-control"
                 :class="{'is-invalid': isErrorField('curp')}" id="inputCurp"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vInfo$.curp.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputRfc" class="form-label">RCF(con homoclave)*</label>
          <input type="text" v-model.trim="userInfo.rfc" class="form-control"
                 :class="{'is-invalid': isErrorField('rfc')}" id="inputRfc"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vInfo$.rfc.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-2">
          <label for="inputPostalCode" class="form-label">Código postal*</label>
          <input type="text" v-model.trim="userAddress.cp" class="form-control" maxlength="5"
                 :class="{'is-invalid': isErrorField('cp')}" id="inputPostalCode"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.cp.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-10">
          <label for="inputAddress" class="form-label">Calle*</label>
          <input type="text" v-model.trim="userAddress.calle" class="form-control"
                 :class="{'is-invalid': isErrorField('calle')}" id="inputAddress"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.calle.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputOutdoorNumber" class="form-label">Número exterior*</label>
          <input type="text" v-model.number="userAddress.numeroExterior" class="form-control" maxlength="5"
                 :class="{'is-invalid': isErrorField('numeroExterior')}" id="inputOutdoorNumber"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.numeroExterior.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputInteriorNumber" class="form-label">Número interior</label>
          <input type="text" v-model.number="userAddress.numeroInterior" class="form-control" maxlength="10"
                 :class="{'is-invalid': isErrorField('numeroInterior')}" id="inputInteriorNumber"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.numeroInterior.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputInteriorNumber" class="form-label">Estado*</label>
          <input type="text" v-model.trim="userAddress.estado" class="form-control"
                 :class="{'is-invalid': isErrorField('estado')}" id="inputInteriorNumber"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.estado.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputDelegation" class="form-label">Delegación/Municipio*</label>
          <input type="text" v-model.trim="userAddress.delegacionMunicipo" class="form-control"
                 :class="{'is-invalid': isErrorField('delegacionMunicipo')}" id="inputDelegation"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.delegacionMunicipo.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputColony" class="form-label">Colonia*</label>
          <input type="text" v-model.trim="userAddress.colonia" class="form-control"
                 :class="{'is-invalid': isErrorField('colonia')}" id="inputColony"/>
          <div id="validationNameFeedback" class="invalid-feedback"
               v-for="error of vAddress$.colonia.$silentErrors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="col-12 text-center">
          <button type="submit" class="btn btn-secondary text-light" @click.prevent="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
  <Modal v-model:visible="showModal" title="">
    <div> {{ message }}</div>
  </Modal>
</template>

<style scoped>

</style>