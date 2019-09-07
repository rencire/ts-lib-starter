# typescript lib starter

A starter typescript library project with focus on packaging code for ES modules on browser and NodeJS.

## Prerequisites

- Git
- Nixos/Nix (w/ or w/o direnv) OR nvm OR nodjs installed on system.

```
git clone https://github.com/rencire/ts-lib-starter <your_project_name>
cd <your_project_name>
rm -rf .git
```

Choose one of the following:

### Nixos/Nix + Direnv (preferred):

If you're using [nix](https://nixos.org/nix/), and have [direnv](https://direnv.net/) installed (e.g. `nix-env -i direnv`), simply
cd` into this repo and the correct nodejs version will be installed.

### Nixos/Nix

Simply run:

```
nix-shell
```

### NVM

If you have [nvm](https://github.com/nvm-sh/nvm), a `.nvmrc` file is provided.

## Defaults

Defaults facillitate writing modern code, targeting modern runtimes:

- Transpiles Typescript source to ES2018 files.
- Specifyes `type: "module"` in `package.json` to assume all `.js` files are using ES modules.
  - Can still write `commonjs` files via `.cjs` file extension.
  - See [docs](https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_code_package_json_code_code_type_code_field) for more info.
- Output a type declaration file to `lib/main.d.ts`.

# Notes

## TODO

- [ ] migrate scripts outside of package.json

  - simple bash scripts?
  - consider going old school and use `makefile` for more complicated build workflows: http://www.olioapps.com/blog/the-lost-art-of-the-makefile/
    - If need more integration w/ js ecosystem, consider [jakefile](https://github.com/jakejs/jake)

- [] add semantic release:
  - https://github.com/semantic-release/semantic-release

## Tools

- https://github.com/Microsoft/TypeScript
- https://github.com/palantir/tslint
- https://github.com/prettier/prettier
- https://github.com/okonet/lint-staged
- https://github.com/typicode/husky
- https://github.com/kulshekhar/ts-jest
