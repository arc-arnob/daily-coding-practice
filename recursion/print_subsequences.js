const printSubsequences= (str, ans) => {

    // Thought each element decides it will come or not
    if(str.length === 0){
        console.log(ans);
        return;
    }

    const fChar = str[0];
    const remainingString = str.substring(1);

    printSubsequences(remainingString, fChar + ans);
    printSubsequences(remainingString, ans);
}

printSubsequences("abc", "");