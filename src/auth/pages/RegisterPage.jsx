import { Link as RouterLink } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container sx={{ mt: 1 }}>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid xs={12}  sx={{ mt: 2 }} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1 }}>

            <Grid xs={12} sx={{ mt: 2 }} >
              <Button variant="contained" fullWidth>
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