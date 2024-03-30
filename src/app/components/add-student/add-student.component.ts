import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { boilerNameValidator } from '../utils/validators'

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.addUserForm = this.formBuilder.group({
      nombre: this.formBuilder.control("", [Validators.required, Validators.minLength(3), boilerNameValidator]),
      localidad: this.formBuilder.control("", Validators.required),
      calificacion: this.formBuilder.control("", Validators.required),
      avatar: this.formBuilder.control("", Validators.required)

    })

  }

  get nombreControl(){
    return this.addUserForm.get('nombre')
  }
  get localidadControl(){
    return this.addUserForm.get('localidad')
  }
  get califControl(){
    return this.addUserForm.get('calificacion')
  }
  get avatarControl(){
    return this.addUserForm.get('avatar')
  }

  onSubmit(): void{
    alert('Pronto podrás agregar usuarios al sistema!')
  }

}
