// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface SignInForm {
  variants: Variants;
}

export interface Variants {
  LOGIN: Login;
  REGISTER: Login;
}

export interface Login {
  fields: Field[];
  submitButtonLabel: string;
}

export interface Field {
  name: string;
  label: string;
  placeholder: string;
  description: string;
}
