import { Link as RouterLink } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Alert, Button, Link } from '@mui/material';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

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


  const { status, errorMessage } = useSelector( state => state.auth ); 

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


  const dispatch = useDispatch();

  const { 
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited( true );

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }


  return (
    <AuthLayout title="Crear Cuenta">

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
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

            <Grid 
              xs={12} 
              sx={{ mt: 2 }} 
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid xs={12} sx={{ mt: 2 }} >
              <Button 
                disabled={ isCheckingAuthentication }
                variant="contained" 
                type="submit" 
                fullWidth
              >
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