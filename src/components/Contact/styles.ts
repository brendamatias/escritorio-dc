import styled from 'styled-components';
import background from '../../images/contact-image.png';

export const Container = styled.div`
  background-color: #000;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: bottom right;

  > div {
    max-width: 975px;
    padding: 120px 0;
    margin: 0 auto;
    > span {
      display: block;
      margin-bottom: 24px;
      font-weight: 600;
      font-size: 16px;
      line-height: 175%;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: #178cd7;
    }

    > h1 {
      letter-spacing: 0.04em;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 40px;
      line-height: 152.5%;
      color: #fff;
      margin-bottom: 20px;
      max-width: 500px;
    }

    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 175%;
      color: #c7c7c7;
      text-align: justify;
      max-width: 500px;
      margin-bottom: 60px;
    }
  }
`;
