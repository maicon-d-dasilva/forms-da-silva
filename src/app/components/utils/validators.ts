import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const boilerNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if(control.value.includes("coco")){

        return{
            boilerFound: true,
        }
    }
    if(control.value.includes("pepe")){

        return{
            boilerFound: true,
        }
    } 
    if(control.value.includes("juancito")){

        return{
            boilerFound: true,
        }
    } 

    return null;
}