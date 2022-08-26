import styled from 'styled-components';
import background from '../../images/background.png';

export const Container = styled.header`
  background-image: url(${background});
  height: 100vh;

  > div {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px 0;

    > .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: calc(100% - 50px);
      max-width: 975px;
      margin: 0 auto;

      > h6 {
        font-weight: 600;
        font-size: 16px;
        line-height: 175%;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        color: #178cd7;
        margin-bottom: 24px;
      }

      > h1 {
        font-size: 80px;
        line-height: 130%;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        color: #ffffff;
        max-width: 700px;
      }

      > span {
        display: block;
        margin: 24px 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 175%;
        letter-spacing: 0.02em;
        color: #ffffff;
        opacity: 0.8;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 975px;
  margin: 0 auto;

  > ul {
    display: flex;
    align-items: center;
    gap: 40px;

    > li {
      a {
        text-transform: uppercase;
        font-weight: 600;
        color: #fff;

        &:hover {
          color: #178cd7;
        }
      }
    }
  }
`;
