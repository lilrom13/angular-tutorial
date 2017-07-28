export class Ticket {
  private _id: number;
  private _title: string;
  private _content: string;
  private _postTime: Date;
  private _postedBy: string;

  public static GetNewInstance(): Ticket {
    return new Ticket(0, '', '', new Date(), '');
  }

  public constructor(id: number, title: string, content: string, date: Date, postedBy: string) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._postTime = date;
    this._postedBy = postedBy;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get postTime(): Date {
    return this._postTime;
  }

  set postTime(value: Date) {
    this._postTime = value;
  }

  get postedBy(): string {
    return this._postedBy;
  }

  set postedBy(value: string) {
    this._postedBy = value;
  }
}
