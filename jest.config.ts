import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
};

export default config;
