export default function (...fs: Array<(x: any) => any>) {
  return (x: any): any =>
    fs.reduceRight((y, f) => f(y), x)
}
