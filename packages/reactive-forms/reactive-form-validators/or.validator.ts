import { AbstractControl } from "../abstract/abstract-control"
import { ValidatorFn } from '../models/interface/validator-fn'

import { ObjectMaker } from "../util/object-maker";
import { LogicalOperatorConfig } from "../models/config/logical-operator-config";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
import {getConfigObject} from "../util/config-provider";
import { APP_VALIDATORS } from "../const/app-validators.const"
export function orValidator(configModel: LogicalOperatorConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
    let config = getConfigObject(configModel,control);
    if (ValidatorValueChecker.pass(control, config)) {
      let validatorNames = Object.keys(config.validation);
      let failed:boolean = false;
      for(var validatorName of validatorNames){
        failed = typeof config.validation[validatorName] == "boolean" ?  APP_VALIDATORS[validatorName]()(control) :  APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
        if(!failed)
          break;
      }
      if (failed)
        return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
    }
    return ObjectMaker.null();
  }
}
