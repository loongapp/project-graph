import { ContainerEntity } from "../abstract/ContainerEntity";

export class SectionEntity extends ContainerEntity {
  // mouseListener: MouseListener = this;
  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  // onDown(event: MouseEvent): void {
  //   throw new Error("Method not implemented.");
  // }
  // onUp(event: MouseEvent): void {
  //   throw new Error("Method not implemented.");
  // }
  // onMove(event: MouseEvent): void {
  //   throw new Error("Method not implemented.");
  // }
  // onClick(event: MouseEvent): void {
  //   throw new Error("Method not implemented.");
  // }

  render(ctx: CanvasRenderingContext2D): void {
    this.renderOnce(ctx);
  }

  renderOnce(ctx: CanvasRenderingContext2D): void {
    // 绘制背景
    ctx.fillStyle = "#AFAFAF";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
