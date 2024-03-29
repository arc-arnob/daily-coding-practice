/**
 *
 * An image is represented by an m x n integer
 * grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color.
You should perform a flood fill on the image starting
from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel,
plus any pixels connected 4-directionally to the starting
pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

https://leetcode.com/problems/flood-fill/description/
 */
var floodFillRecursive = function (image, sr, sc, color, newColor) {
    if (sr < 0 || sc < 0)
        return;
    if (sc >= image[0].length || sr >= image.length)
        return;
    // Marker that the current cell is being considered
    if (image[sr][sc] < 0)
        return;
    if (image[sr][sc] !== color)
        return;
    if (image[sr][sc] === color) {
        image[sr][sc] === 0 ? image[sr][sc] = -1
            : image[sr][sc] = -1 * image[sr][sc];
        floodFillRecursive(image, sr, sc + 1, color, newColor);
        floodFillRecursive(image, sr - 1, sc, color, newColor);
        floodFillRecursive(image, sr + 1, sc, color, newColor);
        floodFillRecursive(image, sr, sc - 1, color, newColor);
        image[sr][sc] = newColor;
    }
};
var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] !== color)
        floodFillRecursive(image, sr, sc, image[sr][sc], color);
    return image;
};
var image = [[0, 0, 0], [0, 0, 0]];
var sr = 1;
var sc = 0;
var color = 2;
console.log(floodFill(image, sr, sc, color));
//# sourceMappingURL=flood-fill.js.map