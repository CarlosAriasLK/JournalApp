import { Link as RouterLink } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <form>
        <Grid container sx={{ mt: 1 }}>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1 }}>

            <Grid xs={12} sx={{ mt: 2, mr: 2 }} >
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid xs={12} sx={{ mt: 2, mr: 2 }} >
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register' >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};