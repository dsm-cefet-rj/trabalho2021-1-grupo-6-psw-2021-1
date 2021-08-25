import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const consultasAdapter = createEntityAdapter();

const initialState = consultasAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array consultas foi removido do state inicial, será criado pelo adapter */
});

export const fetchConsultas = createAsyncThunk('consultas/fetchConsultas', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/Consultas`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteConsultaServer = createAsyncThunk('Consultas/deleteConsultaServer', async (idConsulta, {getState}) => {
    await httpDelete(`${baseUrl}/consultas/${idConsulta}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idConsulta;
});

export const addConsultaServer = createAsyncThunk('Consultas/addConsultaServer', async (consulta, {getState}) => {
    return await httpPost(`${baseUrl}/consultas`, consulta, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateConsultaServer = createAsyncThunk('consultas/updateConsultaServer', async (consulta, {getState}) => {
    return await httpPut(`${baseUrl}/consultas/${consulta.id}`, consulta, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const consultasSlice = createSlice({
    name: 'consultas',
    initialState: initialState,
    extraReducers: {
       [fetchConsultas.pending]: (state, action) => {state.status = 'loading'},
       [fetchConsultas.fulfilled]: (state, action) => {state.status = 'loaded'; consultasAdapter.setAll(state, action.payload);},
       [fetchConsultas.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteConsultaServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteConsultaServer.fulfilled]: (state, action) => {state.status = 'deleted'; consultasAdapter.removeOne(state, action.payload);},
       [addConsultaServer.pending]: (state, action) => {state.status = 'loading'},
       [addConsultaServer.fulfilled]: (state, action) => {state.status = 'saved'; consultasAdapter.addOne(state, action.payload);},
       [updateConsultaServer.pending]: (state, action) => {state.status = 'loading'},
       [updateConsultaServer.fulfilled]: (state, action) => {state.status = 'saved'; consultasAdapter.upsertOne(state, action.payload);},
    },
})

export default consultasSlice.reducer

export const {
    selectAll: selectAllConsultas,
    selectById: selectConsultasById,
    selectIds: selectConsultasIds
} = consultasAdapter.getSelectors(state => state.consultas)