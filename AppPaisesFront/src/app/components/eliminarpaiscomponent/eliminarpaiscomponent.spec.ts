import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Eliminarpaiscomponent } from "./eliminarpaiscomponent";

describe("Eliminarpaiscomponent", () => {
  let component: Eliminarpaiscomponent;
  let fixture: ComponentFixture<Eliminarpaiscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eliminarpaiscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Eliminarpaiscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
