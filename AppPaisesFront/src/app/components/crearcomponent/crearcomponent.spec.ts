import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Crearcomponent } from "./crearcomponent";

describe("Crearcomponent", () => {
  let component: Crearcomponent;
  let fixture: ComponentFixture<Crearcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Crearcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Crearcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
