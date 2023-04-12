import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <hr size="1" width="90%"></hr>
        <h1>Bem vindo ao nosso Império!</h1>
        <div id="wave"></div>
        <div className={styles.about}>
          <h2>Sobre nós:</h2>
          <p>
            O Império Shot Club é um clube de tiro de alto nível que está
            localizado na Rua Rotariano Antônio Telino de Lacerda, Bairro Portal
            do Sol, 273. Oferecemos uma experiência única para quem busca
            segurança, qualidade e profissionalismo no tiro esportivo. Contamos
            com uma grande variedade de armas e alvos, além de uma estrutura
            completa para você praticar e desfrutar de um ambiente acolhedor e
            exclusivo. Nossa equipe de profissionais especializados está sempre
            pronta para oferecer suporte e orientação aos membros do clube. No
            Império Shot Club, você tem a oportunidade de fazer parte de uma
            comunidade apaixonada pelo tiro esportivo e desfrutar de todas as
            vantagens que oferecemos. Estamos sempre em busca de aprimorar
            nossos serviços e equipamentos, garantindo assim uma experiência
            única e inesquecível para todos os nossos membros. Se você está em
            busca de um lugar para praticar o tiro esportivo, o Império Shot
            Club é o lugar certo para você. Visite nosso site e preencha o
            formulário de inscrição para se tornar um membro e desfrutar de tudo
            o que temos a oferecer. Estamos ansiosos para recebê-lo!
          </p>
          <Image
            src="/images/sniper.jpg"
            width={1080}
            height={720}
            className={styles.images}
          />
        </div>
        <div id="wave"></div>
        <div className={styles.invite}>
          <h2>Cadastro:</h2>
          <p>
            Olá! Gostaria de fazer parte de um clube de tiro de alto nível? O
            Império Shot Club oferece uma experiência única para quem busca
            segurança, qualidade e profissionalismo no tiro esportivo. Contamos
            com uma grande variedade de armas e alvos, além de uma estrutura
            completa para você praticar e desfrutar de um ambiente acolhedor e
            exclusivo. Ao se tornar membro do Império Shot Club, você terá a
            oportunidade de fazer parte de uma comunidade apaixonada pelo tiro
            esportivo e desfrutar de todas as vantagens que oferecemos. Não
            perca mais tempo e junte-se a nós! Para se cadastrar e conhecer mais
            sobre o clube, visite nosso site e preencha o formulário de
            inscrição. Estamos ansiosos para recebê-lo!
            <Link href="/Form" legacyBehavior>
              <a>Clique aqui!</a>
            </Link>
          </p>
          <Image
            src="/images/scope.jpg"
            width={1080}
            height={720}
            className={styles.images}
          />
        </div>
        <div id="wave"></div>
        <div className={styles.location}>
          <h2>Onde ficamos:</h2>
          <p>
            Não perca mais tempo procurando um lugar para praticar o tiro
            esportivo. Venha nos visitar e conheça nossa estrutura completa e
            profissionais especializados. Esperamos por você!
          </p>
          <Link href="https://goo.gl/maps/463ucFWjHh8kDt4Z6" legacyBehavior>
            <a>
              📍Ficamos localizados na Rua Rotariano Antônio Telino de Lacerda,
              Bairro Portal do Sol, 273, CEP 58046-726
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
