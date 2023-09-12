export const clipboardApi = {
  copyText: (text: string) =>
    navigator?.clipboard
      ?.writeText(text)
      .then(res => res)
      .catch(e => {
        console.error(e);
        return '';
      }),
  pasteText: () =>
    navigator?.clipboard
      ?.readText()
      .then(res => res)
      .catch(e => {
        console.error(e);
        return '';
      }),
};
