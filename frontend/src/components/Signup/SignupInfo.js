import * as React from "react";

//MUI Library
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function SignUpInfo({formData, setFormData}) {

  //Handle change of multiple inputs
  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          value={formData.firstName}
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          autoComplete="family-name"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={formData.email}
          autoComplete="email"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          name="password"
          value={formData.password}
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          autoComplete="confirm-password"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
