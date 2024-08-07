import type { PlopTypes } from "@turbo/gen";
import { execSync } from "child_process";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "새로운 리액트 컴포넌트와 스토리북 파일을 생성합니다.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "컴포넌트의 이름을 입력해 주세요.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/storybook.hbs",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        template: 'export * from "./{{pascalCase name}}";',
      },
      function eslintFile() {
        try {
          execSync("pnpm exec eslint --fix src/components/index.ts", {
            stdio: "inherit",
          });
          console.log("Eslint format applied");
        } catch (err) {
          console.error("Error running Eslint", err);
        }
        return "Eslint format applied";
      },
    ],
  });
}
