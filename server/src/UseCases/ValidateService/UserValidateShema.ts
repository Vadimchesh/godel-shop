import * as Yup from 'yup';
const UserValidateShema = Yup.object({
  email: Yup.string().email('Its not email').required('Email is required').typeError('Incorect email'),
  password: Yup.string().min(6).required('Password is required').typeError('Incorect password'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .typeError('Incorect password confirmation'),
});

export default UserValidateShema;
