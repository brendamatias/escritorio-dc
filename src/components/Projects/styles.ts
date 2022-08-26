import styled from 'styled-components';
import background from '../../images/about-image.jpg';

export const Container = styled.div`
  padding: 120px 0;

  > img {
    width: 100%;
  }

  > .title {
    max-width: 975px;
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
      color: #141414;
      margin-bottom: 40px;
      max-width: 500px;
    }
  }

  > ul {
    display: flex;
    gap: 30px;
    margin: 0 20px;
    overflow-x: auto;

    overflow-x: auto;

    &:hover::-webkit-scrollbar-thumb {
      background: #178cd7;
    }

    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #178cd7;
    }

    > li {
      > div {
        background-image: url(${background});
        background-position: center;
        width: 354px;
        height: 500px;
        position: relative;

        > div:first-child {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            0deg,
            #1e3240 -7.9%,
            rgba(66, 77, 121, 0) 40.4%
          );
        }

        > .content {
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          gap: 4px;
          height: 100%;
          padding: 40px 60px;
          position: absolute;

          > strong {
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            color: #ffffff;
          }

          > span {
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: #ffffff;
          }
        }
      }
    }
  }
`;
