import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let consultaSchema = object().shape(
    {
        nome: string().required().max(30),
        horario: string().required().max(5),
        dia: string()
    }
)