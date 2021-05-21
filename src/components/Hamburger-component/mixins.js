export function toogleHamburguer( rotateA, rotateB, rotateC, position){
    return`
       
      
        transform:rotate(${rotateA}deg);
        ::before {
            transform:rotate(${rotateB}deg);
            top: ${position};
        }

        ::after {
            transform:rotate(${rotateC}deg);
            top: ${position};
        }
    `;
}