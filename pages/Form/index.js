import styles from "./Form.module.css";

export default function Form() {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.container}>
          <div>
            <h1>Dados Pessoais:</h1>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            <label for="nacionalidade">Nacionalidade:</label>
            <input
              type="text"
              id="nacionalidade"
              name="nacionalidade"
              required
            />

            <label for="naturalidade">Naturalidade:</label>
            <input
              type="text"
              id="nacionalidade"
              name="nacionalidade"
              required
            />

            <label for="nascimento">Nascimento:</label>
            <input type="date" id="assunto" name="assunto" required />

            <label for="sexo">Sexo:</label>
            <select name="sexo">
              <option value="null">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label for="estadoCivil">Estado civil:</label>
            <select name="estadoCivil">
              <option value="null">Selecione</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
            </select>

            <label for="paratleta">Paratleta:</label>
            <select name="paratleta">
              <option value="null">Selecione</option>
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>

            <label for="endereço">Endereço:</label>
            <input type="text" id="endereço" name="endereço" required />

            <label for="bairro">Bairro:</label>
            <input type="bairro" id="bairro" name="bairro" required />

            <label for="cep">CEP:</label>
            <input type="cep" id="cep" name="cep" required />

            <label for="cidade">Cidade:</label>
            <input type="cidade" id="cidade" name="cidade" required />

            <label for="estado">Estado:</label>
            <input type="estado" id="estado" name="estado" required />
          </div>
          <div>
            <h1 className={styles.hidden}>.</h1>
            <label for="telefoneResidencial">Telefone Residencial:</label>
            <input
              type="telefoneResidencial"
              id="telefone_residencial"
              name="telefone_residencial"
              required
            />

            <label for="telefoneComercial">Telefone Comercial:</label>
            <input
              type="telefoneComercial"
              id="telefone_comercial"
              name="telefone_comercial"
              required
            />

            <label for="celular">Celular:</label>
            <input type="celular" id="celular" name="celular" required />

            <label for="profissao">Profissão:</label>
            <input type="profissao" id="profissao" name="profissao" required />

            <label for="nomePai">Nome do Pai:</label>
            <input type="nomePai" id="nome_pai" name="nome_pai" required />

            <label for="nomeMae">Nome da Mãe:</label>
            <input type="nomeMae" id="nome_mae" name="nome_mae" required />

            <label for="dependente_01">Dependente 01:</label>
            <input
              type="dependente_01"
              id="dependente_01"
              name="dependente_01"
              required
            />

            <label for="dependente_02">Dependente 02:</label>
            <input
              type="dependente_02"
              id="dependente_02"
              name="dependente_02"
              required
            />

            <label for="dependente_03">Dependente 03:</label>
            <input
              type="dependente_03"
              id="dependente_03"
              name="dependente_03"
              required
            />

            <label for="dependente_04">Dependente 04:</label>
            <input
              type="dependente_04"
              id="dependente_04"
              name="dependente_04"
              required
            />
          </div>

          <div>
            <h1>Documentos:</h1>
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
            <label for="rg">RG:</label>
            <input type="text" id="rg" name="rg" required />

            <label for="orgao_emissor">Orgão Emissor:</label>
            <input
              type="text"
              id="orgao_emissor"
              name="orgao_emissor"
              required
            />

            <label for="data_emissao">Data de Emissão:</label>
            <input type="date" id="data_emissao" name="data_emissao" required />

            <label for="passaporte">Passaporte:</label>
            <input type="text" id="passaporte" name="passaporte" required />

            <label for="validade_passaporte">Validade do Passaporte:</label>
            <input
              type="date"
              id="validade_passaporte"
              name="validade_passaporte"
              required
            />

            <label for="cr">CR:</label>
            <input type="text" id="cr" name="cr" required />

            <label for="validade_cr">Validade do CR:</label>
            <input type="date" id="validade_cr" name="validade_cr" required />

            <label for="observacoes">Observações:</label>

            <textarea id="observacoes" name="observacoes"></textarea>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </>
  );
}
