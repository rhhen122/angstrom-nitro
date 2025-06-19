import os
def sh(cmd):
    os.system(cmd)
while True:
    branch = input('Branch name: ')
    cnt = input('1. Tags, 2. Commits')
    if cnt == '1':
        cnt = input('Enter Deploy location for git: ')
        sh(f'git push {cnt} {branch}')
        break
    else:
        cnt = input('Enter Deploy location for git: ')
        sh(f'git push {cnt} {branch}')
        break
