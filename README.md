Error checks
1. Always allow only 1 data to be active
- Check if player data is still active
- if true unable to create new char
- data loaded will always be the active 1 (identify the active session)
- refresh data on log in (!!!if more than 1 session found throw errors!!!)