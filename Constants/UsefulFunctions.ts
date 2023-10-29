export const performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }
export const arrayToChunks = (arr:any[], chunkSize:number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
}