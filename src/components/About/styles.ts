import styled from 'styled-components';

export const Container = styled.div`
  max-width: 975px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, 427px);
  align-items: center;
  gap: 80px;
  padding: 120px 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > div {
    > span {
      display: block;
      margin-bottom: 24px;
      font-weight: 600;
      font-size: 16px;
      line-height: 175%;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: #178;
    }

    > h1 {
      letter-spacing: 0.04em;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 40px;
      line-height: 152.5%;
      color: #141414;
      margin-bottom: 20px;

      @media screen and (max-width: 450px) {
        font-size: 36px;
      }
    }

    > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 175%;
      color: #595959;
      text-align: justify;
    }
  }
`;
