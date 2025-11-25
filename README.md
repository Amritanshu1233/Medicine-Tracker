# MediTrack Pro

A lightweight medicine inventory & expiry management web app. Track medicines, batch numbers, expiry dates and stock — with simple stats and Firebase-backed real-time sync.

---

## Demo / Preview

Open the app locally in your browser:

* `index.html` — file: `/mnt/data/index.html` 

---

## Features

* Anonymous/demo login + optional custom token support. 
* Real-time medicine list synced from Firestore (add / delete / live updates). 
* Search + status filters (Expired / Expiring Soon / Low Stock / Good). 
* Dashboard stats: Total, Expiring Soon, Expired, Low Stock. 
* Clean responsive UI (HTML + CSS).  

---

## Tech stack

* Plain HTML / CSS / JavaScript (ES modules).  
* Firebase (Auth + Firestore) for real-time backend. 

---

## Files of interest

* `/mnt/data/index.html` — main UI and boot script. 
* `/mnt/data/style.css` — app styles and badge/status colors. 
* `/mnt/data/app.js` — app logic, Firebase init, auth, Firestore listeners, UI rendering. 

---

## Quick start (local)

1. Clone the repo or copy files into a folder.
2. Install nothing — files are static. Just open `/mnt/data/index.html` in a modern browser (module support required). 
3. **Firebase** — before real sync, supply your Firebase config and (optionally) app id/token:

   * `app.js` expects a `__firebase_config` JSON and optional `__app_id` / `__initial_auth_token` variables to be injected at runtime. Edit or inject these where you serve the files (or replace the placeholders in the script). See `/mnt/data/app.js` for details. 

### Example: add config inline (development)

In `index.html` before loading `app.js` you can inject a small script (dev only):

```html
<script>
  window.__firebase_config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    // ...other firebase config
  };
  window.__app_id = "meditrack-pro-demo";
  // optional: window.__initial_auth_token = "CUSTOM_AUTH_TOKEN";
</script>
<script type="module" src="app.js"></script>
```

> For production, keep secrets out of the client — use a secure server or proper Firebase rules.

---

## Usage notes & behavior

* Login: clicking **Access Dashboard** triggers anonymous sign-in (demo). `app.js` also supports signing in with a custom token if `__initial_auth_token` is provided. 
* Medicines are loaded from Firestore under the path structure used in `app.js`: `artifacts / <appId> / users / <uid> / medicines`. Adjust your database rules and collection naming accordingly. 
* Status calculation: expiry days and stock thresholds are computed in `getStatus()` (expiry threshold coming from user settings; default threshold = 30 days). Check `app.js` to tweak logic. 

---

## UI / Styling

* Layout & components in `index.html`; styling in `style.css`. Colors and badge classes (`.badge.expired`, `.badge.warning`, etc.) are defined in the CSS file.  

---

## Extending the project (ideas)

* Add create / edit medicine modal and form persistence to Firestore. (Currently the UI scaffolds modals but they may be omitted/placeholder in the provided HTML.) 
* Add barcode scanning to auto-populate medicine details. The UI has a `Scan Barcode` button ready for integration. 
* Add notification delivery (email / push) when items reach threshold — user settings already include `notifications`. 

---

## Troubleshooting

* **"Loading inventory..." stuck** — check browser console for Firebase auth errors and ensure `__firebase_config` is present.  
* **Badges or colors not showing** — confirm `style.css` is loaded and variables in `:root` are intact. 

---

## Contributing

PRs welcome. Open an issue first if you plan to add features (e.g., editing medicines, CSV import/export, user management).

---

