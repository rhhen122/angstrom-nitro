import os
# This defines an easier command to type
def sh(cmd):
    os.system(cmd)
while True:
    cnt = input('Files to commit, end with ! : ')
    if cnt == '!':
        break
    else:
        sh(f'git add {cnt}')
while True:
    cnt = input('Commit Message, if none end with ! : ')
    if cnt == '!':
        break
    else:
        sh(f'git commit -m "{cnt}"')
