# Day 01: Git and pairing

**You should be able to:**

- Manage a project using git
- Practice effective pair programming

## Which git command adds files to the staging area?

- `status`: Displays the current state of the working directory and staging area
- ☑️ `add`: Adds a change in the working directory to the staging area
- `commit`: Records and documents the changes to the repository
- `push`: Uploads local repository content to a remote repository

## For each concept, select which categories it fits into: git or GitHub

|   | Git | GitHub | Explanation |
| - | --- | ------ | ----------- |
| clone | ☑️ |   | `clone` is a command in Git that lets us copy the contents of a remote repository (on GitHub, etc.) to our local machine; GitHub will give us a link to help us clone it, but it's not something we _do_ on GitHub |
| repository  | ☑️ | ☑️ | GitHub lets us have a remote repository; we can initialize a new local repository using Git: `git init` |
| fork |   | ☑️ | Forking makes a copy of a repository to our own GitHub profile so that we can make changes to it without affecting the original project |
| commit | ☑️ |   | Git command that records and documents the changes to the repository |

## For each choice pick whether it describes the driver or the navigator in pair programming

|   | driver | navigator |
| - |------- | --------- |
| spots syntax issues  |   | ☑️ |
| reads the docs  |   | ☑️ |
| writes code | ☑️ |   |
| sees the big picture |   | ☑️ |
| works out the details | ☑️ |   |
| speaks at a high level |   | ☑️ |
| asks clarifying questions | ☑️ |   |

## Do you have any other questions for the morning review?

#### 1. What is a branch?
A [`branch`](https://www.atlassian.com/git/tutorials/using-branches#:~:text=A%20branch%20represents%20an%20independent%20line%20of%20development.&text=The%20git%20branch%20command%20lets,checkout%20and%20git%20merge%20commands.) is a new pointer to the current commit you are on. Any changes that you make and commits afterward will be built in parallel to the `main` branch, and does not affect `main` branch (or any other branch you are on). This is called an independent line of development, which developers use often in order to build features with other developers! We will be making use of this much more in senior phase, don't you worry ;)

#### 2. Is there an easier way to both work on the same project?
Yes! The reason we currently have you push and pull from different remote repositories is so both of you can have a repository of your own with up to date changes (if you ever wished to work on it separately later).

When we are working in the field, we very likely will use the concept of `branches`, as answered above. The remaining information below is useful for senior phase and after, but not relevant/is extra material now!

The flow of work would look like this:

1. You have a main remote repository on GitHub or another hosting site that you all directly clone onto your machine (no forks!).
2. To start a new feature, you want to create a new `branch` or new pointer.
  - `git branch new-feature-branch`
3. Switch to the new branch to start developing.
  - `git checkout new-feature-branch`
4. Now you can make a commit, make any changes and it will _NOT_ affect the original main branch. You can _also_ push these changes to branches online.
  - `git add .`
  - `git commit -m "Adding a new feature on my branch"`
  - `git push origin new-feature-branch` ; you want to specify _which_ branch you are trying to send this code!
5. When you are done with your feature, you have an option on GitHub to make a _proposal_ to merge your feature branch code and commits with the existing main branch.
  - This is called a `pull request`, and is a feature specifically on GitHub.
  - This allows other developers to review your code and decide if it should be added in!
6. After it gets merged, then that adds a commit into your main branch that something was merged, and all of the changes and commits that were made are interlaced into the main branch.
  - That means that on your local machine, you can then perform `git pull` on your main branch and receive the new feature, and then continue coding.
  - If you had a different branch you were working on when a feature was added into the main branch, you can merge your main branch into your own so that you are always _up to date_ with the existing main branch as you are developing.
    - This minimizes the risk of conflicts in the future, when two developers write into the same line of code!

#### What is the difference between `git push` and `git push origin master`? (main instead of master)

- `git push` -> look for your remote repository's same branch name.
  - Okay, where is my "git push origin main" // git push origin sarahbranch
  - If it exists, then it will push the code up to that remote repo.
  - If it doesn't exist, you will receive an error and you will have to manually type in which branchname and which remote repository you are sending your code to.

#### Difference between a pull request and `git merge`?

- `pull request`: belong to GitHub
  -
