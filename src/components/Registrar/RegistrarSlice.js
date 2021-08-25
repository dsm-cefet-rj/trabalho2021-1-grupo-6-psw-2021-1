import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'
import {baseUrl} from '../baseUrl'

const registrosAdapter = createEntityAdapter();

const initialState = registrosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array registros foi removido do state inicial, será criado pelo adapter */
});

export const fetchRegistros = createAsyncThunk('registros/fetchRegistros', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/registros`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteRegistroServer = createAsyncThunk('registros/deleteRegistroServer', async (idConsulta, {getState}) => {
    await httpDelete(`${baseUrl}/registros/${idConsulta}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idConsulta;
});

export const addRegistroServer = createAsyncThunk('registros/addRegistroServer', async (consulta, {getState}) => {
    return await httpPost(`${baseUrl}/registros`, consulta, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateRegistroServer = createAsyncThunk('registros/updateRegistroServer', async (consulta, {getState}) => {
    return await httpPut(`${baseUrl}/registros/${consulta.id}`, consulta, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const registrosSlice = createSlice({
    name: 'registros',
    initialState: initialState,
    extraReducers: {
       [fetchRegistros.pending]: (state, action) => {state.status = 'loading'},
       [fetchRegistros.fulfilled]: (state, action) => {state.status = 'loaded'; registrosAdapter.setAll(state, action.payload);},
       [fetchRegistros.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
       [deleteRegistroServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteRegistroServer.fulfilled]: (state, action) => {state.status = 'deleted'; registrosAdapter.removeOne(state, action.payload);},
       [addRegistroServer.pending]: (state, action) => {state.status = 'loading'},
       [addRegistroServer.fulfilled]: (state, action) => {state.status = 'saved'; registrosAdapter.addOne(state, action.payload);},
       [updateRegistroServer.pending]: (state, action) => {state.status = 'loading'},
       [updateRegistroServer.fulfilled]: (state, action) => {state.status = 'saved'; registrosAdapter.upsertOne(state, action.payload);},
    },
})

export default registrosSlice.reducer

export const {
    selectAll: selectAllRegistros,
    selectById: selectRegistrosById,
    selectIds: selectRegistrosIds
} = registrosAdapter.getSelectors(state => state.registros)
    