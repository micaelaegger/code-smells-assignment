/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
    return jumpings.reduce(
      (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump,
      0 
    );
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
  }
  
  function getStudentStatus(student: Student): string {
    let passed: boolean;

    if (student.name === "Sebastian" && student.handedInOnTime) {
      passed = true;
    } else {
      passed = false;
    }

    return passed ? "VG" : "IG";
  }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
  class TemperatureRecord {
    constructor(public location: string, public date: Date, public temperature: number) {}
  }
  
  function sumWeeklyTemperature(records: TemperatureRecord[]) {
    let totalTemperature = 0;
  
    for (let i = 0; i < records.length; i++) {
      if (records[i].location === "Stockholm") {
        if (records[i].date.getTime() > Date.now() - 604800000) {
          totalTemperature += records[i].temperature;
        }
      }
    }
  
    return totalTemperature / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
class Product {
  constructor(
    public name: string,
    public price: number,
    public amount: number,
    public description: string,
    public image: string
  ) {}
}

function createProductHTML(product: Product): HTMLElement {
  const container = document.createElement("div");
  container.innerHTML = `
    <h4>${product.name}</h4>
    <img src="${product.image}" alt="${product.name}">
    <p>${product.price}</p>
    <p>${product.description}</p>
    <p>Amount: ${product.amount}</p>
  `;
  return container;
}

// Förutsatt att det då finns ett div-element med id "product-container" i HTML:en. 
function showProduct(product: Product) {
  const parent = document.getElementById("product-container") as HTMLElement;
  const productHTML = createProductHTML(product);
  parent?.appendChild(productHTML);
}
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  function presentStudents(students: Student[]) {
    for (const student of students) {
      if (student.handedInOnTime) {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
  
        container.appendChild(checkbox);
        let listOfStudents = document.querySelector("ul#passedstudents");
        listOfStudents?.appendChild(container);
      } else {
        let container = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;
  
        container.appendChild(checkbox);
        let listOfStudents = document.querySelector("ul#failedstudents");
        listOfStudents?.appendChild(container);
      }
    }
  }
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings(): string {
    const words = ["Lorem", "ipsum", "dolor", "sit", "amet"];
    return words.join(", ");
  }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
interface User {
  name: string;
  birthday: Date;
  email: string;
  password: string;
  avatar?: string; 
  address?: string; 
}

function createUser(user: User): string {
  const ageDiff = Date.now() - user.birthday.getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (userAge >= 20) {
    
    return "Användare skapad";
  } else {
    return "Du är under 20 år";
  }
}