import { TestBed } from "@angular/core/testing";
import { Paisservice } from "./paisservice";

describe("Paisservice", () => {
  let service: Paisservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paisservice);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
