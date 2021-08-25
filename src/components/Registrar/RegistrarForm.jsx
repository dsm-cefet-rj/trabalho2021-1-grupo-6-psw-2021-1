import React, { useState } from 'react';
import { TextField,Button, FormControl, InputLabel, MenuItem,  Select, makeStyles } from "@material-ui/core";
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function RegistrarForm({aoEnviar, validarCPF}) {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    const classes = useStyles();
    const handleChange = (event) => {
      setTipo(event.target.value);
      if(tipo === 1){
          return ( <form> <TextField
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
            id="nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
        /> </form>)
      }
    };
      return(

    <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({nome, sobrenome, cpf, senha, email, telefone, tipo});
        }}
    >
        
    <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
    />
    <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
    />

<TextField
value={senha}
onChange={(event) => {
  setSenha(event.target.value);
}}
          id="senha"
          label="Senha"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          margin="normal"
        fullWidth
        />

<TextField
          id="confirmar-senha"
          label="Confirmar senha"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          margin="normal"
        fullWidth
        />

<TextField
value={email}
onChange={(event) => {
  setEmail(event.target.value);
}}
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
    />
<TextField
value={telefone}
onChange={(event) => {
  setTelefone(event.target.value);
}}
          id="telefone"
          label="Telefone"
          type="tel"
          variant="outlined"
            margin="normal"
            fullWidth
        />
        <FormControl className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-label" >Logar como</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
            margin="normal"
            fullWidth
            value={tipo}
          onChange={handleChange}
        >
          <MenuItem value={1}>Psicólogo</MenuItem>
          <MenuItem value={2}>Paciente</MenuItem>
        </Select>
      </FormControl>
      <Link to="/pac"><Button class="nav-link active" type="submit" variant="contained" color="primary" onClick={() => alert('Conta criada com sucesso! ')}>Cadastrar</Button></Link>
      </form>

    
    );
}

export default RegistrarForm;
  
