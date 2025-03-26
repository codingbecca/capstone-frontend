# Custom Stocking Pattern Generator

This is the frontend for my Per Scholas capstone project — a four-page web app that generates a custom-sized, toe-up, thigh-high stocking pattern.

## Features
- **Pattern Generator:** The home page allows users to enter personal measurements (or those of the intended recipient), gauge swatch details, desired stocking length, and the length of an accent pattern. The app then calculates a tailored knitting pattern.
- **Pattern Management:** Saved patterns can be accessed from the "Patterns" tab. Clicking on a pattern title opens the full pattern, where users can print, edit, or delete it.
- **Projects Page:** View a list of all projects (functionality not yet implemented).
- **Project Tracker:** Users can log knitting projects with a name, notes, and recipient details.
- **Ravelry Integration:** Projects can be saved directly to my personal Ravelry account.

## Technology used
- React (frontend framework)
- Tailwind CSS & vanilla CSS (styling)
- Axios (API requests)

## Future work
- **Project management:** Project cards on the "Projects" tab will be clickable, opening the project where users can edit or delete the project, or save/update the project on Ravelry.
- **User Authentication:** Implement signup and login functionality so users can have personal accounts.
- **User-Specific Patterns:** Restrict the "Patterns" page to display only the patterns created by the logged-in user.
- **OAuth for Ravelry:** Update the Ravelry integration to use OAuth, allowing users to save projects to their personal Ravelry accounts instead of mine.
