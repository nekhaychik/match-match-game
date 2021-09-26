import { BaseComponent } from '../base/base-component';
import './form-registr.scss';

export class FormRegistration extends BaseComponent {
  private formRegistr: FormRegistration[] = [];

  constructor() {
    super('form', ['iw-modal__form']);
    this.element.setAttribute('id', 'form-registration');
    this.element.innerHTML = `
      <div class="iw-modal__CSS-inner">
        <div class="iw-modal__header">
          <h3 class="iw-modal__title">Registr new Player</h3>
        </div>
        <div class="iw-modal__text">    
          <p><input name="First_Name" id="First_Name" type="text" placeholder="First Name" 
            class="iw-modal__text-input"></p>
          <p class="textMessage" id="nameMessage">input first name</p>
          <p><input name="Last_Name" id="Last_Name" type="text" placeholder="Last Name" 
            class="iw-modal__text-input"></p>
          <p class="textMessage" id="surnameMessage">input last name</p>
          <p><input name="E-mail" id="E-mail" type="email" placeholder="E-mail" class="iw-modal__text-input"></p>
          <p class="textMessage" id="emailMessage">input e-mail</p>
          <a href="#close" id="cancle" class="iw-modal__btn-close">CANCEL</a>
          <input id="addUser" type="button" class="iw-modal__btn-add" value="ADD USER"></input>
          <div class = "registration-block" id="addUserOK">
            <p class="message">The entered data has been verified!
            Press the button "CONTINUE" to continue</p>
            <a href="#close" id="addUserOK" type="button" class="iw-modal__btn-add-ok">CONTINUE</a>
          </div>
  
        </div>
    `;
  }

  async addFormRegistr(): Promise<void> {
    this.formRegistr.forEach((form) => this.element.appendChild(form.element));
  }
}
