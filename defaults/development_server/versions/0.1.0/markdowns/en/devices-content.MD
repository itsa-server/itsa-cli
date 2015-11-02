By changing the `viewname` or `modelname` with a affinity, you can setup different view-files to be served on the next devices: desktop, tablet and phone:

## views
* **viewname.jsx** <-- desktop (default)
* **viewname@tablet.jsx** <-- tablet
* **viewname@phone.jsx** <-- phone

## models
* **modelname.jsx** <-- desktop (default)
* **modelname@tablet.jsx** <-- tablet
* **modelname@phone.jsx** <-- phone

## fallback
The system works with fallback, explained in the next scheme:

* only viewname.jsx <-- desktop, tablet and phone
* viewname.jsx and viewname@tablet.jsx <-- desktop gets viewname.jsx, phone and tablet get viewname@tablet.jsx
* viewname.jsx and viewname@phone.jsx <-- desktop and tablet get viewname.jsx, phone gets viewname@phone.jsx

