
Design-rules:

* Do not require css inside app.js --> this css would only be available when rendered on the client, not serverside
* The `views` directory should consist of jsx files with no other responsibility then returning a react-component. No browser `window` properties or methods should be used here
* No dots in the view-filename, other than extention

Use require.ensure only inside the Apps-folder
There always should be a `main.jsx` app inside the Apps-folder --> this will be used for all views that don't have a matching app-name
No requirements from outside the App-folder to files inside the App-folder
No require('css') from within the App-folder --> require all css from the Views-folder
No require.ensure within the views!
Use __('language_sentence') only within apps. Translation within views should be handled by the models
DO NOT require affinity-files --> web[ack will tak care of this by building files for each and every affinity]