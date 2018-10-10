export namespace DateHelper {
  export const getFormatted = (date) => {
    return `${ date.getDate() }/${ date.getMonth() + 1}`;
  };
}
