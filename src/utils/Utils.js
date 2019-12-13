export default class Utils {
  static downloadStringAsFile = (filename, string) => {
    var link = document.createElement('a');
    link.download = filename;
    var blob = new Blob([string], {type: 'text/plain'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }
}
