export default function getDuration(seconds) {
  let hours = Math.floor(seconds / 3600);
  const time = seconds - hours * 3600;
  const minutes = Math.floor(time / 60);
  const _seconds = time - minutes * 60;
  hours = hours ? hours + ':' : '';

  return (
    hours + str_pad_left(minutes, '0', 2) + ':' + str_pad_left(_seconds, '0', 2)
  );
}
function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}
