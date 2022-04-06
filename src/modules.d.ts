declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}