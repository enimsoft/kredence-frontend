import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Login.module.css";

const useStyles = (theme) => ({
  fields: {
    margin: "20px 0",
  },
  submit: {
    width: "max-content",
    margin: "20px 0",
    fontSize: "15px",
    textTransform: "none",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Admin Portal</h1>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.content}>
            <TextField
              id="input-with-icon-textfield"
              className={classes.fields}
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="input-with-icon-textfield"
              className={classes.fields}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Login);
