import React from 'react';
import type Role from './Role';

interface Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    ativo: boolean;
    dataCadastro: string;
    dataAtualizacao: string;
    token?: string;
    dataExpiracaoToken?: string;
    dataAlteracaoSenha?: string;
    requisitadoNovaSenha?: boolean;
    roles: Role[];
}
export default Usuario;
