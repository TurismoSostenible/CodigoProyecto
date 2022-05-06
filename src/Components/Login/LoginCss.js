import styled from 'styled-components';

const LoginStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 85%;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 450px;
  h2{
    color: var(--ColorPagePurple);
    text-align: center;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    .FormOptions{
      display: flex;
      width: 90%;
      margin: 0 auto;
      div{
        display: grid;
        place-items: center center;
        padding: 4px 8px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #0000005e;
        path{
          fill: var(--ColorPageGreen);
        }
        circle{
          fill: var(--ColorPageGreen);
        }
      }
      input{
        flex-grow: 1;
        padding: 4px 8px;
        border-radius: 0 5px 5px 0;
        border-top: 1px solid #0000005e;
        border-bottom: 1px solid #0000005e;
        border-right: 1px solid #0000005e;
      }
    }
    button{
      align-self: center;
      text-align: center;
      width: 90%;
      font-weight: 900;
      padding: 9px;
      border-radius: 5px;
      color: var(--ColorPageGreen);
      background-color: var(--ColorPagePurple);
    }
  }
`;

export {LoginStyle};