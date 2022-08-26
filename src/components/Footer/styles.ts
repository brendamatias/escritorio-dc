import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #005f97;

  > div:first-child {
    max-width: 975px;
    margin: 0 auto;
    padding: 80px 0;
    display: flex;
    justify-content: space-between;

    > img {
      width: 220px;
      height: 100%;
    }

    > div {
      display: flex;
      gap: 80px;

      > .links {
        color: #fff;

        > strong {
          text-transform: uppercase;
        }

        > ul {
          margin-top: 40px;

          > li {
            margin-top: 20px;

            > a {
              color: #fff;
              opacity: 0.8;

              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }

      > .location {
        color: #fff;

        > strong {
          text-transform: uppercase;
        }

        > div {
          margin-top: 40px;
          display: flex;
          gap: 20px;
          flex-direction: column;
          opacity: 0.8;
        }
      }

      > .socialMedia {
        display: flex;
        align-items: flex-start;
        gap: 15px;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background-color: #fff;
          border-radius: 50%;

          > svg {
            color: #005f97;
          }
        }
      }
    }
  }

  > .copyright {
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.2);

    a {
      color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
    }
  }
`;
