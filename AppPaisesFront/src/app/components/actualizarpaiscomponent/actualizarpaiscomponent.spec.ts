import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Actualizarpaiscomponent } from "./actualizarpaiscomponent";

describe("Actualizarpaiscomponent", () => {
  let component: Actualizarpaiscomponent;
  let fixture: ComponentFixture<Actualizarpaiscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Actualizarpaiscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarpaiscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
