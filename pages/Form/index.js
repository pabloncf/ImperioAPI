import styles from "./Form.module.css";

import { useState } from "react";
import { createPost } from "./api";

export default function Form() {
  const [nome, SetNome] = useState("");
  const [nacionalidade, SetNacionalidade] = useState("");
  const [naturalidade, SetNaturalidade] = useState("");
  const [data_nasc, SetData_nasc] = useState("");
  const [sexo, SetSexo] = useState("");
  const [estado_civil, SetEstado_civil] = useState("");
  const [paratleta, SetParatleta] = useState("");
  const [endereco, SetEndereco] = useState("");
  const [bairro, SetBairro] = useState("");
  const [cep, SetCep] = useState("");
  const [cidade, SetCidade] = useState("");
  const [estado, SetEstado] = useState("");
  const [telefone_residencial, SetTelefone_residencial] = useState("");
  const [telefone_comercial, SetTelefone_comercial] = useState("");
  const [celular, SetCelular] = useState("");
  const [email, SetEmail] = useState("");
  const [profissao, SetProfissao] = useState("");
  const [nome_pai, SetNome_pai] = useState("");
  const [nome_mae, SetNome_mae] = useState("");
  const [dependente_01, SetDependente_01] = useState("");
  const [dependente_02, SetDependente_02] = useState("");
  const [dependente_03, SetDependente_03] = useState("");
  const [dependente_04, SetDependente_04] = useState("");
  const [cpf, SetCpf] = useState("");
  const [rg, SetRg] = useState("");
  const [orgao_emissor, SetOrgao_emissor] = useState("");
  const [data_emissao, SetData_emissao] = useState("");
  const [passaporte, SetPassaporte] = useState("");
  const [validade_passaporte, SetValidade_passaporte] = useState("");
  const [cr, SetCr] = useState("");
  const [validade_cr, SetValidade_cr] = useState("");
  const [observacoes, SetObservacoes] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createPost({
        nome,
        nacionalidade,
        naturalidade,
        data_nasc,
        sexo,
        estado_civil,
        paratleta,
        endereco,
        bairro,
        cep,
        cidade,
        estado,
        telefone_residencial,
        telefone_comercial,
        celular,
        email,
        profissao,
        nome_pai,
        nome_mae,
        dependente_01,
        dependente_02,
        dependente_03,
        dependente_04,
        cpf,
        rg,
        orgao_emissor,
        data_emissao,
        passaporte,
        validade_passaporte,
        cr,
        validade_cr,
        observacoes,
      });
      // atualize a interface do usuário aqui
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container}>
          <div>
            <h1>Dados Pessoais:</h1>
            <label for="nome">Nome:</label>
            <input
              placeholder="insira seu nome"
              value={nome}
              onChange={(e) => SetNome(e.target.value)}
              required
            />

            <label for="nacionalidade">Nacionalidade:</label>
            <input
              placeholder="insira sua nacionalidade"
              value={nacionalidade}
              onChange={(e) => SetNacionalidade(e.target.value)}
              required
            />

            <label for="naturalidade">Naturalidade:</label>
            <input
              placeholder="insira sua naturalidade"
              value={naturalidade}
              onChange={(e) => SetNaturalidade(e.target.value)}
              required
            />

            <label for="nascimento">Nascimento:</label>
            <input
              type="date"
              value={data_nasc}
              onChange={(e) => SetData_nasc(e.target.value)}
              required
            />

            <label for="sexo">Sexo:</label>
            <select
              placeholder="insira seu sexo"
              name="sexo"
              value={sexo}
              onChange={(e) => SetSexo(e.target.value)}
            >
              <option value="null">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label for="estadoCivil">Estado civil:</label>
            <select
              placeholder="insira sueu estado civil"
              name="estadoCivil"
              value={estado_civil}
              onChange={(e) => SetEstado_civil(e.target.value)}
            >
              <option value="null">Selecione</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
            </select>

            <label for="paratleta">Paratleta:</label>
            <select
              name="paratleta"
              value={paratleta}
              onChange={(e) => SetParatleta(e.target.value)}
            >
              <option value="null">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>

            <label for="endereço">Endereço:</label>
            <input
              placeholder="insira seu endereço"
              value={endereco}
              onChange={(e) => SetEndereco(e.target.value)}
              required
            />

            <label for="bairro">Bairro:</label>
            <input
              placeholder="insira seu bairro"
              value={bairro}
              onChange={(e) => SetBairro(e.target.value)}
              required
            />

            <label for="cep">CEP:</label>
            <input
              placeholder="insira seu CEP"
              value={cep}
              onChange={(e) => SetCep(e.target.value)}
              required
            />

            <label for="cidade">Cidade:</label>
            <input
              placeholder="insira sua cidade"
              value={cidade}
              onChange={(e) => SetCidade(e.target.value)}
              required
            />

            <label for="estado">Estado:</label>
            <input
              placeholder="insira seu estado"
              value={estado}
              onChange={(e) => SetEstado(e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className={styles.hidden}>.</h1>
            <label for="telefoneResidencial">Telefone Residencial:</label>
            <input
              placeholder="opcional"
              value={telefone_residencial}
              onChange={(e) => SetTelefone_residencial(e.target.value)}
              required
            />

            <label for="telefoneComercial">Telefone Comercial:</label>
            <input
              placeholder="opcional"
              value={telefone_comercial}
              onChange={(e) => SetTelefone_comercial(e.target.value)}
              required
            />

            <label for="celular">Celular:</label>
            <input
              placeholder="insira seu numero"
              value={celular}
              onChange={(e) => SetCelular(e.target.value)}
              required
            />

            <label for="email">Celular:</label>
            <input
              placeholder="insira seu email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              required
            />

            <label for="profissao">Profissão:</label>
            <input
              placeholder="inria sua profissão"
              value={profissao}
              onChange={(e) => SetProfissao(e.target.value)}
              required
            />

            <label for="nomePai">Nome do Pai:</label>
            <input
              placeholder="insira o nome do pai"
              value={nome_pai}
              onChange={(e) => SetNome_pai(e.target.value)}
              required
            />

            <label for="nomeMae">Nome da Mãe:</label>
            <input
              placeholder="insira o nome da mãe"
              value={nome_mae}
              onChange={(e) => SetNome_mae(e.target.value)}
              required
            />

            <label for="dependente_01">Dependente 01:</label>
            <input
              placeholder="opcional"
              value={dependente_01}
              onChange={(e) => SetDependente_01(e.target.value)}
              required
            />

            <label for="dependente_02">Dependente 02:</label>
            <input
              placeholder="opcional"
              value={dependente_02}
              onChange={(e) => SetDependente_02(e.target.value)}
              required
            />

            <label for="dependente_03">Dependente 03:</label>
            <input
              placeholder="opcional"
              value={dependente_03}
              onChange={(e) => SetDependente_03(e.target.value)}
              required
            />

            <label for="dependente_04">Dependente 04:</label>
            <input
              placeholder="opcional"
              value={dependente_04}
              onChange={(e) => SetDependente_04(e.target.value)}
              required
            />
          </div>

          <div>
            <h1>Documentos:</h1>
            <label for="cpf">CPF:</label>
            <input
              placeholder="insira seu CPF"
              value={cpf}
              onChange={(e) => SetCpf(e.target.value)}
              required
            />

            <label for="rg">RG:</label>
            <input
              placeholder="insira seu RG"
              value={rg}
              onChange={(e) => SetRg(e.target.value)}
              required
            />

            <label for="orgao_emissor">Orgão Emissor:</label>
            <input
              placeholder="insira o orgão emissor"
              value={orgao_emissor}
              onChange={(e) => SetOrgao_emissor(e.target.value)}
              required
            />

            <label for="data_emissao">Data de Emissão:</label>
            <input
              type="date"
              value={data_emissao}
              onChange={(e) => SetData_emissao(e.target.value)}
              required
            />

            <label for="passaporte">Passaporte:</label>
            <input
              placeholder="opcional"
              value={passaporte}
              onChange={(e) => SetPassaporte(e.target.value)}
            />

            <label for="validade_passaporte">Validade do Passaporte:</label>
            <input
              type="date"
              value={validade_passaporte}
              onChange={(e) => SetValidade_passaporte(e.target.value)}
            />

            <label for="cr">CR:</label>
            <input
              value={cr}
              onChange={(e) => SetCr(e.target.value)}
              placeholder="opcional"
            />

            <label for="validade_cr">Validade do CR:</label>
            <input
              placeholder="opcional"
              type="date"
              value={validade_cr}
              onChange={(e) => SetValidade_cr(e.target.value)}
            />

            <label for="observacoes">Observações:</label>
            <textarea
              placeholder="opcional"
              value={observacoes}
              onChange={(e) => SetObservacoes(e.target.value)}
            ></textarea>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </>
  );
}
