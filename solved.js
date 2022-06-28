
const findButton = document.getElementById("find").addEventListener('click', findRowColumn)
function findRowColumn() {
    let num = document.querySelector('input').value
    arr = getRowColumn(num)
    document.getElementById('out').innerHTML = arr
}
//mock code to solve the problem 
//show for non treansition element 
function isnotT(n){
    if (n >= 1 && n <= 20) {
        return true
    }
    else if (n >= 31 && n <= 38){
        return true
    }
    else if (n >= 49 && n <= 56) {
        return true 
    }
    else if (n >= 81 && n <= 88)
    {
        return true
    }
    else if (n >= 113 &&  n <= 118){
        return true

    }
    else return false
}

let configstring = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p','7s']
let configvalue = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2]

//algorith to get configuration 
var cofigS = []



function getConfig(n){
    var configV = []
    let i = 0
    if (isnotT(n)) {
        while (n > 0) {
            if( (n -configvalue[i]) > 0) {
                n -= configvalue[i]
                configV[i] = configvalue[i]
            }
            else {
                configV[i] = n
                n -= configvalue[i]
                
            }
            i += 1
        }
        return configV
    }
}


function getRowColumn(n) {
    if (n == 1){
        return result=[1,1]
    }
    else if (!(isnotT(n))) {
        result = []
        if (n>= 21 && n <= 30 ) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            row= 4
            group = groupset[(n-21)]
            return result=[row,group] 

        } else if ( n>= 39 && n <=48) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            row = 5
            group = groupset[(n-39)]
            return result=[row,group]
        } else if ( n>= 71 && n <=80) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            row = 6
            group = groupset[(n-71)]
            return result=[row,group]
        } else if ( n>= 103 && n <=112) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            row = 7
            group = groupset[(n-103)]
            return result=[row,group]
        } else if ( n>= 57 && n <=70) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            row = 6
            group = groupset[(n-57)]
            return result=[row,group]
        } else if ( n>= 89 && n <=102) {
            groupset = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            row = 6
            group = groupset[(n-89)]
            return result=[row,group]
        }
    }
    else {
        row = groupSwitch(findGroup(getConfig(n)))
        col = findperiod(n)
        return result = [col, row]
        
    }
}

function findGroup(arr) {
    n = arr.length
    if (n == 1) {
        return 8
    } else if ((n == 2) || (n == 4) || (n ==6)  || (n ==9) || (n ==12) || (n == 16))
    {
        return arr[n-1]
    } else if ((n == 3) || (n ==5)) {
        return (arr[n-1] +arr[n-2])
    } else if ((n == 8) || (n == 11)) {
        return (arr[n-1] +arr[n-3])
    } else if (n == 15) {
        return (arr[n-1] +arr[n-4])
    }
}

function findperiod(n) {
    if ((n== 1) || (n == 2)) {
        return 1
    } else if (n >= 3 && n <= 10  ) {
        return 2
    } else if (n >= 11 && n <= 18) {
        return 3
    } else if((n >= 19 &&  n <= 20) || (n >= 31 && n <= 36)) {
        return 4
    } else if(( n >= 37 && n <= 38)||(n >= 49 || n <= 54)) {
        return 5
    }
    else if(( n >= 55 && n <= 56)||(n >= 81 || n <= 86)) {
        return 6
    }  else if (n >= 87 && n <= 88) {
        return 7
    } 
}

function groupSwitch(n){
    if (n == 8) return 18
    else if (n == 7) return 17
    else if (n == 6) return 16
    else if (n == 5) return 15
    else if (n == 4) return 14
    else if (n == 3) return 13
    else return n
    
    
}



console.log(getRowColumn(85))
