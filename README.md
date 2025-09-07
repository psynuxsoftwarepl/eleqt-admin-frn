# Eleqt Admin Dashboard

## Deployment on Vercel

1. **Push your code to GitHub/GitLab/Bitbucket.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. Vercel will auto-detect Vite and build your project.
4. Your API calls are set to `https://admin-back-4nqh.onrender.com/api` (no localhost references).
5. You can set environment variables in the Vercel dashboard if needed.
6. The included `vercel.json` ensures correct static build and routing.

## Notes
- Your backend must have CORS enabled for your Vercel domain.
- For production, update CORS settings in your backend to restrict to your Vercel domain.
- If you want to use a custom domain, add it in Vercel settings.

---

**To deploy:**
- Push your code
- Import to Vercel
- Deploy

Your dashboard will be live and fetching data from your Render backend.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
