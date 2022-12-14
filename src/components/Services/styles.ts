import styled from 'styled-components';

export const Container = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 120px 20px;
  border-bottom: 1px solid #f0f0f2;

  > img {
    width: 100%;
  }

  > .title {
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
      margin-bottom: 40px;
      max-width: 500px;

      @media screen and (max-width: 450px) {
        font-size: 36px;
      }
    }
  }

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 271px);
    gap: 60px;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      > div {
        width: 100%;

        > img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          object-position: center;
        }

        > strong {
          display: block;
          font-weight: 700;
          font-size: 30px;
          line-height: 114%;
          color: #178;
          margin: 20px 0 15px 0;
        }

        > p {
          font-weight: 400;
          font-size: 16px;
          color: #595959;
          text-align: justify;
          line-height: 152.5%;
          margin-bottom: 80px;
        }
      }
    }

    @media screen and (max-width: 550px) {
      grid-template-columns: 1fr;

      > li {
        > div {
          > span {
            font-size: 24px;
          }

          > p {
            font-size: 14px;
            margin-bottom: 40px;
          }
        }
      }
    }
  }
`;
