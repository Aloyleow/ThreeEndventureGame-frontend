defining properties
1. Human - used in verification where it is automated
2. User - used in verification where it is manual
3. Role - player chosen role 
4. Player - after role chosen, user becomes player
5. Character - after role chosen, the player controls the character 

Error checks
1. Always allow only 1 data to be active
- Check if player data is still active
- if true unable to create new char
- data loaded will always be the active 1 (identify the active session)
- refresh data on log in (!!!if more than 1 session found throw errors!!!)

notes 
-exisitngsessioncomponent, save file not done up (always delete active session)

