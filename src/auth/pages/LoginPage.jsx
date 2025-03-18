import { Link as RouterLink } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  
  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'ejemplo@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = ( e ) => {
    e.preventDefault();
    dispatch( checkingAuthentication() )

    console.log({ email, password });
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
    console.log("onGoolgeSignIn")
  }
  
  
  
  return (
    <AuthLayout title="login">
      <form onSubmit={ onSubmit }>
        <Grid container sx={{ mt: 1 }}>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1 }}>

            <Grid xs={12} sx={{ mt: 2, mr: 2 }} >
              <Button 
                disabled={ isAuthenticating }
                type="submit" 
                variant="contained" 
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mr: 2 }} >
              <Button 
                disabled={ isAuthenticating }
                onClick={ onGoogleSignIn } 
                variant="contained" 
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to='/auth/register' >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};