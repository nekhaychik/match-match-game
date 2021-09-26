export function delay(timeout: number): Promise<void> { // преобразует timeout в промис
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
