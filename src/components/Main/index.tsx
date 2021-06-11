import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e 'React Avançado' escrito ao lado"
      ></S.Logo>
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, Next.js, GraphQl e Styled Components
      </S.Description>
      <S.Illustration src="/img/hero-illustration.svg" />
    </S.Wrapper>
  );
}
