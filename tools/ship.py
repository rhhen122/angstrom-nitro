import os
# This defines an easier command to type
def sh(cmd):
    os.system(cmd)
# Pre code
sh('mkdir ./app/')
while True:
    cnt = input('Enter file paths and type ! to stop: ')
    if cnt == '!':
        break
    else:
        sh(f'cp {cnt} ./app/{cnt}')
