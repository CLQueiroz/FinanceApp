import styled from 'styled-components';
import { shade } from 'polished';


export const Background = styled.div`
  background-color: #282a36;
  height: 100vh;

  padding: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  background-color: #303744;
  border-radius: 20px;
  width: 80%;
  height: 90vh;
  padding: 20px;
  display: flex;
`

export const ContainerHeader = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;

  hr {
    border: 1px solid #ffffff14;
    width: 80%;
  }

  .info {
    color: #f1f1f1;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  nav {
    margin-top: 10px;
    width: 90%;

    ul{
      width: 100%;
      padding: 10px;

      li{
        width: 100%;
        padding: 10px;
        list-style: none;
        

        a{
          text-decoration: none;
          color: #f2f2f2;

          display: flex;
          align-items: center;

          svg {
            margin-right: 10px;
          }

         &:hover {
          color: ${shade(0.2, '#f2f2f2')};
        }

        }
      }
    }
  }

  div {
    color: #d1d3da;
    display: flex;
    flex-direction: column;

    img {
      border-radius: 26%;
      width: 50px;
    }
  }
`