import React from 'react';

const PerfilPsicologo = (props) => {
    return (
        <div class="container-sm">
            <form class="row g-3">
                <div class="col-sm-3 mb-3">
                    <label class="visually-hidden" for="specificSizeSelect">Tipo de Especialista</label>
                    <select class="form-select" id="specificSizeSelect">
                        <option selected disabled value>Tipo de Especialista</option>
                        <option value="1">Psicologia Escolar/Educacional</option>
                        <option value="2">Psicologia Organizacional e do Trabalho</option>
                        <option value="3">Psicologia Clínica</option>
                        <option value="4">Psicologia Hospitalar</option>
                        <option value="5">Psicopedagogia</option>
                        <option value="6">Psicomotricidade</option>
                        <option value="7">Neuropsicologia</option>
                        <option value="8">Avaliação Psicológica</option>
                    </select>
                </div>

                <div class="col-sm-3 mb-3">
                    <label class="visually-hidden" for="specificSizeSelect">Motivo</label>
                    <select class="form-select" id="specificSizeSelect">
                        <option selected disabled value>Motivo</option>
                        <option value="1">Luto</option>
                        <option value="2">Estresse e Ansiedadee</option>
                        <option value="3">Depressão</option>
                        <option value="4">Relacionamentos</option>
                        <option value="5">Vícios</option>
                        <option value="6">Transtornos mentais</option>
                        <option value="7">Prevenção</option>
                    </select>
                </div>
            </form>
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Drª Maria de Algo</h5>
                        <p class="card-text">Especializações:
                            <ul>
                                <li><small class="text-muted">Autoconhecimento</small></li>
                                <li><small class="text-muted">Depressão</small></li>
                            </ul>
                            <small class="text-muted">R$100/50min</small>
                        </p>
                        <div class="d-grid gap-2 d-md-block mt-2 mb-1">
                            <button class="btn btn-secondary" type="button">Agendar</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Drº Pedro de Algo</h5>
                        <p class="card-text">Especializações:
                            <ul>
                                <li><small class="text-muted">Autoestima</small></li>
                                <li><small class="text-muted">Traumas</small></li>
                                <li><small class="text-muted">Ansiedade</small></li>
                            </ul>
                            <small class="text-muted">R$80/50min</small>
                        </p>
                        <div class="d-grid gap-2 d-md-block mt-2 mb-1">
                            <button class="btn btn-secondary" type="button">Agendar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}
export default PerfilPsicologo;