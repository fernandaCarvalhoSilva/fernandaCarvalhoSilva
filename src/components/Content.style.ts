import styled from "styled-components";

export const PortfolioContent = styled.div`
  background-color: white;
  width: 100%;
  overflow-x: hidden;
`;

export const PortFolioSection = styled.section`
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 5rem;
  max-width: 75rem;

  h1 {
    font-size: 4rem;

    span {
      color: rgba(255, 165, 0, 1) !important;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #6c757d;

    span {
      color: rgba(255, 165, 0, 1) !important;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #6c757d;
    line-height: 1.6;
    text-align: justify;
    text-justify: inter-word;
  }

  .subtitle {
    color: #6c757d;
    font-size: 1.2rem;
    font-weight: 700rem;
    display: block;
  }

  .title {
    font-weight: 700;
    line-height: 1.5;
    color: #343a40;
    font-size: 1.5rem;
  }

  .date {
    color: rgba(255, 165, 0, 1);
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
  margin-bottom: 3rem;

  div {
    margin-right: 1rem;
    display: flex;
    border-radius: 50%;
    background-color: #495057;
    height: 3.5rem;
    width: 3.5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
  }
`;

export const CareersSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

export const EducationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  svg {
    margin-top: 2rem;
    width: 3rem;
    height: 3rem;
    fill: #495057;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const SectionDivisor = styled.div`
  border-bottom: solid 1px #ced4da;
`;
