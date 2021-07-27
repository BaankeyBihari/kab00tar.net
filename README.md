![next-cms-ghost-local](https://static.gotsby.org/v1/assets/images/next-ghost.png)

# next-cms-ghost-local
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

#### The fastest React/Next frontend for local Ghost installation.

This work is an extention of [next-cms-ghost](https://github.com/styxlab/next-cms-ghost) by [styxlab](https://github.com/styxlab)
Main purpose of this fork is to eliminate use running Ghost installation.

## 🎉 Demo

Play with the [Demo](https://next-cms-ghost-local.baankeybihari.com) to get a first impression.

&nbsp;

## ✨ Features

<details>
<summary>Ghost CMS integration</summary>
<br />
<ul>
  <li>Supports Ghost `v3` and `v4`</li>
</ul>
</details>
<details>
<summary>Ghost Casper look & feel</summary>
<br />
<ul>
  <li>Infinite scroll</li>
  <li>Fully responsive</li>
  <li>Sticky navigation headers</li>
  <li>Hover on author avatar</li>
  <li>Styled 404 page</li>
  <li>Preview Section in posts</li>
  <li>Sitemap</li>
  <li>RSS feed</li>
  <li>SEO optimized</li>
</ul>
</details>
<details>
<summary>Extened Casper Styles ✨</summary>
<br />
<ul>
  <li>Dark Mode</li>
  <li>Featured posts pinned on top</li>
  <li>Customizable navigation headers</li>
</ul>
</details>
<details>
<summary>Images with Next/Images 🚀</summary>
<br />
<ul>
  <li>Feature and inline images</li>
  <li>Auto-optimized images</li>
  <li>No content shifts due to consistent placeholders</li>
</ul>
</details>
<details>
<summary>Advanced Routing</summary>
<br />
<ul>
  <li>Auto-detects custom paths</li>
  <li>Configurable collections</li>
</ul>
</details>
<details>
<summary>Developer friendly</summary>
<br />
<ul>
  <li>MIT licenced</li>
  <li>Truly open-source</li>
  <li>Easy to contribute</li>
  <li>Made typesafe with TypeScript</li>
</ul>
</details>
<details>
<summary>Integrated Plugins</summary>
<br />
<ul>
  <li>Member Subscriptions</li>
  <li>Commenting with Commento or Disqus</li>
  <li>Syntax highlighting with PrismJS</li>
  <li>Table Of Contents</li>
  <li>Contact Page with built-in notification service</li>
</ul>
</details>
<details>
<summary>NextJS Features</summary>
<br />
<ul>
  <li>Incremental Regeneration</li>
  <li>Support for Preview</li>
</ul>
</details>

&nbsp;

## ✨ Additional Features

<details>
<summary>Local Ghost Integration</summary>
<br />
<ul>
  <li>Publish blogs from your local clone</li>
</ul>
</details>
<details>
<summary>Vercel Deployment</summary>
<br />
<ul>
  <li>Capable of deploying to Vercel</li>
  <li>No headless instance of Ghost needed</li>
</ul>
</details>

&nbsp;

## 🏁 Getting Started

```bash
git clone https://github.com/baankeybihari/next-cms-ghost-local.git
cd next-cms-ghost-local
yarn

# Create Your own Local Ghost
yarn ghost-clean
yarn ghost-install
yarn ghost-start
```

Update `CMS_GHOST_API_URL` in `.env.local` with the ghost url printed at the end of the previous step.

In your browser you will now need to visit your local instance of Ghost and create an integration api key. I name it as `next` but you can name it to anything. Copy the content api key and save the API in Ghost.

Update `CMS_GHOST_API_KEY` in `.env.local` with the ghost api key copied at the end of the previous step.

Create a new commit
```bash
# Stage your files
git add .

# Commit your files
git commit -m "<Some Message>"
```

&nbsp;

### Post Clone Optional

Below commands are meant for `Linux/Unix` based systems

For `yarn`

```bash
# clean old or unwanted files
rm new_package.json
rm -rf node_modules
rm -rf yarn.lock
rm package-lock.json
# clean package.json
dependencies=$(awk 'BEGIN{flag=0} /dependencies/{flag=1; next} /\}/{flag=0} flag{print $1}' package.json | cut -f 2 -d '"')
devDependencies=$(awk 'BEGIN{flag=0} /devDependencies/{flag=1; next} /\}/{flag=0} flag{print $1}' package.json | cut -f 2 -d '"')
awk 'BEGIN{flag=1} /dependencies/{print; flag=0} /\}/{flag=1} flag{print}' package.json | awk 'BEGIN{flag=1} /devDependencies/{print; flag=0} /\}/{flag=1} flag{print}' | tee new_package.json
cat new_package.json > package.json
# install dependencies and devDependencies
yarn add ${dependencies}
yarn add -D ${devDependencies}
# ESM fix for refractor and unist-util-visit
sed -i 's/"refractor": .*"/"refractor": "\^3.4.0"/g' package.json
sed -i 's/"unist-util-visit": ".*"/"unist-util-visit": "^2.0.3"/g' package.json
# clean old or unwanted files
rm new_package.json
rm -rf node_modules
rm -rf yarn.lock
rm package-lock.json
# install in one-shot
yarn install
# Done
```

For `npm`

```bash
# clean old or unwanted files
rm new_package.json
rm -rf node_modules
rm -rf yarn.lock
rm package-lock.json
# clean package.json
dependencies=$(awk 'BEGIN{flag=0} /dependencies/{flag=1; next} /\}/{flag=0} flag{print $1}' package.json | cut -f 2 -d '"')
devDependencies=$(awk 'BEGIN{flag=0} /devDependencies/{flag=1; next} /\}/{flag=0} flag{print $1}' package.json | cut -f 2 -d '"')
awk 'BEGIN{flag=1} /dependencies/{print; flag=0} /\}/{flag=1} flag{print}' package.json | awk 'BEGIN{flag=1} /devDependencies/{print; flag=0} /\}/{flag=1} flag{print}' | tee new_package.json
cat new_package.json > package.json
# install dependencies and devDependencies
npm -i ${dependencies}
npm -i -D ${devDependencies}
# ESM fix for refractor and unist-util-visit
sed -i 's/"refractor": .*"/"refractor": "\^3.4.0"/g' package.json
sed -i 's/"unist-util-visit": ".*"/"unist-util-visit": "^2.0.3"/g' package.json
# clean old or unwanted files
rm new_package.json
rm -rf node_modules
rm -rf yarn.lock
rm package-lock.json
# install in one-shot
npm install
```

# Copyright & License

Copyright (c) 2021 baankeybihari - Released under the [MIT license](LICENSE).
