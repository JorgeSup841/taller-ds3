import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Mostrarpaiscomponent } from "./mostrarpaiscomponent";

describe("Mostrarpaiscomponent", () => {
  let component: Mostrarpaiscomponent;
  let fixture: ComponentFixture<Mostrarpaiscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mostrarpaiscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mostrarpaiscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
