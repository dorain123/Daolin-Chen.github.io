# Daolin-Chen.github.io
Personal website showcasing my research, projects, and CV.

陈道林的中英文学术与求职主页。内容涵盖研究兴趣、科研论文与研究工作，以及精选项目。

Daolin Chen's bilingual academic and professional homepage, featuring research interests, papers and research work, and selected projects.

## Website / 网站

After enabling GitHub Pages, the default project-site URL is:

- Chinese: https://dorain123.github.io/Daolin-Chen.github.io/?lang=zh
- English: https://dorain123.github.io/Daolin-Chen.github.io/?lang=en

This repository is a project site because its name differs from the account name. It does not publish to `Daolin-Chen.github.io` as a standalone domain.

## Deployment / 发布

In **Settings → Pages → Build and deployment**:

1. Choose **Deploy from a branch**.
2. Select **main** and **/(root)**.
3. Save and wait for the Pages deployment to finish.

No dependencies or build step are needed. All asset paths are relative, so the site also works under the project URL.

## Local preview / 本地预览

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765 in a browser. Use the Chinese/English buttons to switch languages; `?lang=en` also opens the English version directly.

## Editing / 内容更新

- `index.html`: content in both languages; update corresponding `lang="zh-CN"` and `lang="en"` elements together.
- `styles.css`: responsive layouts and visual styling.
- `script.js`: language switching and shareable language URLs.

Research descriptions and results are based on the supplied Chinese and English resumes. Chemical Engineering Journal acceptance and third authorship were confirmed by the author. AutoSearch is marked as submitted to AAAI; Mobiflow is marked as under review. Research headings follow the resume's descriptive titles; formal bibliographic titles, full author lists, DOI links, and project repositories should be added when provided. No publication or code links are invented.

The public site intentionally omits private phone numbers, birth dates, identification details, and the original resume PDFs.
