
function punkteSpeichern(punktezahl) {
    localStorage.setItem('punkte', punktezahl);
}

function punkteAbfragen() {
    var punkte = localStorage.getItem('punkte');

    if (isNaN(punkte)) {
        // falls Punkte keine Nummer sind oder nicht definiert sind, 0 zurückgeben.
        punkte = 0;
    }
    return Number(punkte);
}



function punkteErhöhen(anzahl) {
    var momentanePunkte = punkteAbfragen();
    momentanePunkte = momentanePunkte + anzahl;
    punkteSpeichern(momentanePunkte);
}

function punkteZurücksetzen() {
    punkteSpeichern(0);
}



function endergebnisBerechnen() {
    var endresultat = punkteAbfragen();
    punkteZurücksetzen();

    if (endresultat >= 0 && endresultat <= 7) {
        // Punkte zwischen 0 und 7
        window.location.href = 'endergebnis-a.html';

    } else if (endresultat >= 8 && endresultat <= 10) {
        // Punkte zwischen 8 und 10
        window.location.href = 'endergebnis-b.html';

    } else if (endresultat >= 11 && endresultat <= 15) {
        // Punkte zwischen 11 und 15
        window.location.href = 'endergebnis-c.html';

    } else {
        // Punkte zu hoch oder zu tief
        alert('Fehler bei Anzahl Punkten!');

    }
}
