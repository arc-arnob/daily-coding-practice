class Solution {

    public static void main(String args[]){
        setZeroes();
    }

    public void setZeroes(int[][] matrix) {
        // 2 traverse needed
        // Row Check
        int[] rowChk = new int[matrix.length];
        // Column Check
        int[] colChk = new int[matrix[0].length];
        
        Arrays.fill(rowChk, -1);
        Arrays.fill(colChk, -1);
    
        
        for(int i=0; i < matrix.length; i++){
            for(int j=0; j < matrix[0].length ; j++){
                if(matrix[i][j] == 0){
                    rowChk[i] = 0;
                    colChk[j] = 0;
                }
            }
        }
        
        for(int i=0; i< matrix.length; i++){
            for(int j=0; j< matrix[0].length ; j++){
                if( rowChk[i] == 0 || colChk[j] == 0 ){
                    matrix[i][j] = 0;
                }
            }
        }
    }
}

























