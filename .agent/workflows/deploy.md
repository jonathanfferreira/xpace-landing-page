---
description: Build and deploy the Xpace website and push bot updates
---

1. Check git status to ensure clean working directory
    - `git status`

2. Build the website
    - `npm run build`

3. Deploy to Firebase Hosting
    - `npx firebase deploy --only hosting`

4. Push code to GitHub (triggers Bot deployment if configured, or ensures code safety)
    - `git add .`
    - `git commit -m "Deployment update"`
    - `git push`

5. Verify deployment
    - Print the successful deployment URL
