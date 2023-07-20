const printSubsequences = (str, ans) => {

    // Thought each element decides it will come or not
    if (str.length === 0) {
        console.log(ans);
        return;
    }

    const fChar = str[0];
    const remainingString = str.substring(1);

    printSubsequences(remainingString, fChar + ans);
    printSubsequences(remainingString, ans);
}

// printSubsequences("abc", "");

/**
 * import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {

    }

    public static ArrayList<String> gss(String str) {
        return null;
    }

}
 */

// Expectation : f(abc) -> all subsequence of abc
// Faith: f(bc) -> all subsequence of bc -> '', b, c, bc
// Meet: f(abc) -> a + f(bc) -> ignore a add all above -> add a to all above. 

const getSubsequencesWithoutSignatureChange = (str) => {
    if (str.length == 0) {
        return [''];
    }
    let firstChar = str.charAt(0);
    let midRes = getSubsequencesWithoutSignatureChange(str.substring(1));
    let arr = [];
    for (let i in midRes) {
        arr.push('' + midRes[i]);
        arr.push(firstChar + midRes[i]);
    }
    return arr;
}

console.log(getSubsequencesWithoutSignatureChange('abc'));
