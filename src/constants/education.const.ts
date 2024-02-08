type Education = {
  [key: string]: {
    institution: string;
    date: string;
    degree: string;
    course: string;
  };
};

export const education: Education[] = [
  {
    pt: {
      institution: "UTFPR",
      date: "Agosto de 2023 - cursando",
      degree: "pós graduação",
      course: "Java",
    },
    en: {
      institution: "UTFPR",
      date: "August 2023 - current",
      degree: "graduate studies",
      course: `Java`,
    },
  },
  {
    pt: {
      institution: "UFPR",
      date: "Fevereiro de 2017 - Agosto de 2022",
      degree: "Tecnólogo",
      course: "Análise e Desenvolvimeno de sistemas",
    },
    en: {
      institution: "UFPR",
      date: "February 2017 - August 2022",
      degree: "Technologist degree",
      course: "Analisys and development of Systems",
    },
  },
];

export const title: { [key: string]: { title: string } } = {
  pt: {
    title: "Educação",
  },
  en: {
    title: "Education",
  },
};
