import styled from 'styled-components';

type ProjectListProps = {
  translateX: number;
};

type ProjectItemProps = {
  backgroundImage: string;
};

export const Container = styled.div`
  padding: 120px 0;

  > div {
    max-width: 975px;
    padding: 0 20px;
    margin: 0 auto;

    > img {
      width: 100%;
    }

    > .title {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 30px;
      margin-bottom: 40px;

      > div:first-child {
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
          max-width: 500px;

          @media screen and (max-width: 450px) {
            font-size: 36px;
          }
        }
      }

      > div:last-child {
        display: flex;
        align-items: center;
        justify-items: center;
        gap: 30px;

        > button {
          border: 0;
          background-color: #178;
          width: 50px;
          height: 50px;

          &:disabled {
            opacity: 0.5;
          }

          > svg {
            font-size: 20px;
            color: #fff;
          }
        }
      }
    }

    > .projects {
      transition: transform 0.2s;
      overflow: hidden;
    }
  }
`;

export const ProjectList = styled.ul<ProjectListProps>`
  display: flex;
  gap: 30px;
  transform: translateX(${({ translateX }) => `${translateX}px`});
  transition: transform 0.2s;
`;

export const ProjectItem = styled.li<ProjectItemProps>`
  > div {
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
`;
