// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector('div');

const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
 //tutaj rozwiązanie
 // PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)
    var passwordsToLower = passwords.map(p => p.toLowerCase());
    passwordsToLower.forEach(p => {
        if (e.target.value.toLowerCase() == p) {
            div.textContent = messages[passwordsToLower.indexOf(p)];
        }
    })
}

input.addEventListener("input", showMessage)



