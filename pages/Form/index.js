import styles from "./Form.module.css";

import { useState } from "react";
import { createPost } from "./api";
import axios from "axios";

export default function Form() {
  const [nome, setNome] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [naturalidade, setNaturalidade] = useState("");
  const [data_nasc, setData_nasc] = useState("");
  const [sexo, setSexo] = useState("");
  const [estado_civil, setEstado_civil] = useState("");
  const [paratleta, setParatleta] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone_residencial, setTelefone_residencial] = useState("");
  const [telefone_comercial, setTelefone_comercial] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [nome_pai, setNome_pai] = useState("");
  const [nome_mae, setNome_mae] = useState("");
  const [dependente_01, setDependente_01] = useState("");
  const [dependente_02, setDependente_02] = useState("");
  const [dependente_03, setDependente_03] = useState("");
  const [dependente_04, setDependente_04] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [orgao_emissor, setOrgao_emissor] = useState("");
  const [data_emissao, setData_emissao] = useState("");
  const [passaporte, setPassaporte] = useState("");
  const [validade_passaporte, setValidade_passaporte] = useState("");
  const [cr, setCr] = useState("");
  const [validade_cr, setValidade_cr] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const getCep = async () => {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(result);

    setBairro(result.data.bairro);
    setEndereco(result.data.logradouro);
    setCidade(result.data.localidade);
    setEstado(result.data.uf);
  };

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
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label for="nacionalidade">Nacionalidade:</label>
            <input
              placeholder="insira sua nacionalidade"
              value={nacionalidade}
              onChange={(e) => setNacionalidade(e.target.value)}
              required
            />

            <label for="naturalidade">Naturalidade:</label>
            <input
              placeholder="insira sua naturalidade"
              value={naturalidade}
              onChange={(e) => setNaturalidade(e.target.value)}
              required
            />

            <label for="nascimento">Nascimento:</label>
            <input
              type="date"
              value={data_nasc}
              onChange={(e) => setData_nasc(e.target.value)}
              required
            />

            <label for="sexo">Sexo:</label>
            <select
              placeholder="insira seu sexo"
              name="sexo"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              pattern="Selecione"
              required
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label for="estadoCivil">Estado civil:</label>
            <select
              placeholder="insira sueu estado civil"
              name="estadoCivil"
              value={estado_civil}
              onChange={(e) => setEstado_civil(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
            </select>

            <label for="paratleta">Paratleta:</label>
            <select
              name="paratleta"
              value={paratleta}
              onChange={(e) => setParatleta(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>

            <label for="endereço">Endereço:</label>
            <input
              placeholder="insira seu endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />

            <label for="bairro">Bairro:</label>
            <input
              placeholder="insira seu bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
            />

            <label for="cep">CEP:</label>
            <input
              placeholder="insira seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={getCep}
              required
            />

            <label for="cidade">Cidade:</label>
            <input
              placeholder="insira sua cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />

            <label for="estado">Estado:</label>
            <input
              placeholder="insira seu estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className={styles.hidden}>.</h1>
            <label for="telefoneResidencial">Telefone Residencial:</label>
            <input
              placeholder="opcional"
              value={telefone_residencial}
              onChange={(e) => setTelefone_residencial(e.target.value)}
            />

            <label for="telefoneComercial">Telefone Comercial:</label>
            <input
              placeholder="opcional"
              value={telefone_comercial}
              onChange={(e) => setTelefone_comercial(e.target.value)}
            />

            <label for="celular">Celular:</label>
            <input
              placeholder="insira seu numero"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />

            <label for="email">Email:</label>
            <input
              placeholder="insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label for="profissao">Profissão:</label>
            <input
              placeholder="inria sua profissão"
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
              required
            />

            <label for="nomePai">Nome do Pai:</label>
            <input
              placeholder="insira o nome do pai"
              value={nome_pai}
              onChange={(e) => setNome_pai(e.target.value)}
              required
            />

            <label for="nomeMae">Nome da Mãe:</label>
            <input
              placeholder="insira o nome da mãe"
              value={nome_mae}
              onChange={(e) => setNome_mae(e.target.value)}
              required
            />

            <label for="dependente_01">Dependente 01:</label>
            <input
              placeholder="opcional"
              value={dependente_01}
              onChange={(e) => setDependente_01(e.target.value)}
            />

            <label for="dependente_02">Dependente 02:</label>
            <input
              placeholder="opcional"
              value={dependente_02}
              onChange={(e) => setDependente_02(e.target.value)}
            />

            <label for="dependente_03">Dependente 03:</label>
            <input
              placeholder="opcional"
              value={dependente_03}
              onChange={(e) => setDependente_03(e.target.value)}
            />

            <label for="dependente_04">Dependente 04:</label>
            <input
              placeholder="opcional"
              value={dependente_04}
              onChange={(e) => setDependente_04(e.target.value)}
            />
          </div>

          <div>
            <h1>Documentos:</h1>
            <label for="cpf">CPF:</label>
            <input
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              placeholder="insira seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <label for="rg">RG:</label>
            <input
              pattern="\d{2}\.\d{3}\.\d{3}-[0-9a-zA-Z]{1}"
              placeholder="insira seu RG"
              value={rg}
              onChange={(e) => setRg(e.target.value)}
              required
            />

            <label for="orgao_emissor">Orgão Emissor:</label>
            <select
              value={orgao_emissor}
              onChange={(e) => setOrgao_emissor(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option>Selecione um órgão emissor</option>
              <option value="AC">
                AC - Instituto de Identificação do Acre
              </option>
              <option value="AP">
                AP - Superintendência da Polícia Técnico-Científica do Amapá
              </option>
              <option value="AM">
                AM - Departamento de Polícia Técnico-Científica do Amazonas
              </option>
              <option value="BA">
                BA - Instituto de Identificação Pedro Mello da Silva da Bahia
              </option>
              <option value="CE">
                CE - Coordenadoria de Identificação Humana e Perícias
                Biométricas do Ceará
              </option>
              <option value="DF">
                DF - Instituto de Identificação do Distrito Federal
              </option>
              <option value="ES">
                ES - Instituto de Identificação da Polícia Civil do Espírito
                Santo
              </option>
              <option value="GO">
                GO - Instituto de Identificação da Polícia Civil de Goiás
              </option>
              <option value="MA">
                MA - Instituto de Identificação do Maranhão
              </option>
              <option value="MT">
                MT - Instituto de Identificação de Mato Grosso
              </option>
              <option value="MS">
                MS - Instituto de Identificação Gonçalo Pereira da Silva de Mato
                Grosso do Sul
              </option>
              <option value="MG">
                MG - Instituto de Identificação da Polícia Civil de Minas Gerais
              </option>
              <option value="PA">
                PA - Instituto de Identificação do Pará
              </option>
              <option value="PB">
                PB - Instituto de Polícia Científica da Paraíba
              </option>
              <option value="PR">
                PR - Instituto de Identificação do Paraná
              </option>
              <option value="PE">
                PE - Instituto Tavares Buril de Identificação de Pernambuco
              </option>
              <option value="PI">
                PI = Instituto de Identificação do Piauí
              </option>
              <option value="RJ">
                RJ - Instituto Félix Pacheco do Rio de Janeiro
              </option>
              <option value="RN">
                RN - Instituto Técnico-Científico de Perícia do Rio Grande do
                Norte
              </option>
              <option value="RS">
                RS - Instituto Geral de Perícias do Rio Grande do Sul
              </option>
              <option value="RO">
                RO - Instituto de Identificação Civil e Criminal de Rondônia
              </option>
              <option value="RR">
                RR - Instituto de Identificação de Roraima
              </option>
              <option value="SC">
                SC - Instituto de Identificação de Santa Catarina
              </option>
              <option value="SP">
                SP - Instituto de Identificação Ricardo Gumbleton Daunt de São
                Paulo
              </option>
              <option value="SE">
                SE - Coordenadoria Geral de Perícias da Secretaria de Segurança
                Pública de Sergipe
              </option>
              <option value="TO">
                TO - Instituto de Identificação do Tocantins
              </option>{" "}
            </select>
            <label for="data_emissao">Data de Emissão:</label>
            <input
              type="date"
              value={data_emissao}
              onChange={(e) => setData_emissao(e.target.value)}
              required
            />

            <label for="passaporte">Passaporte:</label>
            <input
              placeholder="opcional"
              value={passaporte}
              onChange={(e) => setPassaporte(e.target.value)}
            />

            <label for="validade_passaporte">Validade do Passaporte:</label>
            <input
              type="date"
              value={validade_passaporte}
              onChange={(e) => setValidade_passaporte(e.target.value)}
            />

            <label for="cr">CR:</label>
            <input
              value={cr}
              onChange={(e) => setCr(e.target.value)}
              placeholder="opcional"
            />

            <label for="validade_cr">Validade do CR:</label>
            <input
              type="date"
              value={validade_cr}
              onChange={(e) => setValidade_cr(e.target.value)}
            />

            <label for="observacoes">Observações:</label>
            <textarea
              placeholder="opcional"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            ></textarea>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </>
  );
}
