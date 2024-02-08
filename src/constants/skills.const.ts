type Workflow = {
  [key: string]: string[];
};

export const worflow: Workflow = {
  pt: [
    "Desenvolvimento Ágil",
    "Scrum",
    "Design Responsivo",
    "Teste e Debugging",
    "Cross Squads",
  ],
  en: [
    "Agile Development",
    "Scrum",
    "Responsive Design",
    "Testing & Debugging",
    "Cross Squads",
  ],
};

export const titles: {
  [key: string]: { title: string; tools: string; workflow: string };
} = {
  pt: {
    title: "Habilidades técnicas",
    tools: "Linguagens de programação e ferramentas",
    workflow: "Fluxo de trabalho",
  },
  en: {
    title: "Skills",
    tools: "Programming Languages & Tools",
    workflow: "Workflow",
  },
};
