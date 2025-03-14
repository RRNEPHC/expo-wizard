# Standard Way of Committing 🚀
Contributing to this projevct requires proper workflow to ensure smooth collaboration. Follow these best practices:

1️⃣ Fork the Repository
Go to the project’s GitHub repo.
Click the Fork button (top right) to create a personal copy.
2️⃣ Clone Your Fork Locally
Open your terminal and run:

sh
Copy code
git clone https://github.com/YOUR_USERN/expo-wizard.git
Replace YOUR_USERNAME with your GitHub username and REPO_NAME with the actual repo name.

Move into the project folder:

sh
Copy code
cd REPO_NAME
3️⃣ Set Up the Upstream Remote
To keep your fork updated with the original repo:

sh
Copy code
git remote add upstream https://github.com/RRNEPHC/expo-wizard/.git
Verify remotes:

sh
Copy code
git remote -v
You should see origin (your fork) and upstream (the original repo).

4️⃣ Create a New Branch for Your Changes
Avoid working on the main branch. Instead, create a feature branch:

sh
Copy code
git checkout -b feature/fix-bug
Use a descriptive branch name like fix-login-issue or add-dark-mode.

5️⃣ Make Your Changes
Edit files using your preferred code editor (VS Code, etc.).
Save your changes and check modified files:
sh
Copy code
git status.


6️⃣ Stage and Commit Changes
First, stage the modified files:

sh
Copy code
git add .
Then, commit with a clear message:

sh
Copy code
git commit -m "Fix: Resolve login issue when password is empty"
💡 Commit Message Best Practices:
✅ Fix: Correct typo in README
✅ Feat: Add dark mode support
✅ Refactor: Optimize database queries.

7️⃣ Push Changes to Your Fork sh Copy code git push origin feature/fix-bug.

8️⃣ Create a Pull Request (PR) Go to your forked repo on GitHub. Click the "Compare & pull request" button. Fill in the PR details: Title: Fix: Login issue when password is empty Description: Explain what you fixed and why. Click "Create pull request".

9️⃣ Keep Your Fork Updated (Sync with Upstream)
If the original repo updates, sync changes: sh Copy code git checkout main git fetch upstream git merge upstream/main git push origin main Then, update your feature branch:
sh Copy code git checkout feature/fix-bug git merge main git push origin feature/fix-bug

🔟 Wait for Review & Make Changes if Needed Maintain polite and professional discussions with maintainers.
If requested, update your PR and push changes:
sh
Copy code
git add .
git commit --amend -m "Fix: Improve login validation"
git push --force
Once approved, the PR will be merged! 🎉


Now you're ready to contribute like a pro! 🚀 Want help with a real PR? 😊
