# 注意

husky 需要有 `.git`

创建`pre-commit`

```bash
echo "npm run lint" > .husky/pre-commit
```

创建commit-msg

```bash
echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
```

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
