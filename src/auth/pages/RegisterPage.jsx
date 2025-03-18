import { Link as RouterLink } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener mas de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}


export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);


  const { 
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);


  console.log(isFormValid)


  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited( true );
    console.log(formState);
  }


  return (
    <AuthLayout title="Crear Cuenta">

      <form onSubmit={ onSubmit } >
        <Grid container sx={{ mt: 1 }}>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmited }
              helperText={ emailValid }
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1 }}>

            <Grid xs={12} sx={{ mt: 2 }} >
              <Button variant="contained" type="submit" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>


          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login' >
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};