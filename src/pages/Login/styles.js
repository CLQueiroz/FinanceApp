import styled from 'styled-components';
import { shade } from 'polished';

import backgroundLogin from '../../assets/background-login.jpg';

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .section1 {
    background-image: linear-gradient(to right, #30327C , #2f91ae);
    height: 60%;
  }

  .section2 {
    background: url(${backgroundLogin}) no-repeat center;
    filter: brightness(57%);
    background-size: cover;
    overflow: hidden;
    height: 40%;
    z-index: -1;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;  
  justify-content: center;
  width: 100%;
`

export const Form = styled.div`
    border-radius: 16px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    padding: 22px;

    overflow: hidden;
      animation-name: move;
      animation-duration: 500ms;

      @keyframes move{
      from{
        opacity: 0;
        transform: translateX(-100%);
      }
      to{
        opacity: 1;
        transform: translateX(0);
      }
    }

    a{
      background-color: #2f6094;
      border: 0;
      border-radius: 15px;
      font-size: 22px;
      padding: 10px;
      color: #FFF !important;
      outline: 0;
      text-decoration: none;
      text-align: center;

      &:hover {
        background-color: ${shade(0.2, '#2f6094')}
      }
    }

    h1 {
      color:  #30327C;
      font-size: 52px;
      font-family: 'Lily Script One', cursive;
      padding: 32px;
    }

    div {
      display: flex;
      flex-direction: column;      
      margin-bottom: 26px;
      padding: 9px;

      label {
        display: flex;
        align-items: center;
        color: #9a9999;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;

        svg {
          font-size: 20px;
        }    
      }

      input {
        color: #393535;
        font-size: larger;
        border: 0;
        border-bottom: 2px solid #9a9999;
      }      
    }
`
