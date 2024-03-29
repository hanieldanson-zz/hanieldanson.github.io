Phase 0 - Week 1

This is just the beginning

11/01/2014

The first week of Phase 0 has flown by and I’m a little surprised how much I’ve learned in such a short period of time. I had a basic understanding of command line from dabbling with basic terminal commands over the years, but now I actually feel comfortable working in the command line environment. This is just the beginning!

Over the course of the first week I learned plenty about version control. In my current role as a Client Services Representative, we use a cloud service called Hightail, similar to Dropbox, but supposedly more secure. When someone on my team updates a file and saves it, the existing filename remains the same but a version number is appended to the end. This is version control in a very basic sense, and it helps us keep track of changes as we go along. If we need to revert back to a previous state of the file, we just go back to previous iterations and go from there.

Git has a similar but more complex system that facilitates version control. Any person on a team can pull files from the master repository that they would like to modify into a branch, modify as they see fit, and then push the files back to the master. If there is a problem with the changes made to the master, you can easily revert back to the previous state before the changes were made. With Git, the process of changing a file is a little more involved than the Hightail process described above. You can use the *git status* command at any point during the process to see what state a file is in. These are a few of the basic ways that you can change, stage, and commit files:

1. Change the file(s) in the working directory in sublime.
2. Use the command *git status* at any point to see where the file is in the process
2. Stage the file(s) using *git add <file>*.
3. Commit the file(s) using *git commit <file>*. This moves the file(s) out of staging and into the Git directory.
4. If you decide you want to unstage a file, you can use *git reset HEAD <file>* and this will move it back to being untracked.
5. If you decide you want to make changes to a previous commit file, you can use *git reset --soft HEAD^ <file>* and this will allow you to make changes.

Github is an amazing tool that expands on this version control system to allow collaboration between teams all around the world on projects. The beauty of Github is in fact the social and collaborative nature of the platform. If you want to work on an open source project, all you have to do is create a separate fork, make a commit, and create a pull request so the changes can be reviewed. If the code looks good and everything else is in order, your changes will be merged into the master repository!


