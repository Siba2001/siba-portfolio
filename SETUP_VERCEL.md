# Vercel Deployment & GitHub CI/CD Setup Guide

This project is configured with a GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`) to automatically build and deploy to **Vercel** on every push to `main` and preview pull requests.

---

## 3 Required GitHub Secrets

To allow GitHub Actions to deploy to your Vercel account, add these 3 repository secrets in GitHub:

1. Open your repository on GitHub: [https://github.com/Siba2001/siba-portfolio](https://github.com/Siba2001/siba-portfolio)
2. Go to **Settings** > **Secrets and variables** > **Actions**
3. Click **New repository secret** for each of the following:

| Secret Name | Where to find it |
| :--- | :--- |
| `VERCEL_TOKEN` | [Vercel Account Tokens](https://vercel.com/account/tokens) -> Click **Create Token** -> Copy token |
| `VERCEL_ORG_ID` | In your Vercel Project Settings or run `npx vercel link` |
| `VERCEL_PROJECT_ID` | In your Vercel Project Settings (**Settings** -> **General** -> **Project ID**) |

---

## Quick Setup with Vercel CLI (Easiest way to get ORG_ID & PROJECT_ID)

Run this once in your terminal from the `siba-portfolio` folder:

```bash
cd "d:\My Fronted Project\Siba-Portfolio\siba-portfolio"
npx vercel link
```

1. Log in to Vercel when prompted.
2. Select your account and link to an existing or new project.
3. This creates a local `.vercel/project.json` containing your:
   - `orgId` (use for `VERCEL_ORG_ID`)
   - `projectId` (use for `VERCEL_PROJECT_ID`)

*(Note: `.vercel` is already added to `.gitignore` so your credentials won't be committed).*

---

## How It Works

- **Push to `main`**: Triggers production build and deploys to your live portfolio domain.
- **Pull Request**: Triggers preview build and creates an isolated preview URL.
- **Manual Trigger**: You can also trigger the workflow anytime from GitHub Actions tab (**Run workflow** button).
