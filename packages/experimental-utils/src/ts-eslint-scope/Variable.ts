import { TSESTree } from '@typescript-eslint/typescript-estree';
import ESLintVariable from 'eslint-scope/lib/variable';
import { Reference } from './Reference';
import { Definition } from './Definition';
import { Scope } from './Scope';

interface Variable {
  name: string;
  identifiers: TSESTree.Identifier[];
  references: Reference[];
  defs: Definition[];
  eslintUsed?: boolean;
  stack?: unknown;
  tainted?: boolean;
  scope?: Scope;
}

const Variable = ESLintVariable as {
  new (): Variable;
};

export { Variable };
