import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer">
        Copyright&copy; 2021. juno. All rights Reserved
      </div>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.div`
  .footer {
    height: 91px;
    color: #cea0e3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
