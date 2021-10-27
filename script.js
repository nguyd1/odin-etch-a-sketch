const container=document.querySelector(".container");

// original
let counter=0;
for(let i=0;i<16;i++){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(let j=0;j<16;j++){
        const col=document.createElement("div");
        col.classList.add("col");
        col.id=counter;
        counter++;
        row.appendChild(col);
    }
}

const squares=document.querySelectorAll(".col");

squares.forEach(square=>{
    square.addEventListener("mouseover",()=>{
        console.log(square.id);
        square.classList.add("hover");
    });
});

const button=document.querySelector("button");

// reset
button.addEventListener("click",()=>{
    squares.forEach(square=>{
        square.classList.remove("hover");
    });

    let size=prompt("Enter number of squares per side: ","16");
    if(size>100) size=100;
    console.log(size);

    while(container.lastChild) container.removeChild(container.lastChild);

    let counter=0;
    for(let i=0;i<size;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j=0;j<size;j++){
            const col=document.createElement("div");
            col.classList.add("col");
            col.id=counter;
            counter++;
            row.appendChild(col);
        }
    }

    const squares1=document.querySelectorAll(".col");

    squares1.forEach(square=>{
        square.addEventListener("mouseover",()=>{
            console.log(square.id);
            square.classList.add("hover");
        });
    });
});