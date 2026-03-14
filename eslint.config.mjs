import css from '@eslint/css'
import stylistic from '@stylistic/eslint-plugin'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import perfectionist from 'eslint-plugin-perfectionist'
import sonarjs from 'eslint-plugin-sonarjs'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  perfectionist.configs['recommended-natural'],
  stylistic.configs.recommended,
  sonarjs.configs.recommended,
  css.configs.recommended,
])

export default eslintConfig
