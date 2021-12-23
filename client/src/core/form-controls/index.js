import NameFormControl from "./clients-form-controls/NameFormControl";
import EmailFormControl from "./clients-form-controls/EmailFormControl";
import CompanyFormControl from "./clients-form-controls/CompanyFormControl";
import TypeClientFormControl from "./clients-form-controls/TypeClientFormControl";
import AgeFormControl from "./clients-form-controls/AgeFormControl";
import LastNameFormControl from "./clients-form-controls/LastNameFormControl";
import EmailsFormControl from "./clients-form-controls/EmailsFormControl";

import CustomTextInputComponent from "./custom-form-controls/text-input.custom";
const clientForms = {
  NameFormControl,
  CompanyFormControl,
  EmailFormControl,
  TypeClientFormControl,
  AgeFormControl,
  LastNameFormControl,
  EmailsFormControl,
};

export { clientForms, CustomTextInputComponent };
