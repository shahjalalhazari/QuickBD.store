export function formatRelativeTime(date){
  const now = new Date();
  const then = new Date(date);

  const diff=
  (now-then)/(1000*60);

  if(diff <60)
    return `${Math.floor(diff)} min ago`;

  if(diff <1440)
    return `${Math.floor(diff/60)} hrs ago`;

  return "Yesterday";
}
