/**
 * Splits an array into chunks of a specified size.
 * @param array - The input array to be chunked.
 * @param size - The size of each chunk.
 * @returns A new array of chunks.
 */

export function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((result, _, index) => {
    if (index % size === 0) result.push(array.slice(index, index + size));
    return result;
  }, [] as T[][]);
}
