const fs = require("fs");
let N = parseInt(fs.readFileSync(0, "utf8").trim());


let nechta_gugurt_donacha = (N) => {
    let donachalar_soni = 0
    
    while(true){
        switch(N % 10){
            case 0: donachalar_soni += 6
            break
            case 1: donachalar_soni += 2
            break
            case 2: donachalar_soni += 5
            break
            case 3: donachalar_soni += 5
            break
            case 4: donachalar_soni += 4
            break
            case 5: donachalar_soni += 5
            break
            case 6: donachalar_soni += 6
            break
            case 7: donachalar_soni += 3
            break
            case 8: donachalar_soni += 7
            break
            case 9: donachalar_soni += 6
            break
        }
        N = Math.trunc(N / 10)

        if(N == 0){break}
    }
    return donachalar_soni
}



console.log(nechta_gugurt_donacha(N))