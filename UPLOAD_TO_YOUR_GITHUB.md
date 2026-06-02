# Upload to YOUR personal GitHub (Ramakrishna)

Use this folder only: **`f:\project\ramakrishna-portfolio`**

It contains **your** portfolio — no Akshith files, no backend, no other projects.

---

## Option A — Upload in browser (no Git install needed)

### 1. Create a new repository

1. Log in to **your** GitHub: https://github.com  
2. Click **+** → **New repository**  
3. Repository name examples:
   - `portfolio`
   - `ramakrishna-portfolio`
   - `ramakrishna-chanigarapu`  
4. Set **Public**  
5. **Do not** check "Add a README"  
6. Click **Create repository**

### 2. Upload files

1. On the empty repo page, click **uploading an existing file**  
2. Open folder: `f:\project\ramakrishna-portfolio`  
3. Drag **all** files into GitHub:
   - `index.html`
   - `styles.css`
   - `main.js`
   - `resume.html`
   - `resume.css`
   - `README.md`
   - `.gitignore`
4. Click **Commit changes**

### 3. Free website (GitHub Pages)

1. Repo → **Settings** → **Pages**  
2. **Source:** Deploy from branch  
3. **Branch:** `main` → **Folder:** `/ (root)` → **Save**  
4. Wait 1–2 minutes  

Your live link:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/
```

Example: `https://ramakrishna-chanigarapu.github.io/portfolio/`

### 4. Put the link on LinkedIn / resume

After Pages works, use that URL as your portfolio link.

---

## Option B — Using Git (after installing Git)

Install: https://git-scm.com/download/win

Open terminal in `f:\project\ramakrishna-portfolio`:

```bash
git init
git add .
git commit -m "Add my personal student portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with yours.

---

## Zip file

A ready zip is at: `f:\project\ramakrishna-portfolio-github.zip`  
Extract it and upload, or upload files directly from `ramakrishna-portfolio` folder.
