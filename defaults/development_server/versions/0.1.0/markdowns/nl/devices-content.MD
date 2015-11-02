Door de `viewnaam` of `modelnaam` te voorzien van een affinity, is het mogelijk afwijkende views te genereren voor de volgende devices: desktop, tablet en mobiele telefoon:

## views
* **viewname.jsx** <-- desktop (default)
* **viewname@tablet.jsx** <-- tablet
* **viewname@phone.jsx** <-- mobiele telefoon

## models
* **modelname.jsx** <-- desktop (default)
* **modelname@tablet.jsx** <-- tablet
* **modelname@phone.jsx** <-- mobiele telefoon

## fallback
Het principe werkt met een fallback:

* alleen viewname.jsx <-- desktop, tablet and mobiele telefoon
* viewname.jsx en viewname@tablet.jsx <-- desktop ontvangt viewname.jsx, mobiele telefoon en tablet ontvangen viewname@tablet.jsx
* viewname.jsx en viewname@phone.jsx <-- desktop en tablet ontvangen viewname.jsx, mobiele telefoon ontvangt viewname@phone.jsx

