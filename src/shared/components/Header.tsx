import styled from '@emotion/styled';

export default function Header() {
  return (
    <Wrapper>
      <Img
        src="/logo.png"
        alt="logo"
      />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 10px;
  border-bottom: 2px solid rgb(44, 62, 118);
`;

const Img = styled.img`
  vertical-align: middle;
`;
